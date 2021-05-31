let menu = document.querySelector('.mobile-menu');
let burger = document.querySelector('.header__burger');
let closeMenu = document.querySelector('.mobile-menu__act--close');
let menuWrap = document.querySelector('.mobile-menu__wrap');

const mobileMenuDefault = (timeDuration) => {
  if (menu) {
    gsap.to(".mobile-menu__nav-link.oh", {
      y: "100%",
      duration: timeDuration
    })
    gsap.to(".mobile-menu__logo img", {
      opacity: 0,
    })
    gsap.to([".mobile-menu__act--close svg", ".mobile-menu__logo img"], {
      y: "-120%",
      duration: timeDuration
    })
    gsap.to([".presentation__border", ".presentation svg", ".presentation__title .oh", ".mobile-menu__tel .oh"], {
      y: "100%",
      opacity: 0,
      duration: timeDuration
    })
    gsap.to([".presentation svg"], {
      y: "-100%",
      opacity: 0,
      duration: timeDuration
    })
  }
}

const showMenuMobile = () => {
  if (menu) {
    mobileMenuDefault()
    menu.classList.add('mobile-menu--active');
    gsap.to(menuWrap, {
      css: {
        top: "0%"
      },
      duration: 0.75,
      ease: "easeOutExpo"
    })
    gsap.to(".mobile-menu__nav-link.oh", {
      y: "0%",
      duration: 0.75,
      stagger: {
        amount: 0.5,
      },
      ease: "easeOutExpo",
      delay: 0.25
    })
    gsap.to(".mobile-menu__logo img", {
      opacity: 1,
      duration: 5,
      ease: "easeOutExpo",
      delay: 0.5
    })
    gsap.to([".mobile-menu__act--close svg", ".mobile-menu__logo img"], {
      y: "0%",
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 0.5
    })
    gsap.to([".presentation__border", ".presentation svg"], {
      y: "0%",
      opacity: 1,
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 0.5
    })
    gsap.to(".presentation__title .oh", {
      y: "0%",
      opacity: 1,
      duration: 0.75,
      stagger: {
        amount: 0.5,
      },
      ease: "easeOutExpo",
      delay: 0.5
    })
    gsap.to([".presentation svg", ".mobile-menu__tel .oh"], {
      y: "0%",
      opacity: 1,
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 0.5
    })
  }
}

const hideMenuMobile = () => {
  if (menu) {
    mobileMenuDefault(0.5)
    gsap.to(menuWrap, {
      css: {
        top: "-100%"
      },
      duration: 0.75,
      ease: "easeOutExpo",
      delay: 0.5
    })

    setTimeout(function () {
      menu.classList.remove('mobile-menu--active');
    }, 1500);
  }
}

burger.addEventListener('click', function () {
  showMenuMobile();
});

closeMenu.addEventListener('click', function () {
  hideMenuMobile();
});