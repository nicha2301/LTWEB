$(document).ready(function () {
    $('form').validate({
        rules: {
            'name-input': {
                required: true, minlength: 6, maxlength: 50
            }, 'email-input': {
                required: true, maxlength: 255
            }, 'password-input': {
                required: true
            }, 'message': {
                required: true,
            }, 'reason': {
                required: true
            }
        }, messages: {
            'name-input': {
                required: "Name can't be blank",
                minlength: "Name must be more than or equal 6 letters",
                maxlength: "Name must be less than or equal 50 letters",
            }, 'email-input': {
                required: "Email can't be blank", maxlength: "Email must be less than or equal 255 letters",
            }, 'password-input': {
                required: "Phone can't be blank"
            }, 'message': {
                required: "Please type something"
            }, 'reason': {
                required: "Please choose one",
            }
        }
    })
});