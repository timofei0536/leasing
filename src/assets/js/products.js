export const productsAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".products__list")) {


      if (document.querySelector('.products__title')) {

        gsap.fromTo(".products__title", {
          opacity: 0,
          yPercent: 50,
        }, {
          scrollTrigger: {
            trigger: ".products .center-wrap",
            start: "top 65%"
          },
          yPercent: 0,
          ease: "easeOutExpo",
          opacity: 1,
          duration: 1,
        })
      }

      if (window.showAnimations) {
        gsap.fromTo(".products__list", {
          scale: 0.75
        }, {
          scrollTrigger: {
            trigger: ".products .center-wrap",
            start: "top bottom",
            end: "center center",
            scrub: 3,
          },
          scale: 1
        })
      }

      if (!window.showAnimations) {
        gsap.fromTo(".products__list", {
          scale: 0.75
        }, {
          scrollTrigger: {
            trigger: ".products .center-wrap",
            start: "top bottom",
            end: "center center",
            scrub: 3,
            once: true
          },
          scale: 1
        })
      }
    }
  }
}

productsAnimation()