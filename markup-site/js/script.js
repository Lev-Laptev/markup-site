$(document).ready(function(){
    function init_slider() {
        $('.main__block').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            dotsClass: "main__dots",
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]       
        });
    }

    if (document.documentElement.clientWidth < 1600) {
        init_slider();
    }

    $(window).resize(function () {
        if (document.documentElement.clientWidth < 1600) {
            if (!($('.main__block').hasClass('slick-slider'))){
                init_slider();
            }
        } else {
            if ($('.main__block').hasClass('slick-slider')){
                $('.main__block').slick('unslick');
            }
        }
    });
});