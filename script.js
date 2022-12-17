$(document).ready(function () {
    const api_url = 'https://api.github.com/repos/nonchain/100-DAYS-CSS-CHALLENGE/git/trees/master'
    const regex = new RegExp('^day[0-9]{3}$');
    count_day = 1
    $.get(api_url, data => {
        items = data['tree']
        items.forEach(elm => {
            let name = elm['path']
            if (regex.test(name)) {
                $('.list-group').append(`<li class="list-group-item"><a href="${name}">Day ${count_day}</a></li>`);
                count_day += 1;
            }
        });
    });
});
