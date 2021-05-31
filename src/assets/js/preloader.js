import { mainSliderChange } from "./main-slider";
import { startAllAnimation } from "./startAnimationAll";

let preloader = document.querySelector('.preloader');

if (!(document.referrer.indexOf('tss') == -1) || !(location.href.indexOf('localhost') == -1)) {
  preloader.remove();
  startAllAnimation(false)
} else {
  if (preloader) {
    startAllAnimation(true)

    gsap.to(".preloader", {
      y: "0%",
      duration: 0
    })

    gsap.to([".preloader .preloader__logo-top svg", ".preloader .preloader__logo-bottom svg"], {
      y: "120%",
      opacity: 1,
      duration: 0
    })

    gsap.to(".preloader .preloader__logo-left img", {
      rotationY: 180,
      delay: 1.5,
      duration: 1
    })

    gsap.to([".preloader .preloader__logo-top svg"], {
      y: "0",
      duration: 0.5,
      ease: "easeOutExpo",
      delay: 0.75
    })

    gsap.to([".preloader .preloader__logo-bottom svg"], {
      y: "0",
      duration: 0.5,
      ease: "easeOutExpo",
      delay: 1
    })

    setTimeout(function () {
      gsap.to([".preloader .preloader__logo-left img", ".preloader .preloader__logo-top svg", ".preloader .preloader__logo-bottom svg"], {
        opacity: 0,
        duration: 0.7
      })
      gsap.to(".preloader", {
        opacity: 0,
        duration: 1
      })
      window.startMainSliderChange = true;
      mainSliderChange()
      console.log("включился в п 53")
    }, 3500);

    setTimeout(function () {
      preloader.style.display = 'none';
    }, 4500);
  }
}