$('div.intro button.start-button').on('click', function () {
    $('div').toggleClass('show');
// everything here
});

//from here
//gives the serving utensils data about what they can scoop 
$(".spatula-img").data('can-scoop', 'hummus');
$(".tongs-img").data('can-scoop', 'eggs');
$(".spoon-img").data('can-scoop', 'ful');
//gives the trays data about what the correct utensil for them
$(".spatula-img").data('can-scoop', 'hummus');
$(".tongs-img").data('can-scoop', 'eggs');
$(".spoon-img").data('can-scoop', 'ful');

//till here