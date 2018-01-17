var Menu = techlogging.media.view.Menu,
	Router;

/**
 * techlogging.media.view.Router
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.view.Menu
 * @augments techlogging.media.view.PriorityList
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Router = Menu.extend(/** @lends techlogging.media.view.Router.prototype */{
	tagName:   'div',
	className: 'media-router',
	property:  'contentMode',
	ItemView:  techlogging.media.view.RouterItem,
	region:    'router',

	initialize: function() {
		this.controller.on( 'content:render', this.update, this );
		// Call 'initialize' directly on the parent class.
		Menu.prototype.initialize.apply( this, arguments );
	},

	update: function() {
		var mode = this.controller.content.mode();
		if ( mode ) {
			this.select( mode );
		}
	}
});

module.exports = Router;
