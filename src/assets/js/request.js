export const requestAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".request")) {
      gsap.fromTo(".request .request__title", {
        opacity: 0,
        yPercent: 50,
      }, {
        scrollTrigger: {
          trigger: ".request .center-wrap",
          start: "top 65%"
        },
        yPercent: 0,
        ease: "easeOutExpo",
        opacity: 1,
        duration: 1,
      })
    }
  }
}