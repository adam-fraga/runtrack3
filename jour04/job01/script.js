$('#button').on('click', function (e) {
    $.ajax({
        url: 'expression.txt',  // Target
        type: 'GET',           //Request type
        dataType: 'text',     //Type of Data
        // More options possible visit >>> https://api.jquery.com/jquery.ajax/
    })
        .done(function (text) {
            let citation = "<p>" + text + "</p>";
            $("body").append(text);
        });
})