export const historyAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".history")) {

      let historyRight = document.querySelectorAll(".history__list-right .history__item")
      let historyLeft = document.querySelectorAll(".history__list-left .history__item")

      historyRight.forEach(element => {

        gsap.fromTo(
          element, {
          x: 200,
        }, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 2.5
          },
          x: 0,
          ease: 'easeOutExpo',
        })


        gsap.fromTo(
          element.querySelector('.history__item-circle'), {
          x: -200,
        }, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 2.5
          },
          x: 0,
          ease: 'easeOutExpo',
        })

        gsap.fromTo(
          [element.querySelector('.history__number'), element.querySelector('.history__text')], {
          opacity: 0,
        }, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 2.5
          },
          x: 0,
          opacity: 1,
          ease: 'easeOutExpo',
        })
      })


      historyLeft.forEach(element => {

        gsap.fromTo(
          element, {
          x: -200,
        }, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 2.5
          },
          x: 0,
          ease: 'easeOutExpo',
        })


        gsap.fromTo(
          element.querySelector('.history__item-circle'), {
          x: 200,
        }, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 2.5
          },
          x: 0,
          ease: 'easeOutExpo',
        })

        gsap.fromTo(
          [element.querySelector('.history__number'), element.querySelector('.history__text')], {
          opacity: 0,
        }, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 2.5
          },
          x: 0,
          opacity: 1,
          ease: 'easeOutExpo',
        })

      })
    }
  }
}