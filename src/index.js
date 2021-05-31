import './assets/js/page-trans';
import './assets/css/blocks/page-trans.scss';
import './assets/css/normalize.scss';
import './assets/css/main.scss';
import './assets/js/preloader';
import './assets/css/blocks/preloader.scss';
import './assets/js/startAnimationAll';

//BLOCKS 

import './assets/css/blocks/btn.scss';
import './assets/css/blocks/scroll-down.scss';
import './assets/css/blocks/inputs.scss';
import './assets/css/blocks/item-arrow.scss';
import './assets/css/blocks/offers.scss';
import './assets/css/blocks/toogles.scss';
import './assets/css/blocks/toogles2.scss';
import './assets/css/blocks/new.scss';
import './assets/css/blocks/pagination.scss';
import './assets/css/blocks/new-slider.scss';
import './assets/css/blocks/info.scss';
import './assets/css/blocks/table.scss';
import './assets/css/blocks/link.scss';
import './assets/css/blocks/download.scss';
import './assets/css/blocks/read-more.scss';
import './assets/css/blocks/presentation.scss';
import './assets/css/blocks/more-look.scss';
import './assets/css/blocks/mobile-menu.scss';
import './assets/css/blocks/faq.scss';
import './assets/css/blocks/popup.scss';
import './assets/css/blocks/popup-content.scss';
import './assets/css/blocks/breadcrumbs.scss';
import './assets/css/blocks/indicators.scss';
import './assets/css/blocks/header.scss';
import './assets/css/blocks/footer.scss';
import './assets/css/blocks/main-screen.scss';


// index
import './assets/css/blocks/main-slider.scss';
import './assets/css/blocks/about.scss';
import './assets/css/blocks/services.scss';
import './assets/css/blocks/request.scss';

// deal
import './assets/css/blocks/deal.scss';

// documentation
import './assets/css/blocks/documentation.scss';

// partners
import './assets/css/blocks/partners.scss';

// contacts
import './assets/css/blocks/contacts.scss';

// about
import './assets/css/blocks/key-facts.scss';
import './assets/css/blocks/key-figures.scss';
import './assets/css/blocks/news.scss';
import './assets/css/blocks/company-presentation.scss';


// history
import './assets/css/blocks/history.scss';

// 404
import './assets/css/blocks/error.scss';

// key-indicators
import './assets/css/blocks/key-indicators.scss';

import './assets/css/blocks/about-news.scss';


// services
import './assets/css/blocks/conditions.scss';
import './assets/css/blocks/products.scss';
import './assets/css/blocks/related-services.scss';


// leasing
import './assets/css/blocks/leasing.scss';
import './assets/css/blocks/financial-conditions.scss';

// news-view
import './assets/css/blocks/new-view.scss';

// text-page
import './assets/css/blocks/text-page.scss';

// programs
import './assets/css/blocks/programs.scss';


import './assets/css/blocks/parallax.scss';



// JS
import './assets/js/toogles2';
import './assets/js/header';
import './assets/js/footer';
import './assets/js/new-slider';
import './assets/js/toogles';


import './assets/js/parallax';



import './assets/js/main-slider';
import './assets/js/anchors';
import './assets/js/popup';
import './assets/js/map';
import './assets/js/mobile-menu';
import './assets/js/about';
// import './assets/js/more-look';
import './assets/js/request';
import './assets/js/services';
import './assets/js/main-screen';
import './assets/js/inputs.js';
import './assets/js/products.js';
import './assets/js/conditions.js';
import './assets/js/documentation.js';
import './assets/js/partners.js';
import './assets/js/history.js';
import './assets/js/key-indicators.js';
import './assets/js/related-services.js';
import './assets/js/financial-conditions.js';
import './assets/js/leasing.js';
import './assets/js/news.js';
import './assets/js/company.js';

window.addLoadEvent = function (func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}