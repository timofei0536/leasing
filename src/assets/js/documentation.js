export const documentationAnimation = (timeDelay) => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (window.showAnimations) {
      if (document.querySelector(".documentation")) {

        let arrShow = document.querySelectorAll(".documentation__box")

        arrShow.forEach((element, index) => {

          gsap.to(element.querySelector(".documentation__title .oh"), {
            opacity: 0,
            yPercent: 100,
            duration: 0
          })

          if (index == 0) {
            console.log(element)
            setTimeout(function () {
              gsap.to(element.querySelector(".documentation__title .oh"), {
                opacity: 1,
                duration: 0.8,
                yPercent: 0,
                ease: 'easeOutExpo',
              })
            }, timeDelay)
          } else {
            gsap.fromTo(element, {
              yPercent: 25,
            }, {
              scrollTrigger: {
                trigger: element,
                start: "top 70%"
              },
              yPercent: 0,
              duration: 1.8,
              ease: 'easeOutExpo',
            })

            gsap.fromTo(
              element.querySelector(".documentation__title .oh"), {
              yPercent: 100,
            }, {
              scrollTrigger: {
                trigger: element,
                start: "top 80%"
              },
              opacity: 1,
              yPercent: 0,
              duration: 1,
            })
          }
          gsap.fromTo(
            element.querySelectorAll(".download"), {
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