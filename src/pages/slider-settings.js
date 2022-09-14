export const sliderSetting = {
    infinite: false,
    speed: 220,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1500,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
        }
        },
        {
        breakpoint: 1276,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
        },
        {
        breakpoint: 1058    ,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
        },
        {
        breakpoint: 833,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
}