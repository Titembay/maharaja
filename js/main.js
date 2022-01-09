jQuery(function ($) {

    'use strict';


    //  Hide Mobile Menu On Click
    //  Navigation Scroll
    //  Sticky Nav
    //  Masonry
    //  Slick Slider
    //  Parallax Scrolling
    //  MagnificPopup
    //  Video Player
    //  Animation

    // -------------------------------------------------------------
    //  Preloader
    // -------------------------------------------------------------

    $(window).on("load", function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});

        //  Masonry
        (function () {  
            $('.gallery-content').masonry({
                itemSelector: '.gallery',
                columnWidth: 1
            });
        }());        
    });
   


    // -------------------------------------------------------------
    //  Sticky Nav
    // -------------------------------------------------------------


    (function () {

        $(window).scroll(function() {
            var navbar = $('.navbar');
            var $this = $(this);

            if($this.scrollTop() > 50) {
                navbar.addClass('menu-bg animated slideInDown');
            }
            else {
                navbar.removeClass('menu-bg animated slideInDown');
            }
        });

    }()); 

    // -------------------------------------------------------------
    // Navigation Scroll
    // -------------------------------------------------------------

    $(window).scroll(function(event) {
        Scroll();
    }); 

    $('.onepage-nav li a').click(function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top -50}, 1000);
        return false;
    });

    // User define function
    function Scroll() {
        var contentTop      =   [];
        var contentBottom   =   [];
        var winTop      =   $(window).scrollTop();
        var rangeTop    =   200;
        var rangeBottom =   500;
        $('.onepage-nav').find('.scroll a').each(function(){
            contentTop.push( $( $(this).attr('href') ).offset().top);
            contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
        })
        $.each( contentTop, function(i){
            if ( winTop > contentTop[i] - rangeTop ){
                $('.onepage-nav li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');          
            }
        })

    };
    
    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    (function() {
      
        $(".barnd-slider").slick({
            infinite: true,
            dots: true,
            slidesToShow: 4,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 2,
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
            ]        
        }); 
      
        $(".testimonial-slider, .details-slider").slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1       
        }); 
                                

    }());
    

    // -------------------------------------------------------------
    //  Parallax Scrolling
    // -------------------------------------------------------------

    jarallax(document.querySelectorAll('.gb-parallax'), {
        keepImg: true,
    });

    
    // -------------------------------------------------------------
    //  MagnificPopup
    // -------------------------------------------------------------

    (function () {
        $('.food-menu .image-link').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
        $('.gallery .image-link').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });

        $('.video-link').magnificPopup({type:'iframe'});
    }());     

    // -------------------------------------------------------------
    //  Video Player
    // -------------------------------------------------------------
    
    (function () {
        $("#jalebi-player").YTPlayer();
    }());   
    

    // -------------------------------------------------------------
    //  Cubeportfolio
    // -------------------------------------------------------------
    
    (function () {
        
        $('#portfolio-content').cubeportfolio({
            filters: '#portfolio-menu',
            loadMore: '#portfolio-menu',
            animationType: 'flipBottom',            
            gapHorizontal: 0,
            gapVertical: 30,
            mediaQueries: [{
                width: 768,
                cols: 4
            }, {
                width: 480,
                cols: 2
            }, {
                width: 0,
                cols: 1
            }],                  

            });

    }()); 




  /*==============================================================*/
  // Animationend
  /*==============================================================*/

    (function( $ ) {

        //Function to animate slider captions 
        function doAnimations( elems ) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            
            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        
        //Variables on page load 
        var $myCarousel = $('#home'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
            
        //Initialize carousel 
        $myCarousel.carousel();
        
        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);
        
        //Pause carousel  
        $myCarousel.carousel('pause');
        
        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });  
        
    })(jQuery); 

  /*==============================================================*/
  // Gmap
  /*==============================================================*/

    (function(){

        var map;  

        map = new GMaps({
            el: '#gmap',
            lat: 40.626299,  
            lng: -74.153694,
            scrollwheel:false,
            zoom: 16,
            zoomControl : true,
            panControl : false,
            streetViewControl : true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = 'images/others/map-icon.png';
        map.addMarker({
            lat: 40.626299,  
            lng: -74.153694,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'left',
            backgroundColor: '#efece0',
        });

    }());     
   
        
// script end
});



