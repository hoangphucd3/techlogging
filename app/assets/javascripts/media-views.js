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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var media = techlogging.media,
	$ = jQuery;

media.isTouchDevice = ( 'ontouchend' in document );

// Link any settings.
media.view.settings = {};

// Copy the `post` setting over to the model settings.
media.model.settings.post = media.view.settings.post;

// Check if the browser supports CSS 3.0 transitions
$.support.transition = (function(){
	var style = document.documentElement.style,
		transitions = {
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition:    'transitionend',
			OTransition:      'oTransitionEnd otransitionend',
			transition:       'transitionend'
		}, transition;

	transition = _.find( _.keys( transitions ), function( transition ) {
		return ! _.isUndefined( style[ transition ] );
	});

	return transition && {
		end: transitions[ transition ]
	};
}());

/**
 * A shared event bus used to provide events into
 * the media workflows that 3rd-party devs can use to hook
 * in.
 */
media.events = _.extend( {}, Backbone.Events );

/**
 * Makes it easier to bind events using transitions.
 *
 * @param {string} selector
 * @param {Number} sensitivity
 * @returns {Promise}
 */
media.transition = function( selector, sensitivity ) {
	var deferred = $.Deferred();

	sensitivity = sensitivity || 2000;

	if ( $.support.transition ) {
		if ( ! (selector instanceof $) ) {
			selector = $( selector );
		}

		// Resolve the deferred when the first element finishes animating.
		selector.first().one( $.support.transition.end, deferred.resolve );

		// Just in case the event doesn't trigger, fire a callback.
		_.delay( deferred.resolve, sensitivity );

	// Otherwise, execute on the spot.
	} else {
		deferred.resolve();
	}

	return deferred.promise();
};

media.controller.Region = __webpack_require__( 8 );
media.controller.StateMachine = __webpack_require__( 9 );
media.controller.State = __webpack_require__( 10 );

media.selectionSync = __webpack_require__( 11 );
media.controller.Library = __webpack_require__( 12 );
media.controller.ImageDetails = __webpack_require__( 13 );
media.controller.CollectionEdit = __webpack_require__( 14 );
media.controller.CollectionAdd = __webpack_require__( 15 );
media.controller.MediaLibrary = __webpack_require__( 16 );

media.View = __webpack_require__( 17 );
media.view.Frame = __webpack_require__( 18 );
media.view.MediaFrame = __webpack_require__( 19 );
media.view.MediaFrame.Select = __webpack_require__( 20 );
media.view.MediaFrame.Post = __webpack_require__( 21 );
media.view.MediaFrame.ImageDetails = __webpack_require__( 22 );
media.view.Modal = __webpack_require__( 23 );
media.view.FocusManager = __webpack_require__( 24 );
media.view.UploaderWindow = __webpack_require__( 25 );
media.view.EditorUploader = __webpack_require__( 26 );
media.view.UploaderInline = __webpack_require__( 27 );
media.view.UploaderStatus = __webpack_require__( 28 );
media.view.UploaderStatusError = __webpack_require__( 29 );
media.view.Toolbar = __webpack_require__( 30 );
// media.view.Toolbar.Select = require( './views/toolbar/select.js' );
// media.view.Toolbar.Embed = require( './views/toolbar/embed.js' );
// media.view.Button = require( './views/button.js' );
// media.view.ButtonGroup = require( './views/button-group.js' );
// media.view.PriorityList = require( './views/priority-list.js' );
// media.view.MenuItem = require( './views/menu-item.js' );
// media.view.Menu = require( './views/menu.js' );
media.view.RouterItem = __webpack_require__( 31 );
media.view.Router = __webpack_require__( 32 );
media.view.Sidebar = __webpack_require__( 33 );
// media.view.Attachment = require( './views/attachment.js' );
// media.view.Attachment.Library = require( './views/attachment/library.js' );
// media.view.Attachment.EditLibrary = require( './views/attachment/edit-library.js' );
// media.view.Attachments = require( './views/attachments.js' );
// media.view.Search = require( './views/search.js' );
// media.view.AttachmentFilters = require( './views/attachment-filters.js' );
// media.view.DateFilter = require( './views/attachment-filters/date.js' );
// media.view.AttachmentFilters.Uploaded = require( './views/attachment-filters/uploaded.js' );
// media.view.AttachmentFilters.All = require( './views/attachment-filters/all.js' );
// media.view.AttachmentsBrowser = require( './views/attachments/browser.js' );
// media.view.Selection = require( './views/selection.js' );
// media.view.Attachment.Selection = require( './views/attachment/selection.js' );
// media.view.Attachments.Selection = require( './views/attachments/selection.js' );
// media.view.Attachment.EditSelection = require( './views/attachment/edit-selection.js' );
// media.view.Settings = require( './views/settings.js' );
// media.view.Settings.AttachmentDisplay = require( './views/settings/attachment-display.js' );
// media.view.Attachment.Details = require( './views/attachment/details.js' );
// media.view.AttachmentCompat = require( './views/attachment-compat.js' );
// media.view.Iframe = require( './views/iframe.js' );
// media.view.Embed = require( './views/embed.js' );
// media.view.Label = require( './views/label.js' );
// media.view.ImageDetails = require( './views/image-details.js' );
// media.view.EditImage = require( './views/edit-image.js' );
media.view.Spinner = __webpack_require__( 34 );


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * techlogging.media.controller.Region
 *
 * A region is a persistent application layout area.
 *
 * A region assumes one mode at any time, and can be switched to another.
 *
 * When mode changes, events are triggered on the region's parent view.
 * The parent view will listen to specific events and fill the region with an
 * appropriate view depending on mode. For example, a frame listens for the
 * 'browse' mode t be activated on the 'content' view and then fills the region
 * with an AttachmentsBrowser view.
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 *
 * @param {object}        options          Options hash for the region.
 * @param {string}        options.id       Unique identifier for the region.
 * @param {Backbone.View} options.view     A parent view the region exists within.
 * @param {string}        options.selector jQuery selector for the region within the parent view.
 */
var Region = function( options ) {
	_.extend( this, _.pick( options || {}, 'id', 'view', 'selector' ) );
};

// Use Backbone's self-propagating `extend` inheritance method.
Region.extend = Backbone.Model.extend;

_.extend( Region.prototype,/** @lends techlogging.media.controller.Region.prototype */{
	/**
	 * Activate a mode.
	 *
	 * @since 3.5.0
	 *
	 * @param {string} mode
	 *
	 * @fires Region#activate
	 * @fires Region#deactivate
	 *
	 * @returns {techlogging.media.controller.Region} Returns itself to allow chaining.
	 */
	mode: function( mode ) {
		if ( ! mode ) {
			return this._mode;
		}
		// Bail if we're trying to change to the current mode.
		if ( mode === this._mode ) {
			return this;
		}

		/**
		 * Region mode deactivation event.
		 *
		 * @event techlogging.media.controller.Region#deactivate
		 */
		this.trigger('deactivate');

		this._mode = mode;
		this.render( mode );

		/**
		 * Region mode activation event.
		 *
		 * @event techlogging.media.controller.Region#activate
		 */
		this.trigger('activate');
		return this;
	},
	/**
	 * Render a mode.
	 *
	 * @since 3.5.0
	 *
	 * @param {string} mode
	 *
	 * @fires Region#create
	 * @fires Region#render
	 *
	 * @returns {techlogging.media.controller.Region} Returns itself to allow chaining
	 */
	render: function( mode ) {
		// If the mode isn't active, activate it.
		if ( mode && mode !== this._mode ) {
			return this.mode( mode );
		}

		var set = { view: null },
			view;

		/**
		 * Create region view event.
		 *
		 * Region view creation takes place in an event callback on the frame.
		 *
		 * @event techlogging.media.controller.Region#create
		 * @type {object}
		 * @property {object} view
		 */
		this.trigger( 'create', set );
		view = set.view;

		/**
		 * Render region view event.
		 *
		 * Region view creation takes place in an event callback on the frame.
		 *
		 * @event techlogging.media.controller.Region#render
		 * @type {object}
		 */
		this.trigger( 'render', view );
		if ( view ) {
			this.set( view );
		}
		return this;
	},

	/**
	 * Get the region's view.
	 *
	 * @since 3.5.0
	 *
	 * @returns {techlogging.media.View}
	 */
	get: function() {
		return this.view.views.first( this.selector );
	},

	/**
	 * Set the region's view as a subview of the frame.
	 *
	 * @since 3.5.0
	 *
	 * @param {Array|Object} views
	 * @param {Object} [options={}]
	 * @returns {techlogging.Backbone.Subviews} Subviews is returned to allow chaining
	 */
	set: function( views, options ) {
		if ( options ) {
			options.add = false;
		}
		return this.view.views.set( this.selector, views, options );
	},

	/**
	 * Trigger regional view events on the frame.
	 *
	 * @since 3.5.0
	 *
	 * @param {string} event
	 * @returns {undefined|techlogging.media.controller.Region} Returns itself to allow chaining.
	 */
	trigger: function( event ) {
		var base, args;

		if ( ! this._mode ) {
			return;
		}

		args = _.toArray( arguments );
		base = this.id + ':' + event;

		// Trigger `{this.id}:{event}:{this._mode}` event on the frame.
		args[0] = base + ':' + this._mode;
		this.view.trigger.apply( this.view, args );

		// Trigger `{this.id}:{event}` event on the frame.
		args[0] = base;
		this.view.trigger.apply( this.view, args );
		return this;
	}
});

module.exports = Region;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * techlogging.media.controller.StateMachine
 *
 * A state machine keeps track of state. It is in one state at a time,
 * and can change from one state to another.
 *
 * States are stored as models in a Backbone collection.
 *
 * @memberOf techlogging.media.controller
 *
 * @since 3.5.0
 *
 * @class
 * @augments Backbone.Model
 * @mixin
 * @mixes Backbone.Events
 *
 * @param {Array} states
 */
var StateMachine = function( states ) {
	// @todo This is dead code. The states collection gets created in media.view.Frame._createStates.
	this.states = new Backbone.Collection( states );
};

// Use Backbone's self-propagating `extend` inheritance method.
StateMachine.extend = Backbone.Model.extend;

_.extend( StateMachine.prototype, Backbone.Events,/** @lends techlogging.media.controller.StateMachine.prototype */{
	/**
	 * Fetch a state.
	 *
	 * If no `id` is provided, returns the active state.
	 *
	 * Implicitly creates states.
	 *
	 * Ensure that the `states` collection exists so the `StateMachine`
	 *   can be used as a mixin.
	 *
	 * @since 3.5.0
	 *
	 * @param {string} id
	 * @returns {techlogging.media.controller.State} Returns a State model
	 *   from the StateMachine collection
	 */
	state: function( id ) {
		this.states = this.states || new Backbone.Collection();

		// Default to the active state.
		id = id || this._state;

		if ( id && ! this.states.get( id ) ) {
			this.states.add({ id: id });
		}
		return this.states.get( id );
	},

	/**
	 * Sets the active state.
	 *
	 * Bail if we're trying to select the current state, if we haven't
	 * created the `states` collection, or are trying to select a state
	 * that does not exist.
	 *
	 * @since 3.5.0
	 *
	 * @param {string} id
	 *
	 * @fires techlogging.media.controller.State#deactivate
	 * @fires techlogging.media.controller.State#activate
	 *
	 * @returns {techlogging.media.controller.StateMachine} Returns itself to allow chaining
	 */
	setState: function( id ) {
		var previous = this.state();

		if ( ( previous && id === previous.id ) || ! this.states || ! this.states.get( id ) ) {
			return this;
		}

		if ( previous ) {
			previous.trigger('deactivate');
			this._lastState = previous.id;
		}

		this._state = id;
		this.state().trigger('activate');

		return this;
	},

	/**
	 * Returns the previous active state.
	 *
	 * Call the `state()` method with no parameters to retrieve the current
	 * active state.
	 *
	 * @since 3.5.0
	 *
	 * @returns {techlogging.media.controller.State} Returns a State model
	 *    from the StateMachine collection
	 */
	lastState: function() {
		if ( this._lastState ) {
			return this.state( this._lastState );
		}
	}
});

// Map all event binding and triggering on a StateMachine to its `states` collection.
_.each([ 'on', 'off', 'trigger' ], function( method ) {
	/**
	 * @function on
	 * @memberOf techlogging.media.controller.StateMachine
	 * @instance
	 * @returns {techlogging.media.controller.StateMachine} Returns itself to allow chaining.
	 */
	/**
	 * @function off
	 * @memberOf techlogging.media.controller.StateMachine
	 * @instance
	 * @returns {techlogging.media.controller.StateMachine} Returns itself to allow chaining.
	 */
	/**
	 * @function trigger
	 * @memberOf techlogging.media.controller.StateMachine
	 * @instance
	 * @returns {techlogging.media.controller.StateMachine} Returns itself to allow chaining.
	 */
	StateMachine.prototype[ method ] = function() {
		// Ensure that the `states` collection exists so the `StateMachine`
		// can be used as a mixin.
		this.states = this.states || new Backbone.Collection();
		// Forward the method to the `states` collection.
		this.states[ method ].apply( this.states, arguments );
		return this;
	};
});

module.exports = StateMachine;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * techlogging.media.controller.State
 *
 * A state is a step in a workflow that when set will trigger the controllers
 * for the regions to be updated as specified in the frame.
 *
 * A state has an event-driven lifecycle:
 *
 *     'ready'      triggers when a state is added to a state machine's collection.
 *     'activate'   triggers when a state is activated by a state machine.
 *     'deactivate' triggers when a state is deactivated by a state machine.
 *     'reset'      is not triggered automatically. It should be invoked by the
 *                  proper controller to reset the state to its default.
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments Backbone.Model
 */
var State = Backbone.Model.extend(/** @lends techlogging.media.controller.State.prototype */{
	/**
	 * Constructor.
	 *
	 * @since 3.5.0
	 */
	constructor: function() {
		this.on( 'activate', this._preActivate, this );
		this.on( 'activate', this.activate, this );
		this.on( 'activate', this._postActivate, this );
		this.on( 'deactivate', this._deactivate, this );
		this.on( 'deactivate', this.deactivate, this );
		this.on( 'reset', this.reset, this );
		this.on( 'ready', this._ready, this );
		this.on( 'ready', this.ready, this );
		/**
		 * Call parent constructor with passed arguments
		 */
		Backbone.Model.apply( this, arguments );
		this.on( 'change:menu', this._updateMenu, this );
	},
	/**
	 * Ready event callback.
	 *
	 * @abstract
	 * @since 3.5.0
	 */
	ready: function() {},

	/**
	 * Activate event callback.
	 *
	 * @abstract
	 * @since 3.5.0
	 */
	activate: function() {},

	/**
	 * Deactivate event callback.
	 *
	 * @abstract
	 * @since 3.5.0
	 */
	deactivate: function() {},

	/**
	 * Reset event callback.
	 *
	 * @abstract
	 * @since 3.5.0
	 */
	reset: function() {},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_ready: function() {
		this._updateMenu();
	},

	/**
	 * @access private
	 * @since 3.5.0
	*/
	_preActivate: function() {
		this.active = true;
	},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_postActivate: function() {
		this.on( 'change:menu', this._menu, this );
		this.on( 'change:titleMode', this._title, this );
		this.on( 'change:content', this._content, this );
		this.on( 'change:toolbar', this._toolbar, this );

		this.frame.on( 'title:render:default', this._renderTitle, this );

		this._title();
		this._menu();
		this._toolbar();
		this._content();
		this._router();
	},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_deactivate: function() {
		this.active = false;

		this.frame.off( 'title:render:default', this._renderTitle, this );

		this.off( 'change:menu', this._menu, this );
		this.off( 'change:titleMode', this._title, this );
		this.off( 'change:content', this._content, this );
		this.off( 'change:toolbar', this._toolbar, this );
	},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_title: function() {
		this.frame.title.render( this.get('titleMode') || 'default' );
	},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_renderTitle: function( view ) {
		view.$el.text( this.get('title') || '' );
	},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_router: function() {
		var router = this.frame.router,
			mode = this.get('router'),
			view;

		this.frame.$el.toggleClass( 'hide-router', ! mode );
		if ( ! mode ) {
			return;
		}

		this.frame.router.render( mode );

		view = router.get();
		if ( view && view.select ) {
			view.select( this.frame.content.mode() );
		}
	},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_menu: function() {
		var menu = this.frame.menu,
			mode = this.get('menu'),
			view;

		this.frame.$el.toggleClass( 'hide-menu', ! mode );
		if ( ! mode ) {
			return;
		}

		menu.mode( mode );

		view = menu.get();
		if ( view && view.select ) {
			view.select( this.id );
		}
	},

	/**
	 * @access private
	 * @since 3.5.0
	 */
	_updateMenu: function() {
		var previous = this.previous('menu'),
			menu = this.get('menu');

		if ( previous ) {
			this.frame.off( 'menu:render:' + previous, this._renderMenu, this );
		}

		if ( menu ) {
			this.frame.on( 'menu:render:' + menu, this._renderMenu, this );
		}
	},

	/**
	 * Create a view in the media menu for the state.
	 *
	 * @access private
	 * @since 3.5.0
	 *
	 * @param {media.view.Menu} view The menu view.
	 */
	_renderMenu: function( view ) {
		var menuItem = this.get('menuItem'),
			title = this.get('title'),
			priority = this.get('priority');

		if ( ! menuItem && title ) {
			menuItem = { text: title };

			if ( priority ) {
				menuItem.priority = priority;
			}
		}

		if ( ! menuItem ) {
			return;
		}

		view.set( this.id, menuItem );
	}
});

_.each(['toolbar','content'], function( region ) {
	/**
	 * @access private
	 */
	State.prototype[ '_' + region ] = function() {
		var mode = this.get( region );
		if ( mode ) {
			this.frame[ region ].render( mode );
		}
	};
});

module.exports = State;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * techlogging.media.selectionSync
 *
 * Sync an attachments selection in a state with another state.
 *
 * Allows for selecting multiple images in the Add Media workflow, and then
 * switching to the Insert Gallery workflow while preserving the attachments selection.
 *
 * @memberOf techlogging.media
 *
 * @mixin
 */
var selectionSync = {
	/**
	 * @since 3.5.0
	 */
	syncSelection: function() {
		var selection = this.get('selection'),
			manager = this.frame._selection;

		if ( ! this.get('syncSelection') || ! manager || ! selection ) {
			return;
		}

		// If the selection supports multiple items, validate the stored
		// attachments based on the new selection's conditions. Record
		// the attachments that are not included; we'll maintain a
		// reference to those. Other attachments are considered in flux.
		if ( selection.multiple ) {
			selection.reset( [], { silent: true });
			selection.validateAll( manager.attachments );
			manager.difference = _.difference( manager.attachments.models, selection.models );
		}

		// Sync the selection's single item with the master.
		selection.single( manager.single );
	},

	/**
	 * Record the currently active attachments, which is a combination
	 * of the selection's attachments and the set of selected
	 * attachments that this specific selection considered invalid.
	 * Reset the difference and record the single attachment.
	 *
	 * @since 3.5.0
	 */
	recordSelection: function() {
		var selection = this.get('selection'),
			manager = this.frame._selection;

		if ( ! this.get('syncSelection') || ! manager || ! selection ) {
			return;
		}

		if ( selection.multiple ) {
			manager.attachments.reset( selection.toArray().concat( manager.difference ) );
			manager.difference = [];
		} else {
			manager.attachments.add( selection.toArray() );
		}

		manager.single = selection._single;
	}
};

module.exports = selectionSync;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var getUserSetting = window.getUserSetting,
	setUserSetting = window.setUserSetting,
	Library;

/**
 * techlogging.media.controller.Library
 *
 * A state for choosing an attachment or group of attachments from the media library.
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments techlogging.media.controller.State
 * @augments Backbone.Model
 * @mixes media.selectionSync
 *
 * @param {object}                          [attributes]                         The attributes hash passed to the state.
 * @param {string}                          [attributes.id=library]              Unique identifier.
 * @param {string}                          [attributes.title=Media library]     Title for the state. Displays in the media menu and the frame's title region.
 * @param {techlogging.media.model.Attachments}      [attributes.library]                 The attachments collection to browse.
 *                                                                               If one is not supplied, a collection of all attachments will be created.
 * @param {techlogging.media.model.Selection|object} [attributes.selection]               A collection to contain attachment selections within the state.
 *                                                                               If the 'selection' attribute is a plain JS object,
 *                                                                               a Selection will be created using its values as the selection instance's `props` model.
 *                                                                               Otherwise, it will copy the library's `props` model.
 * @param {boolean}                         [attributes.multiple=false]          Whether multi-select is enabled.
 * @param {string}                          [attributes.content=upload]          Initial mode for the content region.
 *                                                                               Overridden by persistent user setting if 'contentUserSetting' is true.
 * @param {string}                          [attributes.menu=default]            Initial mode for the menu region.
 * @param {string}                          [attributes.router=browse]           Initial mode for the router region.
 * @param {string}                          [attributes.toolbar=select]          Initial mode for the toolbar region.
 * @param {boolean}                         [attributes.searchable=true]         Whether the library is searchable.
 * @param {boolean|string}                  [attributes.filterable=false]        Whether the library is filterable, and if so what filters should be shown.
 *                                                                               Accepts 'all', 'uploaded', or 'unattached'.
 * @param {boolean}                         [attributes.sortable=true]           Whether the Attachments should be sortable. Depends on the orderby property being set to menuOrder on the attachments collection.
 * @param {boolean}                         [attributes.autoSelect=true]         Whether an uploaded attachment should be automatically added to the selection.
 * @param {boolean}                         [attributes.describe=false]          Whether to offer UI to describe attachments - e.g. captioning images in a gallery.
 * @param {boolean}                         [attributes.contentUserSetting=true] Whether the content region's mode should be set and persisted per user.
 * @param {boolean}                         [attributes.syncSelection=true]      Whether the Attachments selection should be persisted from the last state.
 */
Library = techlogging.media.controller.State.extend(/** @lends techlogging.media.controller.Library.prototype */{
	defaults: {
		id:                 'library',
		title:              'Media Library',
		multiple:           false,
		content:            'upload',
		menu:               'default',
		router:             'browse',
		toolbar:            'select',
		searchable:         true,
		filterable:         false,
		sortable:           true,
		autoSelect:         true,
		describe:           false,
		contentUserSetting: true,
		syncSelection:      true
	},

	/**
	 * If a library isn't provided, query all media items.
	 * If a selection instance isn't provided, create one.
	 *
	 * @since 3.5.0
	 */
	initialize: function() {
		var selection = this.get('selection'),
			props;

		if ( ! this.get('library') ) {
			this.set( 'library', techlogging.media.query() );
		}

		if ( ! ( selection instanceof techlogging.media.model.Selection ) ) {
			props = selection;

			if ( ! props ) {
				props = this.get('library').props.toJSON();
				props = _.omit( props, 'orderby', 'query' );
			}

			this.set( 'selection', new techlogging.media.model.Selection( null, {
				multiple: this.get('multiple'),
				props: props
			}) );
		}

		this._filterContext();
		this.get('library').on( 'add', this._filterContext, this );

		this.resetDisplays();
	},

	/**
	 * @since 3.5.0
	 */
	activate: function() {
		this.syncSelection();

        techlogging.Uploader.queue.on( 'add', this.uploading, this );

		this.get('selection').on( 'add remove reset', this.refreshContent, this );

		if ( this.get( 'router' ) && this.get('contentUserSetting') ) {
			this.frame.on( 'content:activate', this.saveContentMode, this );
			this.set( 'content', getUserSetting( 'libraryContent', this.get('content') ) );
		}
	},

	/**
	 * @since 3.5.0
	 */
	deactivate: function() {
		this.recordSelection();

		this.frame.off( 'content:activate', this.saveContentMode, this );

		// Unbind all event handlers that use this state as the context
		// from the selection.
		this.get('selection').off( null, null, this );

        techlogging.Uploader.queue.off( null, null, this );
	},

	/**
	 * Reset the library to its initial state.
	 *
	 * @since 3.5.0
	 */
	reset: function() {
		this.get('selection').reset();
		this.resetDisplays();
		this.refreshContent();
	},

	/**
	 * Reset the attachment display settings defaults to the site options.
	 *
	 * If site options don't define them, fall back to a persistent user setting.
	 *
	 * @since 3.5.0
	 */
	resetDisplays: function() {
		var defaultProps = techlogging.media.view.settings.defaultProps;
		this._displays = [];
		this._defaultDisplaySettings = {
			align: getUserSetting( 'align', defaultProps.align ) || 'none',
			size:  getUserSetting( 'imgsize', defaultProps.size ) || 'medium',
			link:  getUserSetting( 'urlbutton', defaultProps.link ) || 'none'
		};
	},

	/**
	 * Create a model to represent display settings (alignment, etc.) for an attachment.
	 *
	 * @since 3.5.0
	 *
	 * @param {techlogging.media.model.Attachment} attachment
	 * @returns {Backbone.Model}
	 */
	display: function( attachment ) {
		var displays = this._displays;

		if ( ! displays[ attachment.cid ] ) {
			displays[ attachment.cid ] = new Backbone.Model( this.defaultDisplaySettings( attachment ) );
		}
		return displays[ attachment.cid ];
	},

	/**
	 * Given an attachment, create attachment display settings properties.
	 *
	 * @since 3.6.0
	 *
	 * @param {techlogging.media.model.Attachment} attachment
	 * @returns {Object}
	 */
	defaultDisplaySettings: function( attachment ) {
		var settings = _.clone( this._defaultDisplaySettings );

		if ( settings.canEmbed = this.canEmbed( attachment ) ) {
			settings.link = 'embed';
		} else if ( ! this.isImageAttachment( attachment ) && settings.link === 'none' ) {
			settings.link = 'file';
		}

		return settings;
	},

	/**
	 * Whether an attachment is image.
	 *
	 * @since 4.4.1
	 *
	 * @param {techlogging.media.model.Attachment} attachment
	 * @returns {Boolean}
	 */
	isImageAttachment: function( attachment ) {
		// If uploading, we know the filename but not the mime type.
		if ( attachment.get('uploading') ) {
			return /\.(jpe?g|png|gif)$/i.test( attachment.get('filename') );
		}

		return attachment.get('type') === 'image';
	},

	/**
	 * Whether an attachment can be embedded (audio or video).
	 *
	 * @since 3.6.0
	 *
	 * @param {techlogging.media.model.Attachment} attachment
	 * @returns {Boolean}
	 */
	canEmbed: function( attachment ) {
		// If uploading, we know the filename but not the mime type.
		if ( ! attachment.get('uploading') ) {
			var type = attachment.get('type');
			if ( type !== 'audio' && type !== 'video' ) {
				return false;
			}
		}

		return _.contains( techlogging.media.view.settings.embedExts, attachment.get('filename').split('.').pop() );
	},


	/**
	 * If the state is active, no items are selected, and the current
	 * content mode is not an option in the state's router (provided
	 * the state has a router), reset the content mode to the default.
	 *
	 * @since 3.5.0
	 */
	refreshContent: function() {
		var selection = this.get('selection'),
			frame = this.frame,
			router = frame.router.get(),
			mode = frame.content.mode();

		if ( this.active && ! selection.length && router && ! router.get( mode ) ) {
			this.frame.content.render( this.get('content') );
		}
	},

	/**
	 * Callback handler when an attachment is uploaded.
	 *
	 * Switch to the Media Library if uploaded from the 'Upload Files' tab.
	 *
	 * Adds any uploading attachments to the selection.
	 *
	 * If the state only supports one attachment to be selected and multiple
	 * attachments are uploaded, the last attachment in the upload queue will
	 * be selected.
	 *
	 * @since 3.5.0
	 *
	 * @param {techlogging.media.model.Attachment} attachment
	 */
	uploading: function( attachment ) {
		var content = this.frame.content;

		if ( 'upload' === content.mode() ) {
			this.frame.content.mode('browse');
		}

		if ( this.get( 'autoSelect' ) ) {
			this.get('selection').add( attachment );
			this.frame.trigger( 'library:selection:add' );
		}
	},

	/**
	 * Persist the mode of the content region as a user setting.
	 *
	 * @since 3.5.0
	 */
	saveContentMode: function() {
		if ( 'browse' !== this.get('router') ) {
			return;
		}

		var mode = this.frame.content.mode(),
			view = this.frame.router.get();

		if ( view && view.get( mode ) ) {
			setUserSetting( 'libraryContent', mode );
		}
	},

	/**
	 * Filter out contextually created attachments (e.g. headers, logos, etc.)
	 *
	 * @since 4.9.0
	 */
	_filterContext: function() {
		var library = this.get('library');

		library.set( library.filter( function( item ) {
			return item.get('context') === '';
		} ) );
	}
});

// Make selectionSync available on any Media Library state.
_.extend( Library.prototype, techlogging.media.selectionSync );

module.exports = Library;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var State = techlogging.media.controller.State,
	Library = techlogging.media.controller.Library,
	ImageDetails;

/**
 * techlogging.media.controller.ImageDetails
 *
 * A state for editing the attachment display settings of an image that's been
 * inserted into the editor.
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments techlogging.media.controller.State
 * @augments Backbone.Model
 *
 * @param {object}                    [attributes]                       The attributes hash passed to the state.
 * @param {string}                    [attributes.id=image-details]      Unique identifier.
 * @param {string}                    [attributes.title=Image Details]   Title for the state. Displays in the frame's title region.
 * @param {techlogging.media.model.Attachment} attributes.image                   The image's model.
 * @param {string|false}              [attributes.content=image-details] Initial mode for the content region.
 * @param {string|false}              [attributes.menu=false]            Initial mode for the menu region.
 * @param {string|false}              [attributes.router=false]          Initial mode for the router region.
 * @param {string|false}              [attributes.toolbar=image-details] Initial mode for the toolbar region.
 * @param {boolean}                   [attributes.editing=false]         Unused.
 * @param {int}                       [attributes.priority=60]           Unused.
 *
 * @todo This state inherits some defaults from media.controller.Library.prototype.defaults,
 *       however this may not do anything.
 */
ImageDetails = State.extend(/** @lends techlogging.media.controller.ImageDetails.prototype */{
	defaults: _.defaults({
		id:       'image-details',
		title:    'Image Details',
		content:  'image-details',
		menu:     false,
		router:   false,
		toolbar:  'image-details',
		editing:  false,
		priority: 60
	}, Library.prototype.defaults ),

	/**
	 * @since 3.9.0
	 *
	 * @param options Attributes
	 */
	initialize: function( options ) {
		this.image = options.image;
		State.prototype.initialize.apply( this, arguments );
	},

	/**
	 * @since 3.9.0
	 */
	activate: function() {
		this.frame.modal.$el.addClass('image-details');
	}
});

module.exports = ImageDetails;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var Library = techlogging.media.controller.Library,
	$ = jQuery,
	CollectionEdit;

/**
 * techlogging.media.controller.CollectionEdit
 *
 * A state for editing a collection, which is used by audio and video playlists,
 * and can be used for other collections.
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments techlogging.media.controller.Library
 * @augments techlogging.media.controller.State
 * @augments Backbone.Model
 *
 * @param {object}                     [attributes]                      The attributes hash passed to the state.
 * @param {string}                     attributes.title                  Title for the state. Displays in the media menu and the frame's title region.
 * @param {techlogging.media.model.Attachments} [attributes.library]              The attachments collection to edit.
 *                                                                       If one is not supplied, an empty media.model.Selection collection is created.
 * @param {boolean}                    [attributes.multiple=false]       Whether multi-select is enabled.
 * @param {string}                     [attributes.content=browse]       Initial mode for the content region.
 * @param {string}                     attributes.menu                   Initial mode for the menu region. @todo this needs a better explanation.
 * @param {boolean}                    [attributes.searchable=false]     Whether the library is searchable.
 * @param {boolean}                    [attributes.sortable=true]        Whether the Attachments should be sortable. Depends on the orderby property being set to menuOrder on the attachments collection.
 * @param {boolean}                    [attributes.date=true]            Whether to show the date filter in the browser's toolbar.
 * @param {boolean}                    [attributes.describe=true]        Whether to offer UI to describe the attachments - e.g. captioning images in a gallery.
 * @param {boolean}                    [attributes.dragInfo=true]        Whether to show instructional text about the attachments being sortable.
 * @param {boolean}                    [attributes.dragInfoText]         Instructional text about the attachments being sortable.
 * @param {int}                        [attributes.idealColumnWidth=170] The ideal column width in pixels for attachments.
 * @param {boolean}                    [attributes.editing=false]        Whether the gallery is being created, or editing an existing instance.
 * @param {int}                        [attributes.priority=60]          The priority for the state link in the media menu.
 * @param {boolean}                    [attributes.syncSelection=false]  Whether the Attachments selection should be persisted from the last state.
 *                                                                       Defaults to false for this state, because the library passed in  *is* the selection.
 * @param {view}                       [attributes.SettingsView]         The view to edit the collection instance settings (e.g. Playlist settings with "Show tracklist" checkbox).
 * @param {view}                       [attributes.AttachmentView]       The single `Attachment` view to be used in the `Attachments`.
 *                                                                       If none supplied, defaults to techlogging.media.view.Attachment.EditLibrary.
 * @param {string}                     attributes.type                   The collection's media type. (e.g. 'video').
 * @param {string}                     attributes.collectionType         The collection type. (e.g. 'playlist').
 */
CollectionEdit = Library.extend(/** @lends techlogging.media.controller.CollectionEdit.prototype */{
	defaults: {
		multiple:         false,
		sortable:         true,
		date:             false,
		searchable:       false,
		content:          'browse',
		describe:         true,
		dragInfo:         true,
		idealColumnWidth: 170,
		editing:          false,
		priority:         60,
		SettingsView:     false,
		syncSelection:    false
	},

	/**
	 * @since 3.9.0
	 */
	initialize: function() {
		var collectionType = this.get('collectionType');

		this.set( 'id', collectionType + '-edit' );
		this.set( 'toolbar', collectionType + '-edit' );

		// If we haven't been provided a `library`, create a `Selection`.
		if ( ! this.get('library') ) {
			this.set( 'library', new techlogging.media.model.Selection() );
		}
		// The single `Attachment` view to be used in the `Attachments` view.
		if ( ! this.get('AttachmentView') ) {
			this.set( 'AttachmentView', techlogging.media.view.Attachment.EditLibrary );
		}
		Library.prototype.initialize.apply( this, arguments );
	},

	/**
	 * @since 3.9.0
	 */
	activate: function() {
		var library = this.get('library');

		// Limit the library to images only.
		library.props.set( 'type', this.get( 'type' ) );

		// Watch for uploaded attachments.
		this.get('library').observe( techlogging.Uploader.queue );

		this.frame.on( 'content:render:browse', this.renderSettings, this );

		Library.prototype.activate.apply( this, arguments );
	},

	/**
	 * @since 3.9.0
	 */
	deactivate: function() {
		// Stop watching for uploaded attachments.
		this.get('library').unobserve( techlogging.Uploader.queue );

		this.frame.off( 'content:render:browse', this.renderSettings, this );

		Library.prototype.deactivate.apply( this, arguments );
	},

	/**
	 * Render the collection embed settings view in the browser sidebar.
	 *
	 * @todo This is against the pattern elsewhere in media. Typically the frame
	 *       is responsible for adding region mode callbacks. Explain.
	 *
	 * @since 3.9.0
	 *
	 * @param {techlogging.media.view.attachmentsBrowser} The attachments browser view.
	 */
	renderSettings: function( attachmentsBrowserView ) {
		var library = this.get('library'),
			collectionType = this.get('collectionType'),
			dragInfoText = this.get('dragInfoText'),
			SettingsView = this.get('SettingsView'),
			obj = {};

		if ( ! library || ! attachmentsBrowserView ) {
			return;
		}

		library[ collectionType ] = library[ collectionType ] || new Backbone.Model();

		obj[ collectionType ] = new SettingsView({
			controller: this,
			model:      library[ collectionType ],
			priority:   40
		});

		attachmentsBrowserView.sidebar.set( obj );

		if ( dragInfoText ) {
			attachmentsBrowserView.toolbar.set( 'dragInfo', new techlogging.media.View({
				el: $( '<div class="instructions">' + dragInfoText + '</div>' )[0],
				priority: -40
			}) );
		}

		// Add the 'Reverse order' button to the toolbar.
		attachmentsBrowserView.toolbar.set( 'reverse', {
			text:     'Reverse order',
			priority: 80,

			click: function() {
				library.reset( library.toArray().reverse() );
			}
		});
	}
});

module.exports = CollectionEdit;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var Selection = techlogging.media.model.Selection,
	Library = techlogging.media.controller.Library,
	CollectionAdd;

/**
 * techlogging.media.controller.CollectionAdd
 *
 * A state for adding attachments to a collection (e.g. video playlist).
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments techlogging.media.controller.Library
 * @augments techlogging.media.controller.State
 * @augments Backbone.Model
 *
 * @param {object}                     [attributes]                         The attributes hash passed to the state.
 * @param {string}                     [attributes.id=library]      Unique identifier.
 * @param {string}                     attributes.title                    Title for the state. Displays in the frame's title region.
 * @param {boolean}                    [attributes.multiple=add]            Whether multi-select is enabled. @todo 'add' doesn't seem do anything special, and gets used as a boolean.
 * @param {techlogging.media.model.Attachments} [attributes.library]                 The attachments collection to browse.
 *                                                                          If one is not supplied, a collection of attachments of the specified type will be created.
 * @param {boolean|string}             [attributes.filterable=uploaded]     Whether the library is filterable, and if so what filters should be shown.
 *                                                                          Accepts 'all', 'uploaded', or 'unattached'.
 * @param {string}                     [attributes.menu=gallery]            Initial mode for the menu region.
 * @param {string}                     [attributes.content=upload]          Initial mode for the content region.
 *                                                                          Overridden by persistent user setting if 'contentUserSetting' is true.
 * @param {string}                     [attributes.router=browse]           Initial mode for the router region.
 * @param {string}                     [attributes.toolbar=gallery-add]     Initial mode for the toolbar region.
 * @param {boolean}                    [attributes.searchable=true]         Whether the library is searchable.
 * @param {boolean}                    [attributes.sortable=true]           Whether the Attachments should be sortable. Depends on the orderby property being set to menuOrder on the attachments collection.
 * @param {boolean}                    [attributes.autoSelect=true]         Whether an uploaded attachment should be automatically added to the selection.
 * @param {boolean}                    [attributes.contentUserSetting=true] Whether the content region's mode should be set and persisted per user.
 * @param {int}                        [attributes.priority=100]            The priority for the state link in the media menu.
 * @param {boolean}                    [attributes.syncSelection=false]     Whether the Attachments selection should be persisted from the last state.
 *                                                                          Defaults to false because for this state, because the library of the Edit Gallery state is the selection.
 * @param {string}                     attributes.type                   The collection's media type. (e.g. 'video').
 * @param {string}                     attributes.collectionType         The collection type. (e.g. 'playlist').
 */
CollectionAdd = Library.extend(/** @lends techlogging.media.controller.CollectionAdd.prototype */{
	defaults: _.defaults( {
		// Selection defaults. @see media.model.Selection
		multiple:      'add',
		// Attachments browser defaults. @see media.view.AttachmentsBrowser
		filterable:    'uploaded',

		priority:      100,
		syncSelection: false
	}, Library.prototype.defaults ),

	/**
	 * @since 3.9.0
	 */
	initialize: function() {
		var collectionType = this.get('collectionType');

		this.set( 'id', collectionType + '-library' );
		this.set( 'toolbar', collectionType + '-add' );
		this.set( 'menu', collectionType );

		// If we haven't been provided a `library`, create a `Selection`.
		if ( ! this.get('library') ) {
			this.set( 'library', techlogging.media.query({ type: this.get('type') }) );
		}
		Library.prototype.initialize.apply( this, arguments );
	},

	/**
	 * @since 3.9.0
	 */
	activate: function() {
		var library = this.get('library'),
			editLibrary = this.get('editLibrary'),
			edit = this.frame.state( this.get('collectionType') + '-edit' ).get('library');

		if ( editLibrary && editLibrary !== edit ) {
			library.unobserve( editLibrary );
		}

		// Accepts attachments that exist in the original library and
		// that do not exist in gallery's library.
		library.validator = function( attachment ) {
			return !! this.mirroring.get( attachment.cid ) && ! edit.get( attachment.cid ) && Selection.prototype.validator.apply( this, arguments );
		};

		// Reset the library to ensure that all attachments are re-added
		// to the collection. Do so silently, as calling `observe` will
		// trigger the `reset` event.
		library.reset( library.mirroring.models, { silent: true });
		library.observe( edit );
		this.set('editLibrary', edit);

		Library.prototype.activate.apply( this, arguments );
	}
});

module.exports = CollectionAdd;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * techlogging.media.controller.MediaLibrary
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments techlogging.media.controller.Library
 * @augments techlogging.media.controller.State
 * @augments Backbone.Model
 */
var Library = techlogging.media.controller.Library,
	MediaLibrary;

MediaLibrary = Library.extend(/** @lends techlogging.media.controller.MediaLibrary.prototype */{
	defaults: _.defaults({
		// Attachments browser defaults. @see media.view.AttachmentsBrowser
		filterable:      'uploaded',

		displaySettings: false,
		priority:        80,
		syncSelection:   false
	}, Library.prototype.defaults ),

	/**
	 * @since 3.9.0
	 *
	 * @param options
	 */
	initialize: function( options ) {
		this.media = options.media;
		this.type = options.type;
		this.set( 'library', techlogging.media.query({ type: this.type }) );

		Library.prototype.initialize.apply( this, arguments );
	},

	/**
	 * @since 3.9.0
	 */
	activate: function() {
		// @todo this should use this.frame.
		if ( techlogging.media.frame.lastMime ) {
			this.set( 'library', techlogging.media.query({ type: techlogging.media.frame.lastMime }) );
			delete techlogging.media.frame.lastMime;
		}
		Library.prototype.activate.apply( this, arguments );
	}
});

module.exports = MediaLibrary;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * techlogging.media.View
 *
 * The base view class for media.
 *
 * Undelegating events, removing events from the model, and
 * removing events from the controller mirror the code for
 * `Backbone.View.dispose` in Backbone 0.9.8 development.
 *
 * This behavior has since been removed, and should not be used
 * outside of the media manager.
 *
 * @memberOf techlogging.media
 *
 * @class
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var View = techlogging.Backbone.View.extend(/** @lends techlogging.media.View.prototype */{
	constructor: function( options ) {
		if ( options && options.controller ) {
			this.controller = options.controller;
		}
		techlogging.Backbone.View.apply( this, arguments );
	},
	/**
	 * @todo The internal comment mentions this might have been a stop-gap
	 *       before Backbone 0.9.8 came out. Figure out if Backbone core takes
	 *       care of this in Backbone.View now.
	 *
	 * @returns {techlogging.media.View} Returns itself to allow chaining
	 */
	dispose: function() {
		// Undelegating events, removing events from the model, and
		// removing events from the controller mirror the code for
		// `Backbone.View.dispose` in Backbone 0.9.8 development.
		this.undelegateEvents();

		if ( this.model && this.model.off ) {
			this.model.off( null, null, this );
		}

		if ( this.collection && this.collection.off ) {
			this.collection.off( null, null, this );
		}

		// Unbind controller events.
		if ( this.controller && this.controller.off ) {
			this.controller.off( null, null, this );
		}

		return this;
	},
	/**
	 * @returns {techlogging.media.View} Returns itself to allow chaining
	 */
	remove: function() {
		this.dispose();
		/**
		 * call 'remove' directly on the parent class
		 */
		return techlogging.Backbone.View.prototype.remove.apply( this, arguments );
	}
});

module.exports = View;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * techlogging.media.view.Frame
 *
 * A frame is a composite view consisting of one or more regions and one or more
 * states.
 *
 * @memberOf techlogging.media.view
 *
 * @see techlogging.media.controller.State
 * @see techlogging.media.controller.Region
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 * @mixes techlogging.media.controller.StateMachine
 */
var Frame = techlogging.media.View.extend(/** @lends techlogging.media.view.Frame.prototype */{
	initialize: function() {
		_.defaults( this.options, {
			mode: [ 'select' ]
		});
		this._createRegions();
		this._createStates();
		this._createModes();
	},

	_createRegions: function() {
		// Clone the regions array.
		this.regions = this.regions ? this.regions.slice() : [];

		// Initialize regions.
		_.each( this.regions, function( region ) {
			this[ region ] = new techlogging.media.controller.Region({
				view:     this,
				id:       region,
				selector: '.media-frame-' + region
			});
		}, this );
	},
	/**
	 * Create the frame's states.
	 *
	 * @see techlogging.media.controller.State
	 * @see techlogging.media.controller.StateMachine
	 *
	 * @fires techlogging.media.controller.State#ready
	 */
	_createStates: function() {
		// Create the default `states` collection.
		this.states = new Backbone.Collection( null, {
			model: techlogging.media.controller.State
		});

		// Ensure states have a reference to the frame.
		this.states.on( 'add', function( model ) {
			model.frame = this;
			model.trigger('ready');
		}, this );

		if ( this.options.states ) {
			this.states.add( this.options.states );
		}
	},

	/**
	 * A frame can be in a mode or multiple modes at one time.
	 *
	 * For example, the manage media frame can be in the `Bulk Select` or `Edit` mode.
	 */
	_createModes: function() {
		// Store active "modes" that the frame is in. Unrelated to region modes.
		this.activeModes = new Backbone.Collection();
		this.activeModes.on( 'add remove reset', _.bind( this.triggerModeEvents, this ) );

		_.each( this.options.mode, function( mode ) {
			this.activateMode( mode );
		}, this );
	},
	/**
	 * Reset all states on the frame to their defaults.
	 *
	 * @returns {techlogging.media.view.Frame} Returns itself to allow chaining
	 */
	reset: function() {
		this.states.invoke( 'trigger', 'reset' );
		return this;
	},
	/**
	 * Map activeMode collection events to the frame.
	 */
	triggerModeEvents: function( model, collection, options ) {
		var collectionEvent,
			modeEventMap = {
				add: 'activate',
				remove: 'deactivate'
			},
			eventToTrigger;
		// Probably a better way to do this.
		_.each( options, function( value, key ) {
			if ( value ) {
				collectionEvent = key;
			}
		} );

		if ( ! _.has( modeEventMap, collectionEvent ) ) {
			return;
		}

		eventToTrigger = model.get('id') + ':' + modeEventMap[collectionEvent];
		this.trigger( eventToTrigger );
	},
	/**
	 * Activate a mode on the frame.
	 *
	 * @param string mode Mode ID.
	 * @returns {this} Returns itself to allow chaining.
	 */
	activateMode: function( mode ) {
		// Bail if the mode is already active.
		if ( this.isModeActive( mode ) ) {
			return;
		}
		this.activeModes.add( [ { id: mode } ] );
		// Add a CSS class to the frame so elements can be styled for the mode.
		this.$el.addClass( 'mode-' + mode );

		return this;
	},
	/**
	 * Deactivate a mode on the frame.
	 *
	 * @param string mode Mode ID.
	 * @returns {this} Returns itself to allow chaining.
	 */
	deactivateMode: function( mode ) {
		// Bail if the mode isn't active.
		if ( ! this.isModeActive( mode ) ) {
			return this;
		}
		this.activeModes.remove( this.activeModes.where( { id: mode } ) );
		this.$el.removeClass( 'mode-' + mode );
		/**
		 * Frame mode deactivation event.
		 *
		 * @event techlogging.media.view.Frame#{mode}:deactivate
		 */
		this.trigger( mode + ':deactivate' );

		return this;
	},
	/**
	 * Check if a mode is enabled on the frame.
	 *
	 * @param  string mode Mode ID.
	 * @return bool
	 */
	isModeActive: function( mode ) {
		return Boolean( this.activeModes.where( { id: mode } ).length );
	}
});

// Make the `Frame` a `StateMachine`.
_.extend( Frame.prototype, techlogging.media.controller.StateMachine.prototype );

module.exports = Frame;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var Frame = techlogging.media.view.Frame,
	$ = jQuery,
	MediaFrame;

/**
 * techlogging.media.view.MediaFrame
 *
 * The frame used to create the media modal.
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.view.Frame
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 * @mixes techlogging.media.controller.StateMachine
 */
MediaFrame = Frame.extend(/** @lends techlogging.media.view.MediaFrame.prototype */{
	className: 'media-frame',
	template:  techlogging.template('media-frame'),
	regions:   ['menu','title','content','toolbar','router'],

	events: {
		'click div.media-frame-title h1': 'toggleMenu'
	},

	/**
	 * @constructs
	 */
	initialize: function() {
		Frame.prototype.initialize.apply( this, arguments );

		_.defaults( this.options, {
			title:    '',
			modal:    true,
			uploader: true
		});

		// Ensure core UI is enabled.
		this.$el.addClass('wp-core-ui');

		// Initialize modal container view.
		if ( this.options.modal ) {
			this.modal = new techlogging.media.view.Modal({
				controller: this,
				title:      this.options.title
			});

			this.modal.content( this );
		}

		// Force the uploader off if the upload limit has been exceeded or
		// if the browser isn't supported.
		if ( techlogging.Uploader.limitExceeded || ! techlogging.Uploader.browser.supported ) {
			this.options.uploader = false;
		}

		// Initialize window-wide uploader.
		if ( this.options.uploader ) {
			this.uploader = new techlogging.media.view.UploaderWindow({
				controller: this,
				uploader: {
					dropzone:  this.modal ? this.modal.$el : this.$el,
					container: this.$el
				}
			});
			this.views.set( '.media-frame-uploader', this.uploader );
		}

		this.on( 'attach', _.bind( this.views.ready, this.views ), this );

		// Bind default title creation.
		this.on( 'title:create:default', this.createTitle, this );
		this.title.mode('default');

		this.on( 'title:render', function( view ) {
			view.$el.append( '<span class="dashicons dashicons-arrow-down"></span>' );
		});

		// Bind default menu.
		this.on( 'menu:create:default', this.createMenu, this );
	},
	/**
	 * @returns {techlogging.media.view.MediaFrame} Returns itself to allow chaining
	 */
	render: function() {
		// Activate the default state if no active state exists.
		if ( ! this.state() && this.options.state ) {
			this.setState( this.options.state );
		}
		/**
		 * call 'render' directly on the parent class
		 */
		return Frame.prototype.render.apply( this, arguments );
	},
	/**
	 * @param {Object} title
	 * @this techlogging.media.controller.Region
	 */
	createTitle: function( title ) {
		title.view = new techlogging.media.View({
			controller: this,
			tagName: 'h1'
		});
	},
	/**
	 * @param {Object} menu
	 * @this techlogging.media.controller.Region
	 */
	createMenu: function( menu ) {
		menu.view = new techlogging.media.view.Menu({
			controller: this
		});
	},

	toggleMenu: function() {
		this.$el.find( '.media-menu' ).toggleClass( 'visible' );
	},

	/**
	 * @param {Object} toolbar
	 * @this techlogging.media.controller.Region
	 */
	createToolbar: function( toolbar ) {
		toolbar.view = new techlogging.media.view.Toolbar({
			controller: this
		});
	},
	/**
	 * @param {Object} router
	 * @this techlogging.media.controller.Region
	 */
	createRouter: function( router ) {
		router.view = new techlogging.media.view.Router({
			controller: this
		});
	},
	/**
	 * @param {Object} options
	 */
	createIframeStates: function( options ) {
		var settings = techlogging.media.view.settings,
			tabs = settings.tabs,
			tabUrl = settings.tabUrl,
			$postId;

		if ( ! tabs || ! tabUrl ) {
			return;
		}

		// Add the post ID to the tab URL if it exists.
		$postId = $('#post_ID');
		if ( $postId.length ) {
			tabUrl += '&post_id=' + $postId.val();
		}

		// Generate the tab states.
		_.each( tabs, function( title, id ) {
			this.state( 'iframe:' + id ).set( _.defaults({
				tab:     id,
				src:     tabUrl + '&tab=' + id,
				title:   title,
				content: 'iframe',
				menu:    'default'
			}, options ) );
		}, this );

		this.on( 'content:create:iframe', this.iframeContent, this );
		this.on( 'content:deactivate:iframe', this.iframeContentCleanup, this );
		this.on( 'menu:render:default', this.iframeMenu, this );
		this.on( 'open', this.hijackThickbox, this );
		this.on( 'close', this.restoreThickbox, this );
	},

	/**
	 * @param {Object} content
	 * @this techlogging.media.controller.Region
	 */
	iframeContent: function( content ) {
		this.$el.addClass('hide-toolbar');
		content.view = new techlogging.media.view.Iframe({
			controller: this
		});
	},

	iframeContentCleanup: function() {
		this.$el.removeClass('hide-toolbar');
	},

	iframeMenu: function( view ) {
		var views = {};

		if ( ! view ) {
			return;
		}

		_.each( techlogging.media.view.settings.tabs, function( title, id ) {
			views[ 'iframe:' + id ] = {
				text: this.state( 'iframe:' + id ).get('title'),
				priority: 200
			};
		}, this );

		view.set( views );
	},

	hijackThickbox: function() {
		var frame = this;

		if ( ! window.tb_remove || this._tb_remove ) {
			return;
		}

		this._tb_remove = window.tb_remove;
		window.tb_remove = function() {
			frame.close();
			frame.reset();
			frame.setState( frame.options.state );
			frame._tb_remove.call( window );
		};
	},

	restoreThickbox: function() {
		if ( ! this._tb_remove ) {
			return;
		}

		window.tb_remove = this._tb_remove;
		delete this._tb_remove;
	}
});

// Map some of the modal's methods to the frame.
_.each(['open','close','attach','detach','escape'], function( method ) {
	/**
	 * @function open
	 * @memberOf techlogging.media.view.MediaFrame
	 * @instance
	 *
	 * @returns {techlogging.media.view.MediaFrame} Returns itself to allow chaining
	 */
	/**
	 * @function close
	 * @memberOf techlogging.media.view.MediaFrame
	 * @instance
	 *
	 * @returns {techlogging.media.view.MediaFrame} Returns itself to allow chaining
	 */
	/**
	 * @function attach
	 * @memberOf techlogging.media.view.MediaFrame
	 * @instance
	 *
	 * @returns {techlogging.media.view.MediaFrame} Returns itself to allow chaining
	 */
	/**
	 * @function detach
	 * @memberOf techlogging.media.view.MediaFrame
	 * @instance
	 *
	 * @returns {techlogging.media.view.MediaFrame} Returns itself to allow chaining
	 */
	/**
	 * @function escape
	 * @memberOf techlogging.media.view.MediaFrame
	 * @instance
	 *
	 * @returns {techlogging.media.view.MediaFrame} Returns itself to allow chaining
	 */
	MediaFrame.prototype[ method ] = function() {
		if ( this.modal ) {
			this.modal[ method ].apply( this.modal, arguments );
		}
		return this;
	};
});

module.exports = MediaFrame;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var MediaFrame = techlogging.media.view.MediaFrame,
	l10n = techlogging.media.view.l10n,
	Select;

/**
 * techlogging.media.view.MediaFrame.Select
 *
 * A frame for selecting an item or items from the media library.
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
Select = MediaFrame.extend(/** @lends techlogging.media.view.MediaFrame.Select.prototype */{
	initialize: function() {
		// Call 'initialize' directly on the parent class.
		MediaFrame.prototype.initialize.apply( this, arguments );

		_.defaults( this.options, {
			selection: [],
			library:   {},
			multiple:  false,
			state:    'library'
		});

		this.createSelection();
		this.createStates();
		this.bindHandlers();
	},

	/**
	 * Attach a selection collection to the frame.
	 *
	 * A selection is a collection of attachments used for a specific purpose
	 * by a media frame. e.g. Selecting an attachment (or many) to insert into
	 * post content.
	 *
	 * @see media.model.Selection
	 */
	createSelection: function() {
		var selection = this.options.selection;

		if ( ! (selection instanceof techlogging.media.model.Selection) ) {
			this.options.selection = new techlogging.media.model.Selection( selection, {
				multiple: this.options.multiple
			});
		}

		this._selection = {
			attachments: new techlogging.media.model.Attachments(),
			difference: []
		};
	},

	/**
	 * Create the default states on the frame.
	 */
	createStates: function() {
		var options = this.options;

		if ( this.options.states ) {
			return;
		}

		// Add the default states.
		this.states.add([
			// Main states.
			new techlogging.media.controller.Library({
				library:   techlogging.media.query( options.library ),
				multiple:  options.multiple,
				title:     options.title,
				priority:  20
			})
		]);
	},

	/**
	 * Bind region mode event callbacks.
	 *
	 * @see media.controller.Region.render
	 */
	bindHandlers: function() {
		this.on( 'router:create:browse', this.createRouter, this );
		this.on( 'router:render:browse', this.browseRouter, this );
		this.on( 'content:create:browse', this.browseContent, this );
		this.on( 'content:render:upload', this.uploadContent, this );
		this.on( 'toolbar:create:select', this.createSelectToolbar, this );
	},

	/**
	 * Render callback for the router region in the `browse` mode.
	 *
	 * @param {techlogging.media.view.Router} routerView
	 */
	browseRouter: function( routerView ) {
		routerView.set({
			upload: {
				text:     l10n.uploadFilesTitle,
				priority: 20
			},
			browse: {
				text:     l10n.mediaLibraryTitle,
				priority: 40
			}
		});
	},

	/**
	 * Render callback for the content region in the `browse` mode.
	 *
	 * @param {techlogging.media.controller.Region} contentRegion
	 */
	browseContent: function( contentRegion ) {
		var state = this.state();

		this.$el.removeClass('hide-toolbar');

		// Browse our library of attachments.
		contentRegion.view = new techlogging.media.view.AttachmentsBrowser({
			controller: this,
			collection: state.get('library'),
			selection:  state.get('selection'),
			model:      state,
			sortable:   state.get('sortable'),
			search:     state.get('searchable'),
			filters:    state.get('filterable'),
			date:       state.get('date'),
			display:    state.has('display') ? state.get('display') : state.get('displaySettings'),
			dragInfo:   state.get('dragInfo'),

			idealColumnWidth: state.get('idealColumnWidth'),
			suggestedWidth:   state.get('suggestedWidth'),
			suggestedHeight:  state.get('suggestedHeight'),

			AttachmentView: state.get('AttachmentView')
		});
	},

	/**
	 * Render callback for the content region in the `upload` mode.
	 */
	uploadContent: function() {
		this.$el.removeClass( 'hide-toolbar' );
		this.content.set( new techlogging.media.view.UploaderInline({
			controller: this
		}) );
	},

	/**
	 * Toolbars
	 *
	 * @param {Object} toolbar
	 * @param {Object} [options={}]
	 * @this techlogging.media.controller.Region
	 */
	createSelectToolbar: function( toolbar, options ) {
		options = options || this.options.button || {};
		options.controller = this;

		toolbar.view = new techlogging.media.view.Toolbar.Select( options );
	}
});

module.exports = Select;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var Select = techlogging.media.view.MediaFrame.Select,
	Library = techlogging.media.controller.Library,
	l10n = techlogging.media.view.l10n,
	Post;

/**
 * techlogging.media.view.MediaFrame.Post
 *
 * The frame for manipulating media on the Edit Post page.
 *
 * @memberOf techlogging.media.view.MediaFrame
 *
 * @class
 * @augments techlogging.media.view.MediaFrame.Select
 * @augments techlogging.media.view.MediaFrame
 * @augments techlogging.media.view.Frame
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 * @mixes techlogging.media.controller.StateMachine
 */
Post = Select.extend(/** @lends techlogging.media.view.MediaFrame.Post.prototype */{
	initialize: function() {
		this.counts = {
			audio: {
				count: techlogging.media.view.settings.attachmentCounts.audio,
				state: 'playlist'
			},
			video: {
				count: techlogging.media.view.settings.attachmentCounts.video,
				state: 'video-playlist'
			}
		};

		_.defaults( this.options, {
			multiple:  true,
			editing:   false,
			state:    'insert',
			metadata:  {}
		});

		// Call 'initialize' directly on the parent class.
		Select.prototype.initialize.apply( this, arguments );
		this.createIframeStates();

	},

	/**
	 * Create the default states.
	 */
	createStates: function() {
		var options = this.options;

		this.states.add([
			// Main states.
			new Library({
				id:         'insert',
				title:      l10n.insertMediaTitle,
				priority:   20,
				toolbar:    'main-insert',
				filterable: 'all',
				library:    techlogging.media.query( options.library ),
				multiple:   options.multiple ? 'reset' : false,
				editable:   true,

				// If the user isn't allowed to edit fields,
				// can they still edit it locally?
				allowLocalEdits: true,

				// Show the attachment display settings.
				displaySettings: true,
				// Update user settings when users adjust the
				// attachment display settings.
				displayUserSettings: true
			}),

			new Library({
				id:         'gallery',
				title:      l10n.createGalleryTitle,
				priority:   40,
				toolbar:    'main-gallery',
				filterable: 'uploaded',
				multiple:   'add',
				editable:   false,

				library:  techlogging.media.query( _.defaults({
					type: 'image'
				}, options.library ) )
			}),

			// Embed states.
			new techlogging.media.controller.Embed( { metadata: options.metadata } ),

			new techlogging.media.controller.EditImage( { model: options.editImage } ),

			// Gallery states.
			new techlogging.media.controller.GalleryEdit({
				library: options.selection,
				editing: options.editing,
				menu:    'gallery'
			}),

			new techlogging.media.controller.GalleryAdd(),

			new Library({
				id:         'playlist',
				title:      l10n.createPlaylistTitle,
				priority:   60,
				toolbar:    'main-playlist',
				filterable: 'uploaded',
				multiple:   'add',
				editable:   false,

				library:  techlogging.media.query( _.defaults({
					type: 'audio'
				}, options.library ) )
			}),

			// Playlist states.
			new techlogging.media.controller.CollectionEdit({
				type: 'audio',
				collectionType: 'playlist',
				title:          l10n.editPlaylistTitle,
				SettingsView:   techlogging.media.view.Settings.Playlist,
				library:        options.selection,
				editing:        options.editing,
				menu:           'playlist',
				dragInfoText:   l10n.playlistDragInfo,
				dragInfo:       false
			}),

			new techlogging.media.controller.CollectionAdd({
				type: 'audio',
				collectionType: 'playlist',
				title: l10n.addToPlaylistTitle
			}),

			new Library({
				id:         'video-playlist',
				title:      l10n.createVideoPlaylistTitle,
				priority:   60,
				toolbar:    'main-video-playlist',
				filterable: 'uploaded',
				multiple:   'add',
				editable:   false,

				library:  techlogging.media.query( _.defaults({
					type: 'video'
				}, options.library ) )
			}),

			new techlogging.media.controller.CollectionEdit({
				type: 'video',
				collectionType: 'playlist',
				title:          l10n.editVideoPlaylistTitle,
				SettingsView:   techlogging.media.view.Settings.Playlist,
				library:        options.selection,
				editing:        options.editing,
				menu:           'video-playlist',
				dragInfoText:   l10n.videoPlaylistDragInfo,
				dragInfo:       false
			}),

			new techlogging.media.controller.CollectionAdd({
				type: 'video',
				collectionType: 'playlist',
				title: l10n.addToVideoPlaylistTitle
			})
		]);

		if ( techlogging.media.view.settings.post.featuredImageId ) {
			this.states.add( new techlogging.media.controller.FeaturedImage() );
		}
	},

	bindHandlers: function() {
		var handlers, checkCounts;

		Select.prototype.bindHandlers.apply( this, arguments );

		this.on( 'activate', this.activate, this );

		// Only bother checking media type counts if one of the counts is zero
		checkCounts = _.find( this.counts, function( type ) {
			return type.count === 0;
		} );

		if ( typeof checkCounts !== 'undefined' ) {
			this.listenTo( techlogging.media.model.Attachments.all, 'change:type', this.mediaTypeCounts );
		}

		this.on( 'menu:create:gallery', this.createMenu, this );
		this.on( 'menu:create:playlist', this.createMenu, this );
		this.on( 'menu:create:video-playlist', this.createMenu, this );
		this.on( 'toolbar:create:main-insert', this.createToolbar, this );
		this.on( 'toolbar:create:main-gallery', this.createToolbar, this );
		this.on( 'toolbar:create:main-playlist', this.createToolbar, this );
		this.on( 'toolbar:create:main-video-playlist', this.createToolbar, this );
		this.on( 'toolbar:create:featured-image', this.featuredImageToolbar, this );
		this.on( 'toolbar:create:main-embed', this.mainEmbedToolbar, this );

		handlers = {
			menu: {
				'default': 'mainMenu',
				'gallery': 'galleryMenu',
				'playlist': 'playlistMenu',
				'video-playlist': 'videoPlaylistMenu'
			},

			content: {
				'embed':          'embedContent',
				'edit-image':     'editImageContent',
				'edit-selection': 'editSelectionContent'
			},

			toolbar: {
				'main-insert':      'mainInsertToolbar',
				'main-gallery':     'mainGalleryToolbar',
				'gallery-edit':     'galleryEditToolbar',
				'gallery-add':      'galleryAddToolbar',
				'main-playlist':	'mainPlaylistToolbar',
				'playlist-edit':	'playlistEditToolbar',
				'playlist-add':		'playlistAddToolbar',
				'main-video-playlist': 'mainVideoPlaylistToolbar',
				'video-playlist-edit': 'videoPlaylistEditToolbar',
				'video-playlist-add': 'videoPlaylistAddToolbar'
			}
		};

		_.each( handlers, function( regionHandlers, region ) {
			_.each( regionHandlers, function( callback, handler ) {
				this.on( region + ':render:' + handler, this[ callback ], this );
			}, this );
		}, this );
	},

	activate: function() {
		// Hide menu items for states tied to particular media types if there are no items
		_.each( this.counts, function( type ) {
			if ( type.count < 1 ) {
				this.menuItemVisibility( type.state, 'hide' );
			}
		}, this );
	},

	mediaTypeCounts: function( model, attr ) {
		if ( typeof this.counts[ attr ] !== 'undefined' && this.counts[ attr ].count < 1 ) {
			this.counts[ attr ].count++;
			this.menuItemVisibility( this.counts[ attr ].state, 'show' );
		}
	},

	// Menus
	/**
	 * @param {techlogging.Backbone.View} view
	 */
	mainMenu: function( view ) {
		view.set({
			'library-separator': new techlogging.media.View({
				className: 'separator',
				priority: 100
			})
		});
	},

	menuItemVisibility: function( state, visibility ) {
		var menu = this.menu.get();
		if ( visibility === 'hide' ) {
			menu.hide( state );
		} else if ( visibility === 'show' ) {
			menu.show( state );
		}
	},
	/**
	 * @param {techlogging.Backbone.View} view
	 */
	galleryMenu: function( view ) {
		var lastState = this.lastState(),
			previous = lastState && lastState.id,
			frame = this;

		view.set({
			cancel: {
				text:     l10n.cancelGalleryTitle,
				priority: 20,
				click:    function() {
					if ( previous ) {
						frame.setState( previous );
					} else {
						frame.close();
					}

					// Keep focus inside media modal
					// after canceling a gallery
					this.controller.modal.focusManager.focus();
				}
			},
			separateCancel: new techlogging.media.View({
				className: 'separator',
				priority: 40
			})
		});
	},

	playlistMenu: function( view ) {
		var lastState = this.lastState(),
			previous = lastState && lastState.id,
			frame = this;

		view.set({
			cancel: {
				text:     l10n.cancelPlaylistTitle,
				priority: 20,
				click:    function() {
					if ( previous ) {
						frame.setState( previous );
					} else {
						frame.close();
					}
				}
			},
			separateCancel: new techlogging.media.View({
				className: 'separator',
				priority: 40
			})
		});
	},

	videoPlaylistMenu: function( view ) {
		var lastState = this.lastState(),
			previous = lastState && lastState.id,
			frame = this;

		view.set({
			cancel: {
				text:     l10n.cancelVideoPlaylistTitle,
				priority: 20,
				click:    function() {
					if ( previous ) {
						frame.setState( previous );
					} else {
						frame.close();
					}
				}
			},
			separateCancel: new techlogging.media.View({
				className: 'separator',
				priority: 40
			})
		});
	},

	// Content
	embedContent: function() {
		var view = new techlogging.media.view.Embed({
			controller: this,
			model:      this.state()
		}).render();

		this.content.set( view );

		if ( ! techlogging.media.isTouchDevice ) {
			view.url.focus();
		}
	},

	editSelectionContent: function() {
		var state = this.state(),
			selection = state.get('selection'),
			view;

		view = new techlogging.media.view.AttachmentsBrowser({
			controller: this,
			collection: selection,
			selection:  selection,
			model:      state,
			sortable:   true,
			search:     false,
			date:       false,
			dragInfo:   true,

			AttachmentView: techlogging.media.view.Attachments.EditSelection
		}).render();

		view.toolbar.set( 'backToLibrary', {
			text:     l10n.returnToLibrary,
			priority: -100,

			click: function() {
				this.controller.content.mode('browse');
			}
		});

		// Browse our library of attachments.
		this.content.set( view );

		// Trigger the controller to set focus
		this.trigger( 'edit:selection', this );
	},

	editImageContent: function() {
		var image = this.state().get('image'),
			view = new techlogging.media.view.EditImage( { model: image, controller: this } ).render();

		this.content.set( view );

		// after creating the wrapper view, load the actual editor via an ajax call
		view.loadEditor();

	},

	// Toolbars

	/**
	 * @param {techlogging.Backbone.View} view
	 */
	selectionStatusToolbar: function( view ) {
		var editable = this.state().get('editable');

		view.set( 'selection', new techlogging.media.view.Selection({
			controller: this,
			collection: this.state().get('selection'),
			priority:   -40,

			// If the selection is editable, pass the callback to
			// switch the content mode.
			editable: editable && function() {
				this.controller.content.mode('edit-selection');
			}
		}).render() );
	},

	/**
	 * @param {techlogging.Backbone.View} view
	 */
	mainInsertToolbar: function( view ) {
		var controller = this;

		this.selectionStatusToolbar( view );

		view.set( 'insert', {
			style:    'primary',
			priority: 80,
			text:     l10n.insertIntoPost,
			requires: { selection: true },

			/**
			 * @ignore
			 *
			 * @fires techlogging.media.controller.State#insert
			 */
			click: function() {
				var state = controller.state(),
					selection = state.get('selection');

				controller.close();
				state.trigger( 'insert', selection ).reset();
			}
		});
	},

	/**
	 * @param {techlogging.Backbone.View} view
	 */
	mainGalleryToolbar: function( view ) {
		var controller = this;

		this.selectionStatusToolbar( view );

		view.set( 'gallery', {
			style:    'primary',
			text:     l10n.createNewGallery,
			priority: 60,
			requires: { selection: true },

			click: function() {
				var selection = controller.state().get('selection'),
					edit = controller.state('gallery-edit'),
					models = selection.where({ type: 'image' });

				edit.set( 'library', new techlogging.media.model.Selection( models, {
					props:    selection.props.toJSON(),
					multiple: true
				}) );

				this.controller.setState('gallery-edit');

				// Keep focus inside media modal
				// after jumping to gallery view
				this.controller.modal.focusManager.focus();
			}
		});
	},

	mainPlaylistToolbar: function( view ) {
		var controller = this;

		this.selectionStatusToolbar( view );

		view.set( 'playlist', {
			style:    'primary',
			text:     l10n.createNewPlaylist,
			priority: 100,
			requires: { selection: true },

			click: function() {
				var selection = controller.state().get('selection'),
					edit = controller.state('playlist-edit'),
					models = selection.where({ type: 'audio' });

				edit.set( 'library', new techlogging.media.model.Selection( models, {
					props:    selection.props.toJSON(),
					multiple: true
				}) );

				this.controller.setState('playlist-edit');

				// Keep focus inside media modal
				// after jumping to playlist view
				this.controller.modal.focusManager.focus();
			}
		});
	},

	mainVideoPlaylistToolbar: function( view ) {
		var controller = this;

		this.selectionStatusToolbar( view );

		view.set( 'video-playlist', {
			style:    'primary',
			text:     l10n.createNewVideoPlaylist,
			priority: 100,
			requires: { selection: true },

			click: function() {
				var selection = controller.state().get('selection'),
					edit = controller.state('video-playlist-edit'),
					models = selection.where({ type: 'video' });

				edit.set( 'library', new techlogging.media.model.Selection( models, {
					props:    selection.props.toJSON(),
					multiple: true
				}) );

				this.controller.setState('video-playlist-edit');

				// Keep focus inside media modal
				// after jumping to video playlist view
				this.controller.modal.focusManager.focus();
			}
		});
	},

	featuredImageToolbar: function( toolbar ) {
		this.createSelectToolbar( toolbar, {
			text:  l10n.setFeaturedImage,
			state: this.options.state
		});
	},

	mainEmbedToolbar: function( toolbar ) {
		toolbar.view = new techlogging.media.view.Toolbar.Embed({
			controller: this
		});
	},

	galleryEditToolbar: function() {
		var editing = this.state().get('editing');
		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				insert: {
					style:    'primary',
					text:     editing ? l10n.updateGallery : l10n.insertGallery,
					priority: 80,
					requires: { library: true },

					/**
					 * @fires techlogging.media.controller.State#update
					 */
					click: function() {
						var controller = this.controller,
							state = controller.state();

						controller.close();
						state.trigger( 'update', state.get('library') );

						// Restore and reset the default state.
						controller.setState( controller.options.state );
						controller.reset();
					}
				}
			}
		}) );
	},

	galleryAddToolbar: function() {
		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				insert: {
					style:    'primary',
					text:     l10n.addToGallery,
					priority: 80,
					requires: { selection: true },

					/**
					 * @fires techlogging.media.controller.State#reset
					 */
					click: function() {
						var controller = this.controller,
							state = controller.state(),
							edit = controller.state('gallery-edit');

						edit.get('library').add( state.get('selection').models );
						state.trigger('reset');
						controller.setState('gallery-edit');
					}
				}
			}
		}) );
	},

	playlistEditToolbar: function() {
		var editing = this.state().get('editing');
		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				insert: {
					style:    'primary',
					text:     editing ? l10n.updatePlaylist : l10n.insertPlaylist,
					priority: 80,
					requires: { library: true },

					/**
					 * @fires techlogging.media.controller.State#update
					 */
					click: function() {
						var controller = this.controller,
							state = controller.state();

						controller.close();
						state.trigger( 'update', state.get('library') );

						// Restore and reset the default state.
						controller.setState( controller.options.state );
						controller.reset();
					}
				}
			}
		}) );
	},

	playlistAddToolbar: function() {
		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				insert: {
					style:    'primary',
					text:     l10n.addToPlaylist,
					priority: 80,
					requires: { selection: true },

					/**
					 * @fires techlogging.media.controller.State#reset
					 */
					click: function() {
						var controller = this.controller,
							state = controller.state(),
							edit = controller.state('playlist-edit');

						edit.get('library').add( state.get('selection').models );
						state.trigger('reset');
						controller.setState('playlist-edit');
					}
				}
			}
		}) );
	},

	videoPlaylistEditToolbar: function() {
		var editing = this.state().get('editing');
		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				insert: {
					style:    'primary',
					text:     editing ? l10n.updateVideoPlaylist : l10n.insertVideoPlaylist,
					priority: 140,
					requires: { library: true },

					click: function() {
						var controller = this.controller,
							state = controller.state(),
							library = state.get('library');

						library.type = 'video';

						controller.close();
						state.trigger( 'update', library );

						// Restore and reset the default state.
						controller.setState( controller.options.state );
						controller.reset();
					}
				}
			}
		}) );
	},

	videoPlaylistAddToolbar: function() {
		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				insert: {
					style:    'primary',
					text:     l10n.addToVideoPlaylist,
					priority: 140,
					requires: { selection: true },

					click: function() {
						var controller = this.controller,
							state = controller.state(),
							edit = controller.state('video-playlist-edit');

						edit.get('library').add( state.get('selection').models );
						state.trigger('reset');
						controller.setState('video-playlist-edit');
					}
				}
			}
		}) );
	}
});

module.exports = Post;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var Select = techlogging.media.view.MediaFrame.Select,
	l10n = techlogging.media.view.l10n,
	ImageDetails;

/**
 * techlogging.media.view.MediaFrame.ImageDetails
 *
 * A media frame for manipulating an image that's already been inserted
 * into a post.
 *
 * @memberOf techlogging.media.view.MediaFrame
 *
 * @class
 * @augments techlogging.media.view.MediaFrame.Select
 * @augments techlogging.media.view.MediaFrame
 * @augments techlogging.media.view.Frame
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 * @mixes techlogging.media.controller.StateMachine
 */
ImageDetails = Select.extend(/** @lends techlogging.media.view.MediaFrame.ImageDetails.prototype */{
	defaults: {
		id:      'image',
		url:     '',
		menu:    'image-details',
		content: 'image-details',
		toolbar: 'image-details',
		type:    'link',
		title:    l10n.imageDetailsTitle,
		priority: 120
	},

	initialize: function( options ) {
		this.image = new techlogging.media.model.PostImage( options.metadata );
		this.options.selection = new techlogging.media.model.Selection( this.image.attachment, { multiple: false } );
		Select.prototype.initialize.apply( this, arguments );
	},

	bindHandlers: function() {
		Select.prototype.bindHandlers.apply( this, arguments );
		this.on( 'menu:create:image-details', this.createMenu, this );
		this.on( 'content:create:image-details', this.imageDetailsContent, this );
		this.on( 'content:render:edit-image', this.editImageContent, this );
		this.on( 'toolbar:render:image-details', this.renderImageDetailsToolbar, this );
		// override the select toolbar
		this.on( 'toolbar:render:replace', this.renderReplaceImageToolbar, this );
	},

	createStates: function() {
		this.states.add([
			new techlogging.media.controller.ImageDetails({
				image: this.image,
				editable: false
			}),
			new techlogging.media.controller.ReplaceImage({
				id: 'replace-image',
				library: techlogging.media.query( { type: 'image' } ),
				image: this.image,
				multiple:  false,
				title:     l10n.imageReplaceTitle,
				toolbar: 'replace',
				priority:  80,
				displaySettings: true
			}),
			new techlogging.media.controller.EditImage( {
				image: this.image,
				selection: this.options.selection
			} )
		]);
	},

	imageDetailsContent: function( options ) {
		options.view = new techlogging.media.view.ImageDetails({
			controller: this,
			model: this.state().image,
			attachment: this.state().image.attachment
		});
	},

	editImageContent: function() {
		var state = this.state(),
			model = state.get('image'),
			view;

		if ( ! model ) {
			return;
		}

		view = new techlogging.media.view.EditImage( { model: model, controller: this } ).render();

		this.content.set( view );

		// after bringing in the frame, load the actual editor via an ajax call
		view.loadEditor();

	},

	renderImageDetailsToolbar: function() {
		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				select: {
					style:    'primary',
					text:     l10n.update,
					priority: 80,

					click: function() {
						var controller = this.controller,
							state = controller.state();

						controller.close();

						// not sure if we want to use techlogging.media.string.image which will create a shortcode or
						// perhaps techlogging.html.string to at least to build the <img />
						state.trigger( 'update', controller.image.toJSON() );

						// Restore and reset the default state.
						controller.setState( controller.options.state );
						controller.reset();
					}
				}
			}
		}) );
	},

	renderReplaceImageToolbar: function() {
		var frame = this,
			lastState = frame.lastState(),
			previous = lastState && lastState.id;

		this.toolbar.set( new techlogging.media.view.Toolbar({
			controller: this,
			items: {
				back: {
					text:     l10n.back,
					priority: 20,
					click:    function() {
						if ( previous ) {
							frame.setState( previous );
						} else {
							frame.close();
						}
					}
				},

				replace: {
					style:    'primary',
					text:     l10n.replace,
					priority: 80,
					requires: { selection: true },

					click: function() {
						var controller = this.controller,
							state = controller.state(),
							selection = state.get( 'selection' ),
							attachment = selection.single();

						controller.close();

						controller.image.changeAttachment( attachment, state.display( attachment ) );

						// not sure if we want to use techlogging.media.string.image which will create a shortcode or
						// perhaps techlogging.html.string to at least to build the <img />
						state.trigger( 'replace', controller.image.toJSON() );

						// Restore and reset the default state.
						controller.setState( controller.options.state );
						controller.reset();
					}
				}
			}
		}) );
	}

});

module.exports = ImageDetails;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var $ = jQuery,
	Modal;

/**
 * techlogging.media.view.Modal
 *
 * A modal view, which the media modal uses as its default container.
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Modal = techlogging.media.View.extend(/** @lends techlogging.media.view.Modal.prototype */{
	tagName:  'div',
	template: techlogging.template('media-modal'),

	attributes: {
		tabindex: 0
	},

	events: {
		'click .media-modal-backdrop, .media-modal-close': 'escapeHandler',
		'keydown': 'keydown'
	},

	clickedOpenerEl: null,

	initialize: function() {
		_.defaults( this.options, {
			container: document.body,
			title:     '',
			propagate: true,
			freeze:    true
		});

		this.focusManager = new techlogging.media.view.FocusManager({
			el: this.el
		});
	},
	/**
	 * @returns {Object}
	 */
	prepare: function() {
		return {
			title: this.options.title
		};
	},

	/**
	 * @returns {techlogging.media.view.Modal} Returns itself to allow chaining
	 */
	attach: function() {
		if ( this.views.attached ) {
			return this;
		}

		if ( ! this.views.rendered ) {
			this.render();
		}

		this.$el.appendTo( this.options.container );

		// Manually mark the view as attached and trigger ready.
		this.views.attached = true;
		this.views.ready();

		return this.propagate('attach');
	},

	/**
	 * @returns {techlogging.media.view.Modal} Returns itself to allow chaining
	 */
	detach: function() {
		if ( this.$el.is(':visible') ) {
			this.close();
		}

		this.$el.detach();
		this.views.attached = false;
		return this.propagate('detach');
	},

	/**
	 * @returns {techlogging.media.view.Modal} Returns itself to allow chaining
	 */
	open: function() {
		var $el = this.$el,
			options = this.options,
			mceEditor;

		if ( $el.is(':visible') ) {
			return this;
		}

		this.clickedOpenerEl = document.activeElement;

		if ( ! this.views.attached ) {
			this.attach();
		}

		// If the `freeze` option is set, record the window's scroll position.
		if ( options.freeze ) {
			this._freeze = {
				scrollTop: $( window ).scrollTop()
			};
		}

		// Disable page scrolling.
		$( 'body' ).addClass( 'modal-open' );

		$el.show();

		// Try to close the onscreen keyboard
		if ( 'ontouchend' in document ) {
			if ( ( mceEditor = window.tinymce && window.tinymce.activeEditor )  && ! mceEditor.isHidden() && mceEditor.iframeElement ) {
				mceEditor.iframeElement.focus();
				mceEditor.iframeElement.blur();

				setTimeout( function() {
					mceEditor.iframeElement.blur();
				}, 100 );
			}
		}

		this.$el.focus();

		return this.propagate('open');
	},

	/**
	 * @param {Object} options
	 * @returns {techlogging.media.view.Modal} Returns itself to allow chaining
	 */
	close: function( options ) {
		var freeze = this._freeze;

		if ( ! this.views.attached || ! this.$el.is(':visible') ) {
			return this;
		}

		// Enable page scrolling.
		$( 'body' ).removeClass( 'modal-open' );

		// Hide modal and remove restricted media modal tab focus once it's closed
		this.$el.hide().undelegate( 'keydown' );

		// Put focus back in useful location once modal is closed.
		if ( null !== this.clickedOpenerEl ) {
			this.clickedOpenerEl.focus();
		} else {
			$( '#wpbody-content' ).focus();
		}

		this.propagate('close');

		// If the `freeze` option is set, restore the container's scroll position.
		if ( freeze ) {
			$( window ).scrollTop( freeze.scrollTop );
		}

		if ( options && options.escape ) {
			this.propagate('escape');
		}

		return this;
	},
	/**
	 * @returns {techlogging.media.view.Modal} Returns itself to allow chaining
	 */
	escape: function() {
		return this.close({ escape: true });
	},
	/**
	 * @param {Object} event
	 */
	escapeHandler: function( event ) {
		event.preventDefault();
		this.escape();
	},

	/**
	 * @param {Array|Object} content Views to register to '.media-modal-content'
	 * @returns {techlogging.media.view.Modal} Returns itself to allow chaining
	 */
	content: function( content ) {
		this.views.set( '.media-modal-content', content );
		return this;
	},

	/**
	 * Triggers a modal event and if the `propagate` option is set,
	 * forwards events to the modal's controller.
	 *
	 * @param {string} id
	 * @returns {techlogging.media.view.Modal} Returns itself to allow chaining
	 */
	propagate: function( id ) {
		this.trigger( id );

		if ( this.options.propagate ) {
			this.controller.trigger( id );
		}

		return this;
	},
	/**
	 * @param {Object} event
	 */
	keydown: function( event ) {
		// Close the modal when escape is pressed.
		if ( 27 === event.which && this.$el.is(':visible') ) {
			this.escape();
			event.stopImmediatePropagation();
		}
	}
});

module.exports = Modal;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * techlogging.media.view.FocusManager
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var FocusManager = techlogging.media.View.extend(/** @lends techlogging.media.view.FocusManager.prototype */{

	events: {
		'keydown': 'constrainTabbing'
	},

	focus: function() { // Reset focus on first left menu item
		this.$('.media-menu-item').first().focus();
	},
	/**
	 * @param {Object} event
	 */
	constrainTabbing: function( event ) {
		var tabbables;

		// Look for the tab key.
		if ( 9 !== event.keyCode ) {
			return;
		}

		// Skip the file input added by Plupload.
		tabbables = this.$( ':tabbable' ).not( '.moxie-shim input[type="file"]' );

		// Keep tab focus within media modal while it's open
		if ( tabbables.last()[0] === event.target && ! event.shiftKey ) {
			tabbables.first().focus();
			return false;
		} else if ( tabbables.first()[0] === event.target && event.shiftKey ) {
			tabbables.last().focus();
			return false;
		}
	}

});

module.exports = FocusManager;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var $ = jQuery,
	UploaderWindow;

/**
 * techlogging.media.view.UploaderWindow
 *
 * An uploader window that allows for dragging and dropping media.
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 *
 * @param {object} [options]                   Options hash passed to the view.
 * @param {object} [options.uploader]          Uploader properties.
 * @param {jQuery} [options.uploader.browser]
 * @param {jQuery} [options.uploader.dropzone] jQuery collection of the dropzone.
 * @param {object} [options.uploader.params]
 */
UploaderWindow = techlogging.media.View.extend(/** @lends techlogging.media.view.UploaderWindow.prototype */{
	tagName:   'div',
	className: 'uploader-window',
	template:  techlogging.template('uploader-window'),

	initialize: function() {
		var uploader;

		this.$browser = $( '<button type="button" class="browser" />' ).hide().appendTo( 'body' );

		uploader = this.options.uploader = _.defaults( this.options.uploader || {}, {
			dropzone:  this.$el,
			browser:   this.$browser,
			params:    {}
		});

		// Ensure the dropzone is a jQuery collection.
		if ( uploader.dropzone && ! (uploader.dropzone instanceof $) ) {
			uploader.dropzone = $( uploader.dropzone );
		}

		this.controller.on( 'activate', this.refresh, this );

		this.controller.on( 'detach', function() {
			this.$browser.remove();
		}, this );
	},

	refresh: function() {
		if ( this.uploader ) {
			this.uploader.refresh();
		}
	},

	ready: function() {
		var postId = techlogging.media.view.settings.post.id,
			dropzone;

		// If the uploader already exists, bail.
		if ( this.uploader ) {
			return;
		}

		if ( postId ) {
			this.options.uploader.params.post_id = postId;
		}
		this.uploader = new techlogging.Uploader( this.options.uploader );

		dropzone = this.uploader.dropzone;
		dropzone.on( 'dropzone:enter', _.bind( this.show, this ) );
		dropzone.on( 'dropzone:leave', _.bind( this.hide, this ) );

		$( this.uploader ).on( 'uploader:ready', _.bind( this._ready, this ) );
	},

	_ready: function() {
		this.controller.trigger( 'uploader:ready' );
	},

	show: function() {
		var $el = this.$el.show();

		// Ensure that the animation is triggered by waiting until
		// the transparent element is painted into the DOM.
		_.defer( function() {
			$el.css({ opacity: 1 });
		});
	},

	hide: function() {
		var $el = this.$el.css({ opacity: 0 });

		techlogging.media.transition( $el ).done( function() {
			// Transition end events are subject to race conditions.
			// Make sure that the value is set as intended.
			if ( '0' === $el.css('opacity') ) {
				$el.hide();
			}
		});

		// https://core.trac.wordpress.org/ticket/27341
		_.delay( function() {
			if ( '0' === $el.css('opacity') && $el.is(':visible') ) {
				$el.hide();
			}
		}, 500 );
	}
});

module.exports = UploaderWindow;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var View = techlogging.media.View,
	l10n = techlogging.media.view.l10n,
	$ = jQuery,
	EditorUploader;

/**
 * Creates a dropzone on WP editor instances (elements with .wp-editor-wrap)
 * and relays drag'n'dropped files to a media workflow.
 *
 * techlogging.media.view.EditorUploader
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
EditorUploader = View.extend(/** @lends techlogging.media.view.EditorUploader.prototype */{
	tagName:   'div',
	className: 'uploader-editor',
	template:  techlogging.template( 'uploader-editor' ),

	localDrag: false,
	overContainer: false,
	overDropzone: false,
	draggingFile: null,

	/**
	 * Bind drag'n'drop events to callbacks.
	 */
	initialize: function() {
		this.initialized = false;

		// Bail if not enabled or UA does not support drag'n'drop or File API.
		if ( ! window.tinyMCEPreInit || ! window.tinyMCEPreInit.dragDropUpload || ! this.browserSupport() ) {
			return this;
		}

		this.$document = $(document);
		this.dropzones = [];
		this.files = [];

		this.$document.on( 'drop', '.uploader-editor', _.bind( this.drop, this ) );
		this.$document.on( 'dragover', '.uploader-editor', _.bind( this.dropzoneDragover, this ) );
		this.$document.on( 'dragleave', '.uploader-editor', _.bind( this.dropzoneDragleave, this ) );
		this.$document.on( 'click', '.uploader-editor', _.bind( this.click, this ) );

		this.$document.on( 'dragover', _.bind( this.containerDragover, this ) );
		this.$document.on( 'dragleave', _.bind( this.containerDragleave, this ) );

		this.$document.on( 'dragstart dragend drop', _.bind( function( event ) {
			this.localDrag = event.type === 'dragstart';

			if ( event.type === 'drop' ) {
				this.containerDragleave();
			}
		}, this ) );

		this.initialized = true;
		return this;
	},

	/**
	 * Check browser support for drag'n'drop.
	 *
	 * @return Boolean
	 */
	browserSupport: function() {
		var supports = false, div = document.createElement('div');

		supports = ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div );
		supports = supports && !! ( window.File && window.FileList && window.FileReader );
		return supports;
	},

	isDraggingFile: function( event ) {
		if ( this.draggingFile !== null ) {
			return this.draggingFile;
		}

		if ( _.isUndefined( event.originalEvent ) || _.isUndefined( event.originalEvent.dataTransfer ) ) {
			return false;
		}

		this.draggingFile = _.indexOf( event.originalEvent.dataTransfer.types, 'Files' ) > -1 &&
			_.indexOf( event.originalEvent.dataTransfer.types, 'text/plain' ) === -1;

		return this.draggingFile;
	},

	refresh: function( e ) {
		var dropzone_id;
		for ( dropzone_id in this.dropzones ) {
			// Hide the dropzones only if dragging has left the screen.
			this.dropzones[ dropzone_id ].toggle( this.overContainer || this.overDropzone );
		}

		if ( ! _.isUndefined( e ) ) {
			$( e.target ).closest( '.uploader-editor' ).toggleClass( 'droppable', this.overDropzone );
		}

		if ( ! this.overContainer && ! this.overDropzone ) {
			this.draggingFile = null;
		}

		return this;
	},

	render: function() {
		if ( ! this.initialized ) {
			return this;
		}

		View.prototype.render.apply( this, arguments );
		$( '.wp-editor-wrap' ).each( _.bind( this.attach, this ) );
		return this;
	},

	attach: function( index, editor ) {
		// Attach a dropzone to an editor.
		var dropzone = this.$el.clone();
		this.dropzones.push( dropzone );
		$( editor ).append( dropzone );
		return this;
	},

	/**
	 * When a file is dropped on the editor uploader, open up an editor media workflow
	 * and upload the file immediately.
	 *
	 * @param  {jQuery.Event} event The 'drop' event.
	 */
	drop: function( event ) {
		var $wrap, uploadView;

		this.containerDragleave( event );
		this.dropzoneDragleave( event );

		this.files = event.originalEvent.dataTransfer.files;
		if ( this.files.length < 1 ) {
			return;
		}

		// Set the active editor to the drop target.
		$wrap = $( event.target ).parents( '.wp-editor-wrap' );
		if ( $wrap.length > 0 && $wrap[0].id ) {
			window.wpActiveEditor = $wrap[0].id.slice( 3, -5 );
		}

		if ( ! this.workflow ) {
			this.workflow = techlogging.media.editor.open( window.wpActiveEditor, {
				frame:    'post',
				state:    'insert',
				title:    l10n.addMedia,
				multiple: true
			});

			uploadView = this.workflow.uploader;

			if ( uploadView.uploader && uploadView.uploader.ready ) {
				this.addFiles.apply( this );
			} else {
				this.workflow.on( 'uploader:ready', this.addFiles, this );
			}
		} else {
			this.workflow.state().reset();
			this.addFiles.apply( this );
			this.workflow.open();
		}

		return false;
	},

	/**
	 * Add the files to the uploader.
	 */
	addFiles: function() {
		if ( this.files.length ) {
			this.workflow.uploader.uploader.uploader.addFile( _.toArray( this.files ) );
			this.files = [];
		}
		return this;
	},

	containerDragover: function( event ) {
		if ( this.localDrag || ! this.isDraggingFile( event ) ) {
			return;
		}

		this.overContainer = true;
		this.refresh();
	},

	containerDragleave: function() {
		this.overContainer = false;

		// Throttle dragleave because it's called when bouncing from some elements to others.
		_.delay( _.bind( this.refresh, this ), 50 );
	},

	dropzoneDragover: function( event ) {
		if ( this.localDrag || ! this.isDraggingFile( event ) ) {
			return;
		}

		this.overDropzone = true;
		this.refresh( event );
		return false;
	},

	dropzoneDragleave: function( e ) {
		this.overDropzone = false;
		_.delay( _.bind( this.refresh, this, e ), 50 );
	},

	click: function( e ) {
		// In the rare case where the dropzone gets stuck, hide it on click.
		this.containerDragleave( e );
		this.dropzoneDragleave( e );
		this.localDrag = false;
	}
});

module.exports = EditorUploader;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var View = techlogging.media.View,
	UploaderInline;

/**
 * techlogging.media.view.UploaderInline
 *
 * The inline uploader that shows up in the 'Upload Files' tab.
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
UploaderInline = View.extend(/** @lends techlogging.media.view.UploaderInline.prototype */{
	tagName:   'div',
	className: 'uploader-inline',
	template:  techlogging.template('uploader-inline'),

	events: {
		'click .close': 'hide'
	},

	initialize: function() {
		_.defaults( this.options, {
			message: '',
			status:  true,
			canClose: false
		});

		if ( ! this.options.$browser && this.controller.uploader ) {
			this.options.$browser = this.controller.uploader.$browser;
		}

		if ( _.isUndefined( this.options.postId ) ) {
			this.options.postId = techlogging.media.view.settings.post.id;
		}

		if ( this.options.status ) {
			this.views.set( '.upload-inline-status', new techlogging.media.view.UploaderStatus({
				controller: this.controller
			}) );
		}
	},

	prepare: function() {
		var suggestedWidth = this.controller.state().get('suggestedWidth'),
			suggestedHeight = this.controller.state().get('suggestedHeight'),
			data = {};

		data.message = this.options.message;
		data.canClose = this.options.canClose;

		if ( suggestedWidth && suggestedHeight ) {
			data.suggestedWidth = suggestedWidth;
			data.suggestedHeight = suggestedHeight;
		}

		return data;
	},
	/**
	 * @returns {techlogging.media.view.UploaderInline} Returns itself to allow chaining
	 */
	dispose: function() {
		if ( this.disposing ) {
			/**
			 * call 'dispose' directly on the parent class
			 */
			return View.prototype.dispose.apply( this, arguments );
		}

		// Run remove on `dispose`, so we can be sure to refresh the
		// uploader with a view-less DOM. Track whether we're disposing
		// so we don't trigger an infinite loop.
		this.disposing = true;
		return this.remove();
	},
	/**
	 * @returns {techlogging.media.view.UploaderInline} Returns itself to allow chaining
	 */
	remove: function() {
		/**
		 * call 'remove' directly on the parent class
		 */
		var result = View.prototype.remove.apply( this, arguments );

		_.defer( _.bind( this.refresh, this ) );
		return result;
	},

	refresh: function() {
		var uploader = this.controller.uploader;

		if ( uploader ) {
			uploader.refresh();
		}
	},
	/**
	 * @returns {techlogging.media.view.UploaderInline}
	 */
	ready: function() {
		var $browser = this.options.$browser,
			$placeholder;

		if ( this.controller.uploader ) {
			$placeholder = this.$('.browser');

			// Check if we've already replaced the placeholder.
			if ( $placeholder[0] === $browser[0] ) {
				return;
			}

			$browser.detach().text( $placeholder.text() );
			$browser[0].className = $placeholder[0].className;
			$placeholder.replaceWith( $browser.show() );
		}

		this.refresh();
		return this;
	},
	show: function() {
		this.$el.removeClass( 'hidden' );
		if ( this.controller.$uploaderToggler && this.controller.$uploaderToggler.length ) {
			this.controller.$uploaderToggler.attr( 'aria-expanded', 'true' );
		}
	},
	hide: function() {
		this.$el.addClass( 'hidden' );
		if ( this.controller.$uploaderToggler && this.controller.$uploaderToggler.length ) {
			this.controller.$uploaderToggler
				.attr( 'aria-expanded', 'false' )
				// Move focus back to the toggle button when closing the uploader.
				.focus();
		}
	}

});

module.exports = UploaderInline;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var View = techlogging.media.View,
	UploaderStatus;

/**
 * techlogging.media.view.UploaderStatus
 *
 * An uploader status for on-going uploads.
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
UploaderStatus = View.extend(/** @lends techlogging.media.view.UploaderStatus.prototype */{
	className: 'media-uploader-status',
	template:  techlogging.template('uploader-status'),

	events: {
		'click .upload-dismiss-errors': 'dismiss'
	},

	initialize: function() {
		this.queue = techlogging.Uploader.queue;
		this.queue.on( 'add remove reset', this.visibility, this );
		this.queue.on( 'add remove reset change:percent', this.progress, this );
		this.queue.on( 'add remove reset change:uploading', this.info, this );

		this.errors = techlogging.Uploader.errors;
		this.errors.reset();
		this.errors.on( 'add remove reset', this.visibility, this );
		this.errors.on( 'add', this.error, this );
	},
	/**
	 * @returns {techlogging.media.view.UploaderStatus}
	 */
	dispose: function() {
		techlogging.Uploader.queue.off( null, null, this );
		/**
		 * call 'dispose' directly on the parent class
		 */
		View.prototype.dispose.apply( this, arguments );
		return this;
	},

	visibility: function() {
		this.$el.toggleClass( 'uploading', !! this.queue.length );
		this.$el.toggleClass( 'errors', !! this.errors.length );
		this.$el.toggle( !! this.queue.length || !! this.errors.length );
	},

	ready: function() {
		_.each({
			'$bar':      '.media-progress-bar div',
			'$index':    '.upload-index',
			'$total':    '.upload-total',
			'$filename': '.upload-filename'
		}, function( selector, key ) {
			this[ key ] = this.$( selector );
		}, this );

		this.visibility();
		this.progress();
		this.info();
	},

	progress: function() {
		var queue = this.queue,
			$bar = this.$bar;

		if ( ! $bar || ! queue.length ) {
			return;
		}

		$bar.width( ( queue.reduce( function( memo, attachment ) {
			if ( ! attachment.get('uploading') ) {
				return memo + 100;
			}

			var percent = attachment.get('percent');
			return memo + ( _.isNumber( percent ) ? percent : 100 );
		}, 0 ) / queue.length ) + '%' );
	},

	info: function() {
		var queue = this.queue,
			index = 0, active;

		if ( ! queue.length ) {
			return;
		}

		active = this.queue.find( function( attachment, i ) {
			index = i;
			return attachment.get('uploading');
		});

		this.$index.text( index + 1 );
		this.$total.text( queue.length );
		this.$filename.html( active ? this.filename( active.get('filename') ) : '' );
	},
	/**
	 * @param {string} filename
	 * @returns {string}
	 */
	filename: function( filename ) {
		return _.escape( filename );
	},
	/**
	 * @param {Backbone.Model} error
	 */
	error: function( error ) {
		this.views.add( '.upload-errors', new techlogging.media.view.UploaderStatusError({
			filename: this.filename( error.get('file').name ),
			message:  error.get('message')
		}), { at: 0 });
	},

	/**
	 * @param {Object} event
	 */
	dismiss: function( event ) {
		var errors = this.views.get('.upload-errors');

		event.preventDefault();

		if ( errors ) {
			_.invoke( errors, 'remove' );
		}
		techlogging.Uploader.errors.reset();
	}
});

module.exports = UploaderStatus;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * techlogging.media.view.UploaderStatusError
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var UploaderStatusError = techlogging.media.View.extend(/** @lends techlogging.media.view.UploaderStatusError.prototype */{
	className: 'upload-error',
	template:  techlogging.template('uploader-status-error')
});

module.exports = UploaderStatusError;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var View = techlogging.media.View,
	Toolbar;

/**
 * techlogging.media.view.Toolbar
 *
 * A toolbar which consists of a primary and a secondary section. Each sections
 * can be filled with views.
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Toolbar = View.extend(/** @lends techlogging.media.view.Toolbar.prototype */{
	tagName:   'div',
	className: 'media-toolbar',

	initialize: function() {
		var state = this.controller.state(),
			selection = this.selection = state.get('selection'),
			library = this.library = state.get('library');

		this._views = {};

		// The toolbar is composed of two `PriorityList` views.
		this.primary   = new techlogging.media.view.PriorityList();
		this.secondary = new techlogging.media.view.PriorityList();
		this.primary.$el.addClass('media-toolbar-primary search-form');
		this.secondary.$el.addClass('media-toolbar-secondary');

		this.views.set([ this.secondary, this.primary ]);

		if ( this.options.items ) {
			this.set( this.options.items, { silent: true });
		}

		if ( ! this.options.silent ) {
			this.render();
		}

		if ( selection ) {
			selection.on( 'add remove reset', this.refresh, this );
		}

		if ( library ) {
			library.on( 'add remove reset', this.refresh, this );
		}
	},
	/**
	 * @returns {techlogging.media.view.Toolbar} Returns itsef to allow chaining
	 */
	dispose: function() {
		if ( this.selection ) {
			this.selection.off( null, null, this );
		}

		if ( this.library ) {
			this.library.off( null, null, this );
		}
		/**
		 * call 'dispose' directly on the parent class
		 */
		return View.prototype.dispose.apply( this, arguments );
	},

	ready: function() {
		this.refresh();
	},

	/**
	 * @param {string} id
	 * @param {Backbone.View|Object} view
	 * @param {Object} [options={}]
	 * @returns {techlogging.media.view.Toolbar} Returns itself to allow chaining
	 */
	set: function( id, view, options ) {
		var list;
		options = options || {};

		// Accept an object with an `id` : `view` mapping.
		if ( _.isObject( id ) ) {
			_.each( id, function( view, id ) {
				this.set( id, view, { silent: true });
			}, this );

		} else {
			if ( ! ( view instanceof Backbone.View ) ) {
				view.classes = [ 'media-button-' + id ].concat( view.classes || [] );
				view = new techlogging.media.view.Button( view ).render();
			}

			view.controller = view.controller || this.controller;

			this._views[ id ] = view;

			list = view.options.priority < 0 ? 'secondary' : 'primary';
			this[ list ].set( id, view, options );
		}

		if ( ! options.silent ) {
			this.refresh();
		}

		return this;
	},
	/**
	 * @param {string} id
	 * @returns {techlogging.media.view.Button}
	 */
	get: function( id ) {
		return this._views[ id ];
	},
	/**
	 * @param {string} id
	 * @param {Object} options
	 * @returns {techlogging.media.view.Toolbar} Returns itself to allow chaining
	 */
	unset: function( id, options ) {
		delete this._views[ id ];
		this.primary.unset( id, options );
		this.secondary.unset( id, options );

		if ( ! options || ! options.silent ) {
			this.refresh();
		}
		return this;
	},

	refresh: function() {
		var state = this.controller.state(),
			library = state.get('library'),
			selection = state.get('selection');

		_.each( this._views, function( button ) {
			if ( ! button.model || ! button.options || ! button.options.requires ) {
				return;
			}

			var requires = button.options.requires,
				disabled = false;

			// Prevent insertion of attachments if any of them are still uploading
			if ( selection && selection.models ) {
				disabled = _.some( selection.models, function( attachment ) {
					return attachment.get('uploading') === true;
				});
			}

			if ( requires.selection && selection && ! selection.length ) {
				disabled = true;
			} else if ( requires.library && library && ! library.length ) {
				disabled = true;
			}
			button.model.set( 'disabled', disabled );
		});
	}
});

module.exports = Toolbar;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * techlogging.media.view.RouterItem
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.view.MenuItem
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var RouterItem = techlogging.media.view.MenuItem.extend(/** @lends techlogging.media.view.RouterItem.prototype */{
	/**
	 * On click handler to activate the content region's corresponding mode.
	 */
	click: function() {
		var contentMode = this.options.contentMode;
		if ( contentMode ) {
			this.controller.content.mode( contentMode );
		}
	}
});

module.exports = RouterItem;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var Menu = techlogging.media.view.Menu,
	Router;

/**
 * techlogging.media.view.Router
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.view.Menu
 * @augments techlogging.media.view.PriorityList
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Router = Menu.extend(/** @lends techlogging.media.view.Router.prototype */{
	tagName:   'div',
	className: 'media-router',
	property:  'contentMode',
	ItemView:  techlogging.media.view.RouterItem,
	region:    'router',

	initialize: function() {
		this.controller.on( 'content:render', this.update, this );
		// Call 'initialize' directly on the parent class.
		Menu.prototype.initialize.apply( this, arguments );
	},

	update: function() {
		var mode = this.controller.content.mode();
		if ( mode ) {
			this.select( mode );
		}
	}
});

module.exports = Router;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * techlogging.media.view.Sidebar
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.view.PriorityList
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var Sidebar = techlogging.media.view.PriorityList.extend(/** @lends techlogging.media.view.Sidebar.prototype */{
	className: 'media-sidebar'
});

module.exports = Sidebar;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * techlogging.media.view.Spinner
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var Spinner = techlogging.media.View.extend(/** @lends techlogging.media.view.Spinner.prototype */{
	tagName:   'span',
	className: 'spinner',
	spinnerTimeout: false,
	delay: 400,

	show: function() {
		if ( ! this.spinnerTimeout ) {
			this.spinnerTimeout = _.delay(function( $el ) {
				$el.addClass( 'is-active' );
			}, this.delay, this.$el );
		}

		return this;
	},

	hide: function() {
		this.$el.removeClass( 'is-active' );
		this.spinnerTimeout = clearTimeout( this.spinnerTimeout );

		return this;
	}
});

module.exports = Spinner;


/***/ })
/******/ ]);