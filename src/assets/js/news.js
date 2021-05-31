export const newsAnimation = (time) => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (window.showAnimations) {
      if (document.querySelector(".news")) {

        if (document.querySelector(".about-news")) {

          gsap.to(".news__title",
            {
              opacity: 0,
              yPercent: 100,
              duration: 0
            });

          gsap.to(".new",
            {
              opacity: 0,
              y: '30%',
              duration: 0
            });

          setTimeout(function () {

            gsap.to(".news__title",
              {
                yPercent: 0,
                ease: "easeOutExpo",
                opacity: 1,
                duration: 1,
              });

            gsap.to(".new",
              {
                y: "0%",
                opacity: 1,
                ease: "easeOutExpo",
                duration: 1,
                stagger: {
                  each: 0.3,
                },
              });

          }, time);

        } else {

          gsap.fromTo(".news__title", {
            opacity: 0,
            yPercent: 100,
          }, {
            scrollTrigger: {
              trigger: ".news__list",
              start: "top 65%"
            },
            yPercent: 0,
            ease: "easeOutExpo",
            opacity: 1,
            duration: 1,
          })

          gsap.fromTo(".new",
            {
              opacity: 0,
              y: '30%',
              duration: 0
            },
            {
              scrollTrigger: {
                trigger: ".news__list",
                start: "top 65%"
              },
              y: "0%",
              opacity: 1,
              ease: "easeOutExpo",
              duration: 1,
              stagger: {
                each: 0.3,
              },
            })

        }
      }
    }
  }
}