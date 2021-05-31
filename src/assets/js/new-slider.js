if (document.querySelector('.new-slider')) {
    let interleaveOffset = 0.5;
    let portfolioSliderSelector1 = '.new-slider .swiper-container';
    let portfolioSliderOptions1 = {
        loop: true,
        slidesPerView: 1,
        loopedSlides: 4,
        centeredSlides: true,
        speed: 1000,
        // autoplay: {
        //     delay: 3000
        // },
        autoHeight: true,
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.new-slider__arrow-next',
            prevEl: '.new-slider__arrow-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
            },

            1024: {
                spaceBetween: 40,
            }
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            progress: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;

                    swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                        "translateX(" + innerTranslate + "px)";
                }
            },
            touchStart: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function (speed) {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    document.portfolioSlider1 = new Swiper(portfolioSliderSelector1, portfolioSliderOptions1);

};