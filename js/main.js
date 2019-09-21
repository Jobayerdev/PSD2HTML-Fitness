// Function Activation
$(document).ready(function () {
    animationClass();
    new WOW().init();
    OwlCarouselFunction();
    SlickMobileMenuFunction();
});
// Animation
function animationClass() {
    $("section").find("*").addClass("wow slideInUp").attr('data-wow-delay', '0.4s');
    $("section").find("*").attr('data-wow-duration', '1.5s');
}

// Owl Carousel Function
function OwlCarouselFunction() {
    $('#home-sliders').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items: 1
    });
}
// Slick Mobile Menu Function
function SlickMobileMenuFunction() {
    $('#main-menu').slicknav({
        label: '',
        duration: 500,
        prependTo: '#mobile-menu'
    });
}
