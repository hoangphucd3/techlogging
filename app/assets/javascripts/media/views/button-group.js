var $ = Backbone.$,
	ButtonGroup;

/**
 * techlogging.media.view.ButtonGroup
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
ButtonGroup = techlogging.media.View.extend(/** @lends techlogging.media.view.ButtonGroup.prototype */{
	tagName:   'div',
	className: 'button-group button-large media-button-group',

	initialize: function() {
		/**
		 * @member {techlogging.media.view.Button[]}
		 */
		this.buttons = _.map( this.options.buttons || [], function( button ) {
			if ( button instanceof Backbone.View ) {
				return button;
			} else {
				return new techlogging.media.view.Button( button ).render();
			}
		});

		delete this.options.buttons;

		if ( this.options.classes ) {
			this.$el.addClass( this.options.classes );
		}
	},

	/**
	 * @returns {techlogging.media.view.ButtonGroup}
	 */
	render: function() {
		this.$el.html( $( _.pluck( this.buttons, 'el' ) ).detach() );
		return this;
	}
});

module.exports = ButtonGroup;
