/**
 * techlogging.media.view.Spinner
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
var Spinner = techlogging.media.View.extend(/** @lends techlogging.media.view.Spinner.prototype */{
	tagName:   'span',
	className: 'spinner',
	spinnerTimeout: false,
	delay: 400,

	show: function() {
		if ( ! this.spinnerTimeout ) {
			this.spinnerTimeout = _.delay(function( $el ) {
				$el.addClass( 'is-active' );
			}, this.delay, this.$el );
		}

		return this;
	},

	hide: function() {
		this.$el.removeClass( 'is-active' );
		this.spinnerTimeout = clearTimeout( this.spinnerTimeout );

		return this;
	}
});

module.exports = Spinner;
