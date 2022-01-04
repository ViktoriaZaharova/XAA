// btn scroll top
$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

// animate scroll
$(".go_to").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top,
        heightHeader = $('header').height();
    $('body,html').animate({scrollTop: top - heightHeader}, 500);
});

// fixed header
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

// slider
$('.certification-slider').slick({
    slidesToShow: 4,
    appendArrows: '.certification-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                appendArrows: '.certification-slider',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                appendArrows: '.certification-slider',
                slidesToShow: 1
            }
        }
    ]
});

$('.materials-slider').slick({
    slidesToShow: 2,
    appendArrows: '.materials-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                appendArrows: '.materials-slider'
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                appendArrows: '.materials-slider'
            }
        }

    ]
});

$('.reviews-slider').slick({
    slidesToShow: 1,
    appendArrows: '.reviews-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                appendArrows: '.reviews-slider'
            }
        }

    ]
});

$('.social-network-slider').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.recommended-articles-slider').slick({
    slidesToShow: 3,
    appendArrows: '.recommended-articles-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,

                appendArrows: '.recommended-articles-slider'
            }
        }

    ]
});

$('.before-after-work-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

// show list all
$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.examples-operation-col:hidden').slice(0, 4).slideDown();

    var onBlock = $('.examples-operation-col:hidden').length;
    if (onBlock <= 0) {
        $('.btn-load').hide();
    }
});

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});


$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('.menu-catalog').fadeOut();
    $('.overlay-menu').fadeOut();
});

$('.links-catalog').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('.overlay-menu').fadeToggle();
    $('.menu-catalog').fadeToggle();
});

$('.btn-close-menu-catalog').on('click', function () {
    $('.links-catalog').removeClass('click');
    $('.menu-catalog').fadeOut();
    $('.overlay-menu').fadeOut();
});

// reviews block visible
$('.btn-add-reviews').on('click', function (e) {
    e.preventDefault();
    $(this).fadeOut();
    $('.reviews-home-wrapper').slideDown();
});

$('.btn-hidden-reviews').on('click', function (e) {
    e.preventDefault();
    $('.reviews-home-wrapper').slideUp();
    $('.btn-add-reviews').css('display', 'flex');
});


$('[name="phone"]').mask('+7(999) 999-99-99');