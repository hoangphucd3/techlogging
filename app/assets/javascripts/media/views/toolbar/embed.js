var Select = techlogging.media.view.Toolbar.Select,
	l10n = techlogging.media.view.l10n,
	Embed;

/**
 * techlogging.media.view.Toolbar.Embed
 *
 * @memberOf techlogging.media.view.Toolbar
 *
 * @class
 * @augments techlogging.media.view.Toolbar.Select
 * @augments techlogging.media.view.Toolbar
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Embed = Select.extend(/** @lends techlogging.media.view.Toolbar.Embed.prototype */{
	initialize: function() {
		_.defaults( this.options, {
			text: l10n.insertIntoPost,
			requires: false
		});
		// Call 'initialize' directly on the parent class.
		Select.prototype.initialize.apply( this, arguments );
	},

	refresh: function() {
		var url = this.controller.state().props.get('url');
		this.get('select').model.set( 'disabled', ! url || url === 'http://' );
		/**
		 * call 'refresh' directly on the parent class
		 */
		Select.prototype.refresh.apply( this, arguments );
	}
});

module.exports = Embed;
