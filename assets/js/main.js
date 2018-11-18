$(document).ready(function() {
    $(".dropdown-trigger").dropdown({
        hover: true,
        inDuration: 200,
        coverTrigger: false,
        onOpenEnd: function(e) {
            var target = $(e).attr('data-target');
            var navbarHeight = $('.nav-wrapper').height
        },
    });
});