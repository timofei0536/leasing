export const offersAnimation = (timeDelay) => {

  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".offers")) {

      let offersArrShow = document.querySelectorAll(".offers")

      offersArrShow.forEach((element, index) => {

        if (index == 0 && document.querySelector(".deal")) {
          gsap.to(
            element.querySelectorAll(".offers__left-title .oh"), {
            yPercent: 100,
          })

          gsap.to(element, {
            opacity: 0,
            yPercent: 25,
            duration: 0,
          })

          setTimeout(function () {
            gsap.to(element, {
              opacity: 1,
              duration: 0.8,
              ease: 'easeOutExpo',
              onStart: () => {
                new Vivus(element.querySelector(".offers__left-img div").id,
                  {
                    duration: 100, file: element.querySelector(".offers__left-img div").getAttribute("data-srs-img"),
                    start: "autostart",
                  });
              }
            })

            gsap.to(element, {
              yPercent: 0,
              duration: 1.8,
              ease: 'easeOutExpo',
              onComplete: function () {
                element.classList.add('offers--line');
              }
            })
            gsap.to(
              element.querySelectorAll(".offers__left-title .oh"), {
              yPercent: 0,
              duration: 1,
            })
          }, timeDelay)
        } else {
          gsap.fromTo(element, {
            opacity: 0,
          }, {
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
              onEnter: () => {
                new Vivus(element.querySelector(".offers__left-img div").id,
                  {
                    duration: 100, file: element.querySelector(".offers__left-img div").getAttribute("data-srs-img"),
                    start: "autostart",
                  });
              }
            },
            opacity: 1,
            duration: 0.8,
            ease: 'easeOutExpo',
          })

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
            onComplete: function () {
              element.classList.add('offers--line');
            }
          })

          gsap.fromTo(element.querySelector(".offers__list"), {
            opacity: 0,
          }, {
            scrollTrigger: {
              trigger: element,
              start: "top 70%"
            },
            opacity: 1,
            duration: 2,
            ease: 'easeOutExpo',
          })

          gsap.fromTo(
            element.querySelectorAll(".offers__left-title .oh"), {
            yPercent: 100,
          }, {
            scrollTrigger: {
              trigger: element,
              start: "top 70%"
            },
            yPercent: 0,
            duration: 1,
          })
          if (window.showAnimations) {
            gsap.fromTo(
              element.querySelectorAll(".offers__list .item-arrow"), {
              opacity: 0,
              x: 25,
            }, {
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "center center",
                scrub: 2
              },
              stagger: {
                each: 0.1,
              },
              x: 0,
              opacity: 1,
            })
          }
        }
      })
    }
  }
}

