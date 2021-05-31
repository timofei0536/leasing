export const companyAnimation = (time) => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (window.showAnimations) {
      if (document.querySelector(".company-presentation")) {

        gsap.fromTo(".company-presentation__text",
          {
            opacity: 0,
            y: '25%',
            duration: 0
          },
          {
            scrollTrigger: {
              trigger: ".company-presentation .center-wrap",
              start: "top 65%"
            },
            y: "0%",
            opacity: 1,
            ease: "easeOutExpo",
            duration: 1,
          })
      }
    }
  }
}
