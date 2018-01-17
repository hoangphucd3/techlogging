var EditImage;

/**
 * techlogging.media.controller.EditImage
 *
 * A state for editing (cropping, etc.) an image.
 *
 * @memberOf techlogging.media.controller
 *
 * @class
 * @augments techlogging.media.controller.State
 * @augments Backbone.Model
 *
 * @param {object}                    attributes                      The attributes hash passed to the state.
 * @param {techlogging.media.model.Attachment} attributes.model                The attachment.
 * @param {string}                    [attributes.id=edit-image]      Unique identifier.
 * @param {string}                    [attributes.title=Edit Image]   Title for the state. Displays in the media menu and the frame's title region.
 * @param {string}                    [attributes.content=edit-image] Initial mode for the content region.
 * @param {string}                    [attributes.toolbar=edit-image] Initial mode for the toolbar region.
 * @param {string}                    [attributes.menu=false]         Initial mode for the menu region.
 * @param {string}                    [attributes.url]                Unused. @todo Consider removal.
 */
EditImage = techlogging.media.controller.State.extend(/** @lends techlogging.media.controller.EditImage.prototype */{
	defaults: {
		id:      'edit-image',
		title:   'l10n.editImage',
		menu:    false,
		toolbar: 'edit-image',
		content: 'edit-image',
		url:     ''
	},

	/**
	 * Activates a frame for editing a featured image.
	 *
	 * @since 3.9.0
	 *
	 * @returns {void}
	 */
	activate: function() {
		this.frame.on( 'toolbar:render:edit-image', _.bind( this.toolbar, this ) );
	},

	/**
	 * Deactivates a frame for editing a featured image.
	 *
	 * @since 3.9.0
	 *
	 * @returns {void}
	 */
	deactivate: function() {
		this.frame.off( 'toolbar:render:edit-image' );
	},

	/**
	 * Adds a toolbar with a back button.
	 *
	 * When the back button is pressed it checks whether there is a previous state.
	 * In case there is a previous state it sets that previous state otherwise it
	 * closes the frame.
	 *
	 * @since 3.9.0
	 *
	 * @returns {void}
	 */
	toolbar: function() {
		var frame = this.frame,
			lastState = frame.lastState(),
			previous = lastState && lastState.id;

		frame.toolbar.set( new techlogging.media.view.Toolbar({
			controller: frame,
			items: {
				back: {
					style: 'primary',
					text:     'l10n.back',
					priority: 20,
					click:    function() {
						if ( previous ) {
							frame.setState( previous );
						} else {
							frame.close();
						}
					}
				}
			}
		}) );
	}
});

module.exports = EditImage;
