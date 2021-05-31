export const relatedAnimation = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".related-services")) {


      if ( document.querySelector('.related-services__title') ) {

        gsap.fromTo(".related-services__title",{
          opacity: 0,
          yPercent: 50,
        }, {
          scrollTrigger: {
            trigger: ".related-services .center-wrap",
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
}
