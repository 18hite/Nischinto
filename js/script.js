$(document).ready(function(){
    $('#slider1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:true,
        autoplay:true,
        // autoplayTimeout:5000,
        items:1  
    })

    new WOW().init();

    var owl = $('#slider1');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })

    $('#slider2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1,
        responsive:{
            768:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
        
        
    })

    $('#slider3').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        dotsEach:true,
        items:1,
        responsive:{
            768:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:3
            }
        }
        
        
    })

    $('#slider4').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots:false,
        items:1,
        responsive:{
            768:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:3
            }
        }
        
        
    })

    $('#slider5').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots:false,
        items:1,
        responsive:{
            768:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:3
            }
        }
        
        
    })
    $('#scroll_top').fadeOut()

    $(window).scroll(function(){
        var x = $(window).scrollTop()
        // console.log(x)

        if(x>200){
            $('.navbar').addClass('sticky')
            $('#scroll_top').fadeIn()
        }
        else{
            $('.navbar').removeClass('sticky')
            $('#scroll_top').fadeOut()
        }
    })

     $('#scroll_top').click(function () {
        $(window).scrollTop(0)
    })
    $('#loader').delay(3000).fadeOut()
    
  });




  
