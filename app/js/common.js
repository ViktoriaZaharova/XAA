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
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.materials-slider').slick({
    slidesToShow: 4,
    appendArrows: '.materials-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.reviews-slider').slick({
    slidesToShow: 2,
    appendArrows: '.reviews-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

// show list all
$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.examples-operation-col:hidden').slice(0, 4).slideDown();

    var onBlock = $('.examples-operation-col:hidden').length;
    if(onBlock <= 0) {
        $('.btn-load').hide();
    }
});
