$(document).ready(function () {
// $('div.intro button.start-button').on('click', function () {
//     $('div').toggleClass('show');
// // everything here
// });

//from here
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
            $('.'+askedIngredient+'-tray').css('background-image','url("./images/tray-1.png")')
        }

        else if(askedIngredient!==selectedUtensil.attr('data-can-scoop')){
            selectedUtensil.addClass('wrong-tool');
            setTimeout(function () {
                selectedUtensil.removeClass('wrong-tool');
            },200);
        }

    });

    var failed= function () {
        $('div.world').addClass('hide');
        $('div.intro').addClass('hide');
        $('div.side-menu').addClass('hide');
        $('div.ingredients').addClass('hide');
        $('body').addClass('failed');
    };
    //creates an order
    var createFirstOrder=function () {
        var egg=Math.floor((Math.random()*4)+1);
        var ful=Math.floor((Math.random()*4)+1);
        var hummus=Math.floor((Math.random()*4)+1);
        var orderObject={egg:egg, hummus:hummus, ful:ful};
        $('.first-line').text('egg: '+egg);
        $('.second-line').text('Hummus: '+hummus);
        $('.third-line').text('Ful: '+ful);
        return orderObject;
    };

    var orderIngredientsCounter=createFirstOrder();
    var createOrder = function (orderCounter) {
      var egg = orderCounter.egg + Math.floor((Math.random()*2) + 1);
      var ful = orderCounter.ful + Math.floor((Math.random()*3) + 1);
      var hummus = orderCounter.hummus + Math.floor((Math.random()*2) + 1);
      var orderObj = {egg:egg, hummus:hummus, ful:ful};
        $('.first-line').text('egg: '+egg);
        $('.second-line').text('Hummus: '+hummus);
        $('.third-line').text('Ful: '+ful);
        return orderObj;
    }
    var onThePlate = {hummus:0, ful:0, egg:0, parsely:0};
    //dealing with the order
    var dealing=function (orderIngredientsCounter, timeStepCounter, timeStep) {
      var origin = orderIngredientsCounter;

      if(origin.egg <= onThePlate.egg &&
         origin.ful <= onThePlate.ful &&
         origin.hummus <= onThePlate.hummus) {
           setTimeout(function() {dealing(createOrder(origin), 0, timeStep - 1000);}, 1000);
         }
      if(timeStepCounter >= 3) {
        failed();
      }
      else {
        $("#client").css("background-image", "url('../images/ninja-character-"+ (timeStepCounter+1) + ".png')");
        setTimeout(function(){dealing(origin, timeStepCounter + 1, timeStep);}, timeStep);
      }
    }

    dealing(orderIngredientsCounter, 0, 12000);





//till here
});
