/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var media = techlogging.media;

media.view.MediaFrame.Manage = __webpack_require__( 1 );
// media.view.Attachment.Details.TwoColumn = require( './views/attachment/details-two-column.js' );
// media.view.MediaFrame.Manage.Router = require( './routers/manage.js' );
// media.view.EditImage.Details = require( './views/edit-image-details.js' );
// media.view.SelectModeToggleButton = require( './views/button/select-mode-toggle.js' );
// media.view.DeleteSelectedButton = require( './views/button/delete-selected.js' );
// media.view.DeleteSelectedPermanentlyButton = require( './views/button/delete-selected-permanently.js' );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var MediaFrame = techlogging.media.view.MediaFrame,
	Library = techlogging.media.controller.Library,

	$ = Backbone.$,
	Manage;

/**
 * techlogging.media.view.MediaFrame.Manage
 *
 * A generic management frame workflow.
 *
 * Used in the media grid view.
 *
 * @memberOf techlogging.media.view.MediaFrame
 *
 * @class
 * @augments techlogging.media.view.MediaFrame
 * @augments techlogging.media.view.Frame
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 * @mixes techlogging.media.controller.StateMachine
 */
Manage = MediaFrame.extend(/** @lends techlogging.media.view.MediaFrame.Manage.prototype */{
	/**
	 * @constructs
	 */
	initialize: function() {
		_.defaults( this.options, {
			title:     '',
			modal:     false,
			selection: [],
			library:   {}, // Options hash for the query to the media library.
			multiple:  'add',
			state:     'library',
			uploader:  true,
			mode:      [ 'grid', 'edit' ]
		});

		this.$body = $( document.body );
		this.$window = $( window );
		this.$adminBar = $( '#wpadminbar' );
		// Store the Add New button for later reuse in techlogging.media.view.UploaderInline.
		this.$uploaderToggler = $( '.page-title-action' )
			.attr( 'aria-expanded', 'false' )
			.on( 'click', _.bind( this.addNewClickHandler, this ) );

		this.$window.on( 'scroll resize', _.debounce( _.bind( this.fixPosition, this ), 15 ) );

		// Ensure core and media grid view UI is enabled.
		this.$el.addClass('wp-core-ui');

		// Force the uploader off if the upload limit has been exceeded or
		// if the browser isn't supported.
		if ( techlogging.Uploader.limitExceeded || ! techlogging.Uploader.browser.supported ) {
			this.options.uploader = false;
		}

		// Initialize a window-wide uploader.
		if ( this.options.uploader ) {
			this.uploader = new techlogging.media.view.UploaderWindow({
				controller: this,
				uploader: {
					dropzone:  document.body,
					container: document.body
				}
			}).render();
			this.uploader.ready();
			$('body').append( this.uploader.el );

			this.options.uploader = false;
		}

		this.gridRouter = new techlogging.media.view.MediaFrame.Manage.Router();

		// Call 'initialize' directly on the parent class.
		MediaFrame.prototype.initialize.apply( this, arguments );

		// Append the frame view directly the supplied container.
		this.$el.appendTo( this.options.container );

		this.createStates();
		this.bindRegionModeHandlers();
		this.render();
		this.bindSearchHandler();

		techlogging.media.frames.browse = this;
	},

	bindSearchHandler: function() {
		var search = this.$( '#media-search-input' ),
			searchView = this.browserView.toolbar.get( 'search' ).$el,
			listMode = this.$( '.view-list' ),

			input  = _.throttle( function (e) {
				var val = $( e.currentTarget ).val(),
					url = '';

				if ( val ) {
					url += '?search=' + val;
					this.gridRouter.navigate( this.gridRouter.baseUrl( url ), { replace: true } );
				}
			}, 1000 );

		// Update the URL when entering search string (at most once per second)
		search.on( 'input', _.bind( input, this ) );

		this.gridRouter
			.on( 'route:search', function () {
				var href = window.location.href;
				if ( href.indexOf( 'mode=' ) > -1 ) {
					href = href.replace( /mode=[^&]+/g, 'mode=list' );
				} else {
					href += href.indexOf( '?' ) > -1 ? '&mode=list' : '?mode=list';
				}
				href = href.replace( 'search=', 's=' );
				listMode.prop( 'href', href );
			})
			.on( 'route:reset', function() {
				searchView.val( '' ).trigger( 'input' );
			});
	},

	/**
	 * Create the default states for the frame.
	 */
	createStates: function() {
		var options = this.options;

		if ( this.options.states ) {
			return;
		}

		// Add the default states.
		this.states.add([
			new Library({
				library:            techlogging.media.query( options.library ),
				multiple:           options.multiple,
				title:              options.title,
				content:            'browse',
				toolbar:            'select',
				contentUserSetting: false,
				filterable:         'all',
				autoSelect:         false
			})
		]);
	},

	/**
	 * Bind region mode activation events to proper handlers.
	 */
	bindRegionModeHandlers: function() {
		this.on( 'content:create:browse', this.browseContent, this );

		// Handle a frame-level event for editing an attachment.
		this.on( 'edit:attachment', this.openEditAttachmentModal, this );

		this.on( 'select:activate', this.bindKeydown, this );
		this.on( 'select:deactivate', this.unbindKeydown, this );
	},

	handleKeydown: function( e ) {
		if ( 27 === e.which ) {
			e.preventDefault();
			this.deactivateMode( 'select' ).activateMode( 'edit' );
		}
	},

	bindKeydown: function() {
		this.$body.on( 'keydown.select', _.bind( this.handleKeydown, this ) );
	},

	unbindKeydown: function() {
		this.$body.off( 'keydown.select' );
	},

	fixPosition: function() {
		var $browser, $toolbar;
		if ( ! this.isModeActive( 'select' ) ) {
			return;
		}

		$browser = this.$('.attachments-browser');
		$toolbar = $browser.find('.media-toolbar');

		// Offset doesn't appear to take top margin into account, hence +16
		if ( ( $browser.offset().top + 16 ) < this.$window.scrollTop() + this.$adminBar.height() ) {
			$browser.addClass( 'fixed' );
			$toolbar.css('width', $browser.width() + 'px');
		} else {
			$browser.removeClass( 'fixed' );
			$toolbar.css('width', '');
		}
	},

	/**
	 * Click handler for the `Add New` button.
	 */
	addNewClickHandler: function( event ) {
		event.preventDefault();
		this.trigger( 'toggle:upload:attachment' );

		if ( this.uploader ) {
			this.uploader.refresh();
		}
	},

	/**
	 * Open the Edit Attachment modal.
	 */
	openEditAttachmentModal: function( model ) {
		// Create a new EditAttachment frame, passing along the library and the attachment model.
		if ( techlogging.media.frames.edit ) {
			techlogging.media.frames.edit.open().trigger( 'refresh', model );
		} else {
			techlogging.media.frames.edit = techlogging.media( {
				frame:       'edit-attachments',
				controller:  this,
				library:     this.state().get('library'),
				model:       model
			} );
		}
	},

	/**
	 * Create an attachments browser view within the content region.
	 *
	 * @param {Object} contentRegion Basic object with a `view` property, which
	 *                               should be set with the proper region view.
	 * @this techlogging.media.controller.Region
	 */
	browseContent: function( contentRegion ) {
		var state = this.state();

		// Browse our library of attachments.
		this.browserView = contentRegion.view = new techlogging.media.view.AttachmentsBrowser({
			controller: this,
			collection: state.get('library'),
			selection:  state.get('selection'),
			model:      state,
			sortable:   state.get('sortable'),
			search:     state.get('searchable'),
			filters:    state.get('filterable'),
			date:       state.get('date'),
			display:    state.get('displaySettings'),
			dragInfo:   state.get('dragInfo'),
			sidebar:    'errors',

			suggestedWidth:  state.get('suggestedWidth'),
			suggestedHeight: state.get('suggestedHeight'),

			AttachmentView: state.get('AttachmentView'),

			scrollElement: document
		});
		this.browserView.on( 'ready', _.bind( this.bindDeferred, this ) );

		this.errors = techlogging.Uploader.errors;
		this.errors.on( 'add remove reset', this.sidebarVisibility, this );
	},

	sidebarVisibility: function() {
		this.browserView.$( '.media-sidebar' ).toggle( !! this.errors.length );
	},

	bindDeferred: function() {
		if ( ! this.browserView.dfd ) {
			return;
		}
		this.browserView.dfd.done( _.bind( this.startHistory, this ) );
	},

	startHistory: function() {
		// Verify pushState support and activate
		if ( window.history && window.history.pushState ) {
			if ( Backbone.History.started ) {
				Backbone.history.stop();
			}
			Backbone.history.start( {
				root: window._wpMediaGridSettings.adminUrl,
				pushState: true
			} );
		}
	}
});

module.exports = Manage;


/***/ })
/******/ ]);