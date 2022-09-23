export const sliderSetting = {
    infinite: true,
    speed: 520,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 1500,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 1276,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 1058,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows : false
        }
        },
        {
        breakpoint: 833,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows : false
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows : false
        }
        }
    ]
}