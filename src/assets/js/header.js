let header = document.querySelector('.header');

document.addEventListener('scroll', function () {
  let scroll = document.querySelector('html').scrollTop;
  if (scroll > 200 & !header.classList.contains('header--fixed')) {
    headerFix();
  } else if (scroll < 200 & header.classList.contains('header--fixed')) {
    headerStatic();
  }

});

function headerFix() {
  header.classList.add('header--fixed');
}

function headerStatic() {
  header.classList.add('header--height0');

  function headerRemoveFix() {

    header.classList.remove('header--fixed');
    header.classList.remove('header--height0');
    header.removeEventListener('animationend', headerRemoveFix)
  }
  header.addEventListener('animationend', headerRemoveFix)
}

export const headerDefault = () => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector('.header')) {
      gsap.to([".header__logo", ".header__nav", ".header__phone", ".header__btn", ".header__burger"], {
        opacity: 0,
        y: -64,
        duration: 0,
      })
    }
  }
}
headerDefault()

export const headerStartAnimation = (time) => {
  if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
    if (document.querySelector('.header')) {
      setTimeout(function () {
        gsap.to([".header__logo", ".header__nav"], {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "easeOutExpo",
        })
        gsap.to([".header__phone", ".header__btn", ".header__burger"], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "easeOutExpo",
        })
      }, time)
    }
  }
}