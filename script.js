$(document).ready(function () {
    var api_url = 'https://api.github.com/repos/progali007/100-DAYS-CSS-CHALLENGE/git/trees/master'
    const regex = new RegExp('^day[0-9]{3}$');
    count_day = 1
    $.get(api_url, function (data, status) {
        items = data['tree']
        for (var i of items) {
            var name = i['path']
            if (regex.test(name)) {
                $('.list-group').append(`<li class="list-group-item"><a href="${name}">Day ${count_day}</a></li>`);
                count_day += 1
            }
        }
    });
});
