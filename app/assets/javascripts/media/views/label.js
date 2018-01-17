/**
 * techlogging.media.view.Label
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var Label = techlogging.media.View.extend(/** @lends techlogging.media.view.Label.prototype */{
	tagName: 'label',
	className: 'screen-reader-text',

	initialize: function() {
		this.value = this.options.value;
	},

	render: function() {
		this.$el.html( this.value );

		return this;
	}
});

module.exports = Label;
