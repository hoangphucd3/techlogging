var Selection;

/**
 * techlogging.media.view.Selection
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Selection = techlogging.media.View.extend(/** @lends techlogging.media.view.Selection.prototype */{
	tagName:   'div',
	className: 'media-selection',
	template:  techlogging.template('media-selection'),

	events: {
		'click .edit-selection':  'edit',
		'click .clear-selection': 'clear'
	},

	initialize: function() {
		_.defaults( this.options, {
			editable:  false,
			clearable: true
		});

		/**
		 * @member {techlogging.media.view.Attachments.Selection}
		 */
		this.attachments = new techlogging.media.view.Attachments.Selection({
			controller: this.controller,
			collection: this.collection,
			selection:  this.collection,
			model:      new Backbone.Model()
		});

		this.views.set( '.selection-view', this.attachments );
		this.collection.on( 'add remove reset', this.refresh, this );
		this.controller.on( 'content:activate', this.refresh, this );
	},

	ready: function() {
		this.refresh();
	},

	refresh: function() {
		// If the selection hasn't been rendered, bail.
		if ( ! this.$el.children().length ) {
			return;
		}

		var collection = this.collection,
			editing = 'edit-selection' === this.controller.content.mode();

		// If nothing is selected, display nothing.
		this.$el.toggleClass( 'empty', ! collection.length );
		this.$el.toggleClass( 'one', 1 === collection.length );
		this.$el.toggleClass( 'editing', editing );

		this.$('.count').text( 'l10n.selected'.replace('%d', collection.length) );
	},

	edit: function( event ) {
		event.preventDefault();
		if ( this.options.editable ) {
			this.options.editable.call( this, this.collection );
		}
	},

	clear: function( event ) {
		event.preventDefault();
		this.collection.reset();

		// Keep focus inside media modal
		// after clear link is selected
		this.controller.modal.focusManager.focus();
	}
});

module.exports = Selection;
