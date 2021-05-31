const mainSliderParallaxImg = (timeDelay) => {
  if (window.showAnimations) {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.utils.toArray([".swiper-slide-active .main-slider__img-left img", ".swiper-slide-active .main-slider__img-right img"]).forEach((element) => {
        element.style.objectPosition = `50% 0px`;
        setTimeout(function () {
          gsap.to(element, {
            objectPosition: `50% ${innerHeight / 12}px`,
            ease: "easeOutExpo",
            scrollTrigger: {
              trigger: ".main-slider",
              start: "5% top",
              scrub: 1.1
            }
          });
        }, timeDelay)
      });
    }
  }
}

export const mainSliderDefault = () => {
  if (document.querySelector(".main-slider")) {
    gsap.to([".main-slider__arrow-wrap"], {
      css: {
        width: "0%"
      },
      duration: 0,
    })
  }
  setTimeout(function () {
    mainSliderParallaxImg()
  }, 500)
}
mainSliderDefault()

export const mainSliderChangeOut = (time) => {
  if (document.querySelector(".main-slider")) {
    if (window.showAnimations) {
      gsap.to([".swiper-slide-prev .main-slider__title", ".swiper-slide-next .main-slider__title", ".swiper-slide-prev .main-slider__subtitle", ".swiper-slide-next .main-slider__subtitle"], {
        y: 50,
        opacity: 0,
        duration: time,
        ease: "easeOutExpo",
      })

      gsap.to([".swiper-slide-prev .main-slider__text", ".swiper-slide-next .main-slider__text", ".swiper-slide-prev .main-slider__author", ".swiper-slide-next .main-slider__author"], {
        opacity: 0,
        y: 30,
        duration: time,
        ease: "easeOutExpo",
      })

      gsap.to([".swiper-slide-prev .main-slider__img-left img", ".swiper-slide-prev .main-slider__img-right img",
        ".swiper-slide-next .main-slider__img-left img", ".swiper-slide-next .main-slider__img-right img"
      ], {
        scale: 1.5,
        duration: time,
        ease: "easeOutExpo",
      })
    }
  }
}

export const mainSliderChangeDefault = () => {
  if (document.querySelector(".main-slider")) {
    if (window.showAnimations) {
      gsap.to(".swiper-slide-active .main-slider__img-left img", {
        y: -50,
        scale: 1.35,
        duration: 0,
      })
      gsap.to(".swiper-slide-active .main-slider__img-right img", {
        y: 50,
        scale: 1.35,
        duration: 0,
      })
    }

    if (!window.showAnimations) {
      gsap.fromTo([".swiper-slide-active .main-slider__img-left img", ".swiper-slide-active .main-slider__img-right img"], {
        scale: 1.5,
      }, {
        scale: 1.15,
        duration: 5,
        ease: "easeOutExpo",
      })
    }

    gsap.to([".swiper-slide-active .main-slider__title", ".swiper-slide-active .main-slider__subtitle"], {
      opacity: 0,
      y: 50,
      duration: 0,
    })

    gsap.to([".swiper-slide-active .main-slider__text", ".swiper-slide-active .main-slider__author"], {
      opacity: 0,
      y: 30,
      duration: 0,
    })
  }
}


export const mainSliderChange = () => {
  if (document.querySelector(".main-slider")) {
    if (window.showAnimations) {
      gsap.to([".swiper-slide-active .main-slider__img-left img", ".swiper-slide-active .main-slider__img-right img"], {
        y: 0,
        scale: 1.15,
        duration: 1.5,
        ease: "easeOutExpo",
        delay: 0
      })
    }

    gsap.to([".swiper-slide-active .main-slider__title", ".swiper-slide-active .main-slider__subtitle"], {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 0.5,
    })
    gsap.to([".swiper-slide-active .main-slider__title", ".swiper-slide-active .main-slider__subtitle"], {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 0.5,
    })
    gsap.to([".swiper-slide-active .main-slider__title", ".swiper-slide-active .main-slider__subtitle"], {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 0.5,
    })
    gsap.to([".swiper-slide-active .main-slider__text", ".swiper-slide-active .main-slider__author"], {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 1
    })
    gsap.to([".main-slider__arrow-wrap"], {
      css: {
        width: "100%"
      },
      duration: 1.15,
      ease: "easeOutExpo",
      delay: 0.85
    })
  }
}

window.startMainSliderChange = false;

if (document.querySelector('.main-slider')) {
  var mainSlider = new Swiper('.main-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    autoHeight: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.main-slider__arrow-next',
      prevEl: '.main-slider__arrow-prev',
    },
    pagination: {
      el: '.main-slider .swiper-pagination',
      type: 'fraction',

      formatFractionCurrent: function (number) {
        if (number < 10) {
          number = '0' + number;
        }
        return number;
      }
    },
    on: {
      slideChangeTransitionStart: function () {
        mainSliderParallaxImg()
        mainSliderChangeDefault()
        if (window.startMainSliderChange) {
          mainSliderChangeOut(0.5)
          setTimeout(function () {
            mainSliderChange()
            console.log("включился в м 195")
          }, 500)
        }
      },
    }
  });
}

setTimeout(function () {
  if (mainSlider) {
    mainSlider.autoplay.stop()
    setTimeout(function () {
      if (window.startMainSliderChange) {
        mainSlider.autoplay.start()
      }
    }, 1000)

    setTimeout(function () {
      if (window.startMainSliderChange) {
        mainSlider.autoplay.start()
      }
    }, 2500)
  }
}, 1000)