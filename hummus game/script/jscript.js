$(document).ready(function () {
// $('div.intro button.start-button').on('click', function () {
//     $('div').toggleClass('show');
// // everything here
// });

//from here
    //creates an order
    var createFirstOrder=function () {
        var eggs=Math.floor((Math.random()*4)+1);
        var ful=Math.floor((Math.random()*4)+1);
        var hummus=Math.floor((Math.random()*4)+1);
        var orderObject={eggs:eggs, hummus:hummus, ful:ful};
        $('.first-line').text('Eggs: '+eggs);
        $('.second-line').text('Hummus: '+hummus);
        $('.third-line').text('Ful: '+ful);

         return orderObject;
    };
    createFirstOrder();
    // var orderIngredientsCounter=createFirstOrder();
    // var createOrder(orderCounter) {
    //   var eggs = orderCounter.eggs + Math.floor((Math.random()*2) + 1);
    //   var ful = orderCounter.ful + Math.floor((Math.random()*3) + 1);
    //   var hummus = orderCounter.hummus + Math.floor((Math.random()*2) + 1);
    //   var orderObj = {eggs:eggs, hummus:hummus, ful:ful};
    //   $('span.current-order').text('eggs: '+eggs+
    //       ' hummus scoops: '+hummus+
    //       ' ful: '+ful);
    //    return orderObj;
    // }
    //dealing with the order
    var dealing=function (orderIngredientsCounter) {

    };

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
        var selectedUtensil=$('.selected');

        if (askedIngredient===selectedUtensil.attr('data-can-scoop') && ingredientsCounter[askedIngredient]<3){
            ingredientsCounter[askedIngredient]++;
            $('.'+askedIngredient+'-tray').css('background-image','url("./images/tray-'+askedIngredient+'-'+ingredientsCounter[askedIngredient]+'.png")');
        }
        else if(ingredientsCounter[askedIngredient]>=3){
            $('.'+askedIngredient+'-tray').css('background-image','url("./images/tray-1.png")')

        }
        else if(askedIngredient!==selectedUtensil.attr('data-can-scoop')){
            selectedUtensil.addClass('wrong-tool');
            setTimeout(function () {
                selectedUtensil.removeClass('wrong-tool');
            },200);
        }
        
    });


//till here
});
