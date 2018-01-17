/**
 * techlogging.media.view.Attachment.Selection
 *
 * @memberOf techlogging.media.view.Attachment
 *
 * @class
 * @augments techlogging.media.view.Attachment
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var Selection = techlogging.media.view.Attachment.extend(/** @lends techlogging.media.view.Attachment.Selection.prototype */{
	className: 'attachment selection',

	// On click, just select the model, instead of removing the model from
	// the selection.
	toggleSelection: function() {
		this.options.selection.single( this.model );
	}
});

module.exports = Selection;
