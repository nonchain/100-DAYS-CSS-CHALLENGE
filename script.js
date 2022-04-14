$(document).ready(function () {
    <?php
        header('Content-Type: application/json');
        header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
    ?>
    let day_count = 13;
    for (i = 1; i <= day_count; i++) {
        $('.list-group').append(`<li class="list-group-item"><a href="day${('000' + i).slice(-3)}">Day ${i}</a></li>`);
    }
});
