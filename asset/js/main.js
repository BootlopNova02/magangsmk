/* ======= Swiper box ======= */    
var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    speed: 300,
    slidesToShow: 3,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }
});

/* ======= Fixed header scroll ======= */    
$(window).bind('load', function() {
    if ($(window).scrollTop() > 0) {
        $('#header').addClass('header-scroll');
    }
    else {
        $('#header').removeClass('header-scroll');
    }
});

$(document).ready(function() {

   /* ======= Fixed header scroll ======= */
   
   $(window).bind('scroll resize', function() {
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('header-scroll');
        }
        else {
            $('#header').removeClass('header-scroll');
        }
   });
   
   /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#header', offset: 100});
   
   /* ======= ScrollTo ======= */
   $('a.scrollto').on('click', function(e){
       
       //hash
       var target = this.hash;
               
       e.preventDefault();
       
       $('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
       //Collapse menu
       if ($('.navbar-collapse').hasClass('show')){
           $('.navbar-collapse').removeClass('show');
       }
       
   });


});

/* ======= Login box ======= */
function move_login() {
    document.getElementById("login_box").style.display = 'block';
    document.getElementById("signup_box").style.display = 'none';
}

function move_signup() {
    document.getElementById("login_box").style.display = 'none';
    document.getElementById("signup_box").style.display = 'block';
}