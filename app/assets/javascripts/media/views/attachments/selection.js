var Attachments = techlogging.media.view.Attachments,
	Selection;

/**
 * techlogging.media.view.Attachments.Selection
 *
 * @memberOf techlogging.media.view.Attachments
 *
 * @class
 * @augments techlogging.media.view.Attachments
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Selection = Attachments.extend(/** @lends techlogging.media.view.Attachments.Selection.prototype */{
	events: {},
	initialize: function() {
		_.defaults( this.options, {
			sortable:   false,
			resize:     false,

			// The single `Attachment` view to be used in the `Attachments` view.
			AttachmentView: techlogging.media.view.Attachment.Selection
		});
		// Call 'initialize' directly on the parent class.
		return Attachments.prototype.initialize.apply( this, arguments );
	}
});

module.exports = Selection;
