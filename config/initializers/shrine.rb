require 'shrine'
require 'shrine/storage/file_system'

Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new('public', prefix: 'uploads/cache'), # temporary
    store: Shrine::Storage::FileSystem.new('public', prefix: 'uploads/store'), # permanent
}

# Provides ActiveRecord integration, adding callbacks and validations.
Shrine.plugin :activerecord
# Adds the ability to put storing and deleting into a background job.
# Shrine.plugin :backgrounding
# Automatically logs processing, storing and deleting, with a configurable format.
Shrine.plugin :logging
Shrine.plugin :determine_mime_type
Shrine.plugin :cached_attachment_data
Shrine.plugin :restore_cached_data
