$(document).on('ready', function() {
    $("#input-Experience").fileinput({
        uploadUrl: '/file-upload-batch/2',
        maxFilePreviewSize: 10240
    });
});