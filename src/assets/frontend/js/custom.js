//Owl-carousel

$(document).ready(function(){

    $('.owl-one').owlCarousel({

        loop:true,

        margin:10,

        nav:true,

        responsive:{

            0:{

                items:3

            },

            600:{

                items:6

            },

            1000:{

                items:11

            }

        }

    });

});



//bet-slip

$(document).ready(function(){

    $(".openClose_btn").click(function(){

        $(".bet_slip_card").toggleClass("show");

    });

    $(".collapse_btn").click(function(){

        $(this).toggleClass("collapsed_btn");

    });

    $(".account").click(function(){

        $(".dropdown_menu").toggleClass("show");

    });



    

    

});

//live-chat

setInterval(function(){

    $(".animated-circles").toggleClass("animated");

},3000);



$(document).ready(function() { 

  $(".bet-slip").niceScroll({

    scrollspeed:300

  });

});

//alert
$(document).ready(function() {
    $(".alert").addClass("blink_me");
});







