new Swiper(".image_slider",{
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    freemode:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})
new Swiper(".image2_slider",{
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    freemode:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      reverseDirection:true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        920: {
            slidesPerView: 5,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})
