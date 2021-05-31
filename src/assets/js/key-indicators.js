export const indicatorsAnimation = (timeDelay) => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".key-indicators")) {
      gsap.to(".key-indicators .key-indicators__top-item", {
        opacity: 0,
        y: "50%",
        duration: 0
      })

      setTimeout(function () {
        gsap.to(".key-indicators .key-indicators__top-item", {
          y: "0%",
          opacity: 1,
          ease: "easeOutExpo",
          duration: 1,
          stagger: {
            amount: 1,
          }
        },
        )
      }, timeDelay)
    }
  }
}
