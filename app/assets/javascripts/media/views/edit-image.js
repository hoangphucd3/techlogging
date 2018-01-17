var View = techlogging.media.View,
	EditImage;

/**
 * techlogging.media.view.EditImage
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
EditImage = View.extend(/** @lends techlogging.media.view.EditImage.prototype */{
	className: 'image-editor',
	template: techlogging.template('image-editor'),

	initialize: function( options ) {
		this.editor = window.imageEdit;
		this.controller = options.controller;
		View.prototype.initialize.apply( this, arguments );
	},

	prepare: function() {
		return this.model.toJSON();
	},

	loadEditor: function() {
		var dfd = this.editor.open( this.model.get('id'), this.model.get('nonces').edit, this );
		dfd.done( _.bind( this.focus, this ) );
	},

	focus: function() {
		this.$( '.imgedit-submit .button' ).eq( 0 ).focus();
	},

	back: function() {
		var lastState = this.controller.lastState();
		this.controller.setState( lastState );
	},

	refresh: function() {
		this.model.fetch();
	},

	save: function() {
		var lastState = this.controller.lastState();

		this.model.fetch().done( _.bind( function() {
			this.controller.setState( lastState );
		}, this ) );
	}

});

module.exports = EditImage;
