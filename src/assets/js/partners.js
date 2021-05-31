export const partnersAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (window.showAnimations) {
      if (document.querySelector(".faq")) {

        let arrShow = document.querySelectorAll(".faq__item");

        arrShow.forEach(element => {
          gsap.fromTo(
            element, {
            opacity: 0,
            xPercent: 10,
          }, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "center center",
              scrub: 1
            },
            stagger: {
              each: 0.1,
            },
            xPercent: 0,
            opacity: 1,
          })

        })
      }
    }
  }
}