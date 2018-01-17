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
