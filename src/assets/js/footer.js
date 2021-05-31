if ($(window).width() < 1024) {
  $('.footer__list-title').click(function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle(1000);
  })
  $('.mobile-menu__nav-link').click(function () {
    $(this).next().slideToggle(1000);
  })
  $('.key-indicators__tabs-title').click(function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle(1000);
  })
}