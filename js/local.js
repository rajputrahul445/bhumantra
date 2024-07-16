$(document).ready(function(){
      $('.slider').owlCarousel({
          loop:false,
          margin:20,
          nav:false,
          autoplay:true,
          autoplayTimeout:10000,
          dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
    $('.stepSlider').owlCarousel({
          loop:false,
          margin:0,
          nav:true,
          autoplay:false,
          autoplayTimeout:5000,
          dots:false,
          navText : ["<img src='images/step-prev.png'/>","<img src='images/step-next.png'/>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
   
    $('.sevenSlider').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          center: true,
          autoplay:true,
          autoplayTimeout:5000,
          dots:true,
          navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
          responsive:{
              0:{
                  items:3,
                  center:false
              },
              600:{
                  items:4,
                  center:false
              },
              1000:{
                  items:7
              }
          }
      });
    });



$( ".navbar-toggler, .cross-toggler" ).click(function() {
    $(".collapse").toggleClass("active");
    $(".overLay").toggleClass("active");
  });

$( ".closeSticky" ).click(function() {
    $(".stickyMenu").hide();
  });
if(window.innerWidth < 991){
  $( ".dropmenuToggle" ).click(function() {
    $(this).parent(".dropdown").toggleClass("active");
  });
}
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 41) {
//         $(".mainHeader").addClass("fixedHeader");
//     }else{
//     	$(".mainHeader").removeClass("fixedHeader");
//     }
// });
