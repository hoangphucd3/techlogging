var Details = techlogging.media.view.Attachment.Details,
	TwoColumn;

/**
 * techlogging.media.view.Attachment.Details.TwoColumn
 *
 * A similar view to media.view.Attachment.Details
 * for use in the Edit Attachment modal.
 *
 * @memberOf techlogging.media.view.Attachment.Details
 *
 * @class
 * @augments techlogging.media.view.Attachment.Details
 * @augments techlogging.media.view.Attachment
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
TwoColumn = Details.extend(/** @lends techlogging.media.view.Attachment.Details.TowColumn.prototype */{
	template: techlogging.template( 'attachment-details-two-column' ),

	initialize: function() {
		this.controller.on( 'content:activate:edit-details', _.bind( this.editAttachment, this ) );

		Details.prototype.initialize.apply( this, arguments );
	},

	editAttachment: function( event ) {
		if ( event ) {
			event.preventDefault();
		}
		this.controller.content.mode( 'edit-image' );
	},

	/**
	 * Noop this from parent class, doesn't apply here.
	 */
	toggleSelectionHandler: function() {},

	render: function() {
		Details.prototype.render.apply( this, arguments );

		techlogging.media.mixin.removeAllPlayers();
		this.$( 'audio, video' ).each( function (i, elem) {
			var el = techlogging.media.view.MediaDetails.prepareSrc( elem );
			new window.MediaElementPlayer( el, techlogging.media.mixin.mejsSettings );
		} );
	}
});

module.exports = TwoColumn;
