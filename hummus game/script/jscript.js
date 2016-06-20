$(document).ready(function () {
// $('div.intro button.start-button').on('click', function () {
//     $('div').toggleClass('show');
// // everything here
// });

//from here
    var createOrder=function () {
        var eggs=Math.floor((Math.random()*4)+1);
        var ful=Math.floor((Math.random()*4)+1);
        var hummus=Math.floor((Math.random()*4)+1);
        $('span.current-order').text('<pre>eggs: '+eggs+
            ' hummus scoops: '+hummus+
            ' ful: '+ful+'</pre>');
    };
    createOrder();
    var ingredientsCounter={parsley:1, hummus:1, ful:1, egg:1};
//gives the serving utensils data about what they can scoop 
    $(".spatula").attr('data-can-scoop', 'hummus');
    $(".tongs").attr('data-can-scoop', 'egg');
    $(".spoon").attr('data-can-scoop', 'ful');
//gives the trays data about what the correct utensil for them
    $(".ful-tray").attr('data-in-tray', 'ful');
    $(".hummus-tray").attr('data-in-tray', 'hummus');
    $(".egg-tray").attr('data-in-tray', 'egg');
//when choosing a utensil
    var utensils=$('div.side-menu .utensil');
    utensils.on('click', function () {
        var selectedUtensil=$(this);
        utensils.removeClass('selected');
        selectedUtensil.addClass('selected');
    });

//when trying to scoop
    var ingredients=$('div.ingredients div');
    ingredients.on('click', function () {
        var askedIngredient=$(this).attr('data-in-tray');

        if (askedIngredient===$('.selected').attr('data-can-scoop') && ingredientsCounter[askedIngredient]<3){
            ingredientsCounter[askedIngredient]++;
            $('.'+askedIngredient+'-tray').css('background-image','url("./images/tray-'+askedIngredient+'-'+ingredientsCounter[askedIngredient]+'.png")');
        }
        else if(ingredientsCounter[askedIngredient]>=3){
            $('.'+askedIngredient+'-tray').css('background-image','url("./images/tray-1.jpg")')
        }
    });

    
//till here
});