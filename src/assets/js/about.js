export const aboutAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".about")) {
      let aboutArrDefault = [".about__title", ".about__top .indicators__item", ".about__bottom-item"];

      aboutArrDefault.forEach(element => {
        gsap.to(element, {
          opacity: 0,
          y: "50%",
          duration: 0
        })
      })

      gsap.to(".about__title", {
        scrollTrigger: {
          trigger: ".about .center-wrap",
          start: "top 65%"
        },
        y: "0%",
        ease: "easeOutExpo",
        opacity: 1,
        duration: 1,
      })

      gsap.to(".about__top .indicators__item", {
        scrollTrigger: {
          trigger: ".about .center-wrap",
          start: "top 65%"
        },
        y: "0%",
        opacity: 1,
        ease: "easeOutExpo",
        duration: 1,
        stagger: {
          amount: 1,
        },
      })

      // gsap.to(".about__bottom .about__bottom-item", {
      //   scrollTrigger: {
      //     trigger: ".about__bottom",
      //     start: "top 75%"
      //   },
      //   y: "0%",
      //   opacity: 1,
      //   ease: "easeOutExpo",
      //   duration: 1,
      //   stagger: {
      //     amount: 1,
      //   },
      //   delay: 0.5
      // })


      gsap.fromTo(".about__bottom .about__bottom-item", {
        opacity: 0,
        xPercent: 10,
      }, {
        scrollTrigger: {
          trigger: ".about__bottom",
          start: "top bottom",
          end: "center center",
          scrub: 2
        },
        stagger: {
          each: 0.1,
        },
        opacity: 1,
        xPercent: 0,
      })



    }
  }
}
