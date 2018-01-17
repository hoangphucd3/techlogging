/**
 * techlogging.media.controller.MediaLibrary
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments techlogging.media.controller.Library
 * @augments techlogging.media.controller.State
 * @augments Backbone.Model
 */
var Library = techlogging.media.controller.Library,
	MediaLibrary;

MediaLibrary = Library.extend(/** @lends techlogging.media.controller.MediaLibrary.prototype */{
	defaults: _.defaults({
		// Attachments browser defaults. @see media.view.AttachmentsBrowser
		filterable:      'uploaded',

		displaySettings: false,
		priority:        80,
		syncSelection:   false
	}, Library.prototype.defaults ),

	/**
	 * @since 3.9.0
	 *
	 * @param options
	 */
	initialize: function( options ) {
		this.media = options.media;
		this.type = options.type;
		this.set( 'library', techlogging.media.query({ type: this.type }) );

		Library.prototype.initialize.apply( this, arguments );
	},

	/**
	 * @since 3.9.0
	 */
	activate: function() {
		// @todo this should use this.frame.
		if ( techlogging.media.frame.lastMime ) {
			this.set( 'library', techlogging.media.query({ type: techlogging.media.frame.lastMime }) );
			delete techlogging.media.frame.lastMime;
		}
		Library.prototype.activate.apply( this, arguments );
	}
});

module.exports = MediaLibrary;
