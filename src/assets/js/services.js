export const servicesAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (window.showAnimations) {
      if (document.querySelector(".services")) {

        gsap.to(".services__title", {
          opacity: 0,
          y: 25,
          duration: 0,
        })

        gsap.to(".services__title", {
          scrollTrigger: {
            trigger: ".services",
            start: "top 70%"
          },
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "easeOutExpo",
        })
      }
    }
  }
}