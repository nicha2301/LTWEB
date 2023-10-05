$(document).ready(function () {
    $('form').validate({
        rules: {
            'username': {
                required: true, minlength: 6, maxlength: 50
            }, 'password': {
                required: true, minlength: 6, maxlength: 20
            }
        }, messages: {
            'username': {
                required: "Name can't be blank",
                minlength: "Name > 6 letters",
                maxlength: "Name < 50 letters",
            }, 'password': {
                required: "Password can't be blank",
                minlength: "Name > 6 letters",
                maxlength: "Name < 20    letters",
            }
        }
    })
});