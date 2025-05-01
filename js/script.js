$(document).ready(function () {
    // Initially show the active type
    $('.type-1-div').removeClass('hidden');

    $('.work-menu a').on('click', function (e) {
        e.preventDefault();

        // Remove active class from all menu items
        $('.work-menu a').removeClass('active');

        // Add active class to the clicked menu item
        $(this).addClass('active');

        // Get the type class (e.g., type-1, type-2)
        var selectedType = $(this).attr('class').split(' ').find(cls => cls.startsWith('type-'));

        // Hide all project type divs
        $('.type-1-div, .type-2-div, .type-3-div, .type-4-div').addClass('hidden');

        // Show the selected project type div
        $('.' + selectedType + '-div').removeClass('hidden');
    });
});

