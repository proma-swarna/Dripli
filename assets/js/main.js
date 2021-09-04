
$(".services-slide").owlCarousel({
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 5000,
    items: 1,
    margin : 50
});
$(".client").owlCarousel({
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 5000,
    items: 1,
});
$(".global-project").owlCarousel({
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 5000,
    items: 1,
    nav: 'true',
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
});
$(".global-project2").owlCarousel({
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 5000,
    items: 1,
    nav: 'true',
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
});
$(".news-post").owlCarousel({
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 7000,
    items: 1,
    nav: 'true',
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
});
$(".sponsor").owlCarousel({
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 7000,
    items: 5,
    margin: 50,
    responsive:{
        0:{
            items: 2,
        },
        320:{
            items: 2,
        },
        750:{
            items: 3,
        },
        970:{
            items: 5,
        },
        1200:{
            items:5,
        }
    }
});
