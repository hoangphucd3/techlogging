var View = techlogging.media.View,
	EditImage = techlogging.media.view.EditImage,
	Details;

/**
 * techlogging.media.view.EditImage.Details
 *
 * @memberOf techlogging.media.view.EditImage
 *
 * @class
 * @augments techlogging.media.view.EditImage
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Details = EditImage.extend(/** @lends techlogging.media.view.EditImage.Details.prototype */{
	initialize: function( options ) {
		this.editor = window.imageEdit;
		this.frame = options.frame;
		this.controller = options.controller;
		View.prototype.initialize.apply( this, arguments );
	},

	back: function() {
		this.frame.content.mode( 'edit-metadata' );
	},

	save: function() {
		this.model.fetch().done( _.bind( function() {
			this.frame.content.mode( 'edit-metadata' );
		}, this ) );
	}
});

module.exports = Details;
