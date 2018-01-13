Dropzone.autoDiscover = false;

$(function() {
    var photoDropzone = new Dropzone('#photo_dropzone', {
        previewTemplate: $('#dropzone_preview_template').html(),
        previewsContainer: '#dropzone_previews_container',
        acceptedFiles: 'image/*',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        maxFileSize: 15
    });

    photoDropzone.on('success', function(file, response) {
        $('#photo').append(response.photo);

        setTimeout(function() {
            photoDropzone.removeFile(file)
        }, 3500);
    });
});
