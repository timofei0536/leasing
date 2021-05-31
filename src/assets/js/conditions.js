export const conditionsAnimation = (timeDelay) => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".conditions")) {

      gsap.to(".conditions__title", {
        opacity: 0,
        yPercent: 100,
        duration: 0
      })

      gsap.to(".conditions__item", {
        opacity: 0,
        y: '50%',
        duration: 0
      })

      setTimeout(function () {

        gsap.to(".conditions__title", {
          yPercent: 0,
          ease: "easeOutExpo",
          opacity: 1,
          duration: 1,
        })

        gsap.to(".conditions__item",
          {
            y: "0%",
            opacity: 1,
            ease: "easeOutExpo",
            duration: 1,
            stagger: {
              amount: 1,
            },
          })

      }, timeDelay);
    }
  }
}
