$(document).ready(function () {
    $('form').validate({
        rules: {
            'full-name': {
                required: true, minlength: 6, maxlength: 50
            }, 'email': {
                required: true, maxlength: 255
            }, 'phone': {
                required: true, digits: true
            }, 'message': {
                required: true,
            }, 'reason': {
                required: true
            }
        }, messages: {
            'full-name': {
                required: "Name can't be blank",
                minlength: "Name must be more than or equal 6 letters",
                maxlength: "Name must be less than or equal 50 letters",
            }, 'email': {
                required: "Email can't be blank", maxlength: "Email must be less than or equal 255 letters",
            }, 'phone': {
                required: "Phone can't be blank", digits: "Please type number only"
            }, 'message': {
                required: "Please type something"
            }, 'reason': {
                required: "Please choose one",
            }
        }
    })
});