var All;

/**
 * techlogging.media.view.AttachmentFilters.All
 *
 * @memberOf techlogging.media.view.AttachmentFilters
 *
 * @class
 * @augments techlogging.media.view.AttachmentFilters
 * @augments techlogging.media.View
 * @augments techlogging.Backbone.View
 * @augments Backbone.View
 */
All = techlogging.media.view.AttachmentFilters.extend(/** @lends techlogging.media.view.AttachmentFilters.All.prototype */{
	createFilters: function() {
		var filters = {};

		_.each( techlogging.media.view.settings.mimeTypes || {}, function( text, key ) {
			filters[ key ] = {
				text: text,
				props: {
					status:  null,
					type:    key,
					uploadedTo: null,
					orderby: 'date',
					order:   'DESC'
				}
			};
		});

		filters.all = {
			text:  'l10n.allMediaItems',
			props: {
				status:  null,
				type:    null,
				uploadedTo: null,
				orderby: 'date',
				order:   'DESC'
			},
			priority: 10
		};

		// if ( techlogging.media.view.settings.post.id ) {
		// 	filters.uploaded = {
		// 		text:  'l10n.uploadedToThisPost',
		// 		props: {
		// 			status:  null,
		// 			type:    null,
		// 			uploadedTo: 'techlogging.media.view.settings.post.id',
		// 			orderby: 'menuOrder',
		// 			order:   'ASC'
		// 		},
		// 		priority: 20
		// 	};
		// }

		filters.unattached = {
			text:  'l10n.unattached',
			props: {
				status:     null,
				uploadedTo: 0,
				type:       null,
				orderby:    'menuOrder',
				order:      'ASC'
			},
			priority: 50
		};

		if ( techlogging.media.view.settings.mediaTrash &&
			this.controller.isModeActive( 'grid' ) ) {

			filters.trash = {
				text:  'l10n.trash',
				props: {
					uploadedTo: null,
					status:     'trash',
					type:       null,
					orderby:    'date',
					order:      'DESC'
				},
				priority: 50
			};
		}

		this.filters = filters;
	}
});

module.exports = All;
