var Button = techlogging.media.view.Button,
	DeleteSelected = techlogging.media.view.DeleteSelectedButton,
	DeleteSelectedPermanently;

/**
 * techlogging.media.view.DeleteSelectedPermanentlyButton
 *
 * When MEDIA_TRASH is true, a button that handles bulk Delete Permanently logic
 *
 * @memberOf techlogging.media.view
 *
 * @class
 * @augments techlogging.media.view.DeleteSelectedButton
 * @augments techlogging.media.view.Button
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
DeleteSelectedPermanently = DeleteSelected.extend(/** @lends techlogging.media.view.DeleteSelectedPermanentlyButton.prototype */{
	initialize: function() {
		DeleteSelected.prototype.initialize.apply( this, arguments );
		this.controller.on( 'select:activate', this.selectActivate, this );
		this.controller.on( 'select:deactivate', this.selectDeactivate, this );
	},

	filterChange: function( model ) {
		this.canShow = ( 'trash' === model.get( 'status' ) );
	},

	selectActivate: function() {
		this.toggleDisabled();
		this.$el.toggleClass( 'hidden', ! this.canShow );
	},

	selectDeactivate: function() {
		this.toggleDisabled();
		this.$el.addClass( 'hidden' );
	},

	render: function() {
		Button.prototype.render.apply( this, arguments );
		this.selectActivate();
		return this;
	}
});

module.exports = DeleteSelectedPermanently;
