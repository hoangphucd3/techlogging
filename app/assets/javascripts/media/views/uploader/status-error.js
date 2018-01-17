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
