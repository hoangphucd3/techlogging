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
