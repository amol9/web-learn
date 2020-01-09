$(document).ready(function () {
    $('#form').submit(function (event) {
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email').val()
        }

        $.ajax({
            'type': 'post',
            'url': 'http://localhost:8000/submit',
            'data': formData,
            'dataType': 'text',
            'encode': true
        }).done(function (data) {
            console.log(data)
        })

        event.preventDefault()
    })
})
