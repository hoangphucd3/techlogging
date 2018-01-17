/**
 * techlogging.media.view.Attachment.EditSelection
 *
 * @memberOf techlogging.media.view.Attachment
 *
 * @class
 * @augments techlogging.media.view.Attachment.Selection
 * @augments techlogging.media.view.Attachment
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var EditSelection = techlogging.media.view.Attachment.Selection.extend(/** @lends techlogging.media.view.Attachment.EditSelection.prototype */{
	buttons: {
		close: true
	}
});

module.exports = EditSelection;
