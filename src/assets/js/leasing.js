export const leasingAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (window.showAnimations) {
      if (document.querySelector(".leasing")) {
        gsap.fromTo(
          ".leasing__box-title .oh", {
          yPercent: 100,
        }, {
          scrollTrigger: {
            trigger: '.leasing .leasing__wrap',
            start: "top 65%"
          },
          yPercent: 0,
        })

        let leasingBox = document.querySelectorAll(".leasing__box-list")

        leasingBox.forEach(element => {

          gsap.fromTo(
            element.querySelectorAll(".item-arrow"), {
            opacity: 0,
            x: 25,
          }, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "center center",
              scrub: 2
            },
            stagger: {
              each: 0.1,
            },
            x: 0,
            opacity: 1,
          })

          gsap.fromTo(element, {
            opacity: 0,
          }, {
            scrollTrigger: {
              trigger: element,
              start: "top 70%"
            },
            opacity: 1,
            duration: 2,
            ease: 'easeOutExpo',
          })
        })
      }
    }
  }
}