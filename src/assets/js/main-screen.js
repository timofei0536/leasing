export const mainScreenAnimation = (time) => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector(".main-screen")) {
      gsap.to(".main-screen__background", {
        scale: 1.2,
        duration: 0
      })

      gsap.to(".main-screen .main-screen__title", {
        opacity: 0,
        y: 25,
        duration: 0
      })

      gsap.to(".main-screen .breadcrumbs__item", {
        opacity: 0,
        y: 5,
        duration: 0
      })

      if (document.querySelector(".main-screen__menu-list")) {
        gsap.to(".main-screen .main-screen__menu-item", {
          opacity: 0,
          y: 5,
          duration: 0
        })
      }

      setTimeout(function () {
        gsap.to(".main-screen .main-screen__title", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "easeOutExpo",
        })

        setTimeout(function () {
          if (window.showAnimations) {
            gsap.fromTo(".main-screen .main-screen__title", {
              opacity: 1,
              y: 0,
              duration: 0,
            }, {
              scrollTrigger: {
                trigger: ".main-screen",
                start: "10% top",
                end: "bottom top",
                scrub: 1
              },
              opacity: 0,
              y: 100,
            })
          }
        }, 1000)

        if (window.showAnimations) {
          gsap.utils.toArray(".main-screen__background").forEach((element) => {
            setTimeout(function () {
              element.style.backgroundPosition = `50% 0px`;
              gsap.to(element, {
                backgroundPosition: `50% ${element.clientHeight / 4}px`,
                ease: "easeOutExpo",
                scrollTrigger: {
                  trigger: element,
                  start: "top top",
                  scrub: 1.1
                }
              });
            }, 1500);
          });
        }

        gsap.to(".main-screen .breadcrumbs__item", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "easeOutExpo",
          stagger: {
            amount: 1,
          },
        })

        if (document.querySelector(".main-screen__menu-list")) {
          gsap.to(".main-screen .main-screen__menu-item", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "easeOutExpo",
            stagger: {
              amount: 1,
            },
          })
        }

        gsap.to(".main-screen__background", {
          scale: 1.1,
          duration: 5,
        })
      }, time);
    }
  }
}