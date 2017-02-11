$(document).ready( function () {

// Owl Carousel
// basic demo, responsive with next/prev nav
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

});

// END OF DOCUMENT READY
