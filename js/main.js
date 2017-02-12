$(document).ready( function () {

// Full Calendar
$('#calendar').fullCalendar({
        // put your options and callbacks here

        eventSources: [

        // your event source
        {
            events: [ // put the array in the `events` property
                {
                    title  : 'Introduction to Google Analytics',
                    start  : '2017-03-14',
                    url    : '/google-analytics-intro.html',
                },
                {
                    title  : 'Taking Google Analytics Further',
                    start  : '2017-03-28',
                    url    : '/google-analytics-further.html',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2017-04-11',
                    url    : '/seo-basics.html',
                },
                {
                    title  : 'Introduction to Google Analytics',
                    start  : '2017-04-25',
                    url    : '/google-analytics-intro.html',
                },
                {
                    title  : 'Taking Google Analytics Further',
                    start  : '2017-05-09',
                    url    : '/google-analytics-further.html',
                },
                {
                    title  : 'Introduction to SEO Best Practices',
                    start  : '2017-05-23',
                    url    : '/seo-basics.html',
                }
            ],
            color: 'orange',     // an option!
            textColor: 'black' // an option!
        }

        // any other event sources...

    ]

    })

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
