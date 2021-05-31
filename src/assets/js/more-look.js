let documentationMoreLook = document.querySelector('.more-look__wrap')

if (documentationMoreLook) {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    documentationMoreLook.addEventListener('mouseenter',
      function () {
        gsap.to(".more-look__background-white", {
          css: {
            top: "100%",
          },
          ease: "power1.out",
        })
        gsap.fromTo(".more-look__background", {
          scale: 1.3,
          y: 0,
        }, {
          y: 20,
          ease: "power1.out",
          duration: 0.5
        })
        gsap.to(".more-look__wrap svg", {
          x: 25,
          ease: "power1.out",
          duration: 0.5
        })
      })

    documentationMoreLook.addEventListener('mouseleave',
      function () {
        gsap.to(".more-look__background-white", {
          css: {
            top: "0%",
          },
        })
        gsap.to(".more-look__background", {
          y: 0,
          ease: "power1.out",
          duration: 0.5
        })
        gsap.to(".more-look__wrap svg", {
          x: 0,
          ease: "power1.out",
          duration: 0.5
        })
      })
  }
}