$(document).ready(function () {

    $('.tooglepass').click(function () {
        var inputType = $('#pass').attr('type');
        if (inputType === 'password') {
            $('#pass').attr('type', 'text');
        } else {
            $('#pass').attr('type', 'password');
        }
    });



});