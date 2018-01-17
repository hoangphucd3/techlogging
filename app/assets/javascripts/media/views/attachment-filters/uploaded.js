var l10n = techlogging.media.view.l10n,
	Uploaded;

/**
 * techlogging.media.view.AttachmentFilters.Uploaded
 *
 * @memberOf techlogging.media.view.AttachmentFilters
 *
 * @class
 * @augments techlogging.media.view.AttachmentFilters
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
Uploaded = techlogging.media.view.AttachmentFilters.extend(/** @lends techlogging.media.view.AttachmentFilters.Uploaded.prototype */{
	createFilters: function() {
		var type = this.model.get('type'),
			types = techlogging.media.view.settings.mimeTypes,
			text;

		if ( types && type ) {
			text = types[ type ];
		}

		this.filters = {
			all: {
				text:  text || l10n.allMediaItems,
				props: {
					uploadedTo: null,
					orderby: 'date',
					order:   'DESC'
				},
				priority: 10
			},

			uploaded: {
				text:  l10n.uploadedToThisPost,
				props: {
					uploadedTo: techlogging.media.view.settings.post.id,
					orderby: 'menuOrder',
					order:   'ASC'
				},
				priority: 20
			},

			unattached: {
				text:  l10n.unattached,
				props: {
					uploadedTo: 0,
					orderby: 'menuOrder',
					order:   'ASC'
				},
				priority: 50
			}
		};
	}
});

module.exports = Uploaded;
