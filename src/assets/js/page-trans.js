function hidePageTrans() {
  if (document.querySelector(".page-trans")) {

    gsap.to(".page-trans", {
      y: "100%",
      duration: 0,
    })

    gsap.to(".page-trans", {
      y: "0%",
      duration: 0.5,
      ease: "easeOutExpo",
      delay: 0.5
    })

    gsap.to([".page-trans .page-trans__logo-top svg", ".page-trans .page-trans__logo-bottom svg"], {
      y: "120%",
      duration: 0,
    })

    gsap.to(".page-trans .page-trans__logo-top svg", {
      y: "0",
      duration: 0.5,
      ease: "easeOutExpo",
      delay: 1
    })

    gsap.to(".page-trans .page-trans__logo-bottom svg", {
      y: "0",
      duration: 0.5,
      ease: "easeOutExpo",
      delay: 1.25
    })
  }

}

export const showPageTrans = () => {
  if (window.showAnimations) {
    if (document.querySelector(".page-trans")) {
      gsap.to(".page-trans", {
        y: "0%",
        duration: 0,
      })

      gsap.to(".page-trans .page-trans__logo-left img", {
        rotationY: 180,
        duration: 0.5,
        ease: "easeOutExpo",
        delay: 1
      })

      gsap.to(".page-trans", {
        y: "-100%",
        duration: 0.5,
        ease: "easeOutExpo",
        delay: 1.5
      })
    }
  }
}

if (window.showAnimations) {
  $(document).ready(function () {
    $(document).on(
      'click',
      "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not(.anchors a):not(.single-anchors):not(.fancybox):not([target='_blank']):not([download])",
      function (e) {
        e.preventDefault();
        hidePageTrans();
        var self = this;
        setTimeout(function () {
          window.location.href = $(self).attr('href');
        }, 1750);
      }
    );
  });
}