import { servicesAnimation } from "./services";
import { requestAnimation } from "./request";
import { aboutAnimation } from "./about";
import { showPageTrans } from "./page-trans";
import { mainScreenAnimation } from "./main-screen";
import { mainSliderChange } from "./main-slider";
import { headerStartAnimation } from "./header";
import { conditionsAnimation } from "./conditions";
import { offersAnimation } from "./offers";
import { documentationAnimation } from "./documentation";
import { historyAnimation } from "./history";
import { partnersAnimation } from "./partners";
import { indicatorsAnimation } from "./key-indicators";
import { relatedAnimation } from "./related-services";
import { financialAnimation } from "./financial-conditions";
import { leasingAnimation } from "./leasing";
import { newsAnimation } from "./news";
import { companyAnimation } from "./company";
import { parallaxAnimation } from "./parallax";
import GsapTween from "gsap-plugin";

window.LARGE_TABLET = '1024';

window.showAnimations = false

export const startAllAnimation = (preloader) => {
  if (window.showAnimations) {
    if (!preloader) {
      showPageTrans();
      mainScreenAnimation(2000)
      conditionsAnimation(3000)
      offersAnimation(2500)
      documentationAnimation(2500)
      indicatorsAnimation(2500)
      financialAnimation(2500)
      setTimeout(function () {
        headerStartAnimation(750)
        mainSliderChange()
        window.startMainSliderChange = true;
      }, 1500);
    }
  }
  if (!window.showAnimations) {
    if (!preloader) {
      gsap.to(".page-trans", {
        y: "-100%",
        duration: 0,
      })
      mainScreenAnimation()
      conditionsAnimation()
      offersAnimation()
      documentationAnimation()
      indicatorsAnimation()
      financialAnimation()
      headerStartAnimation()
      mainSliderChange()
      console.log("включился в все 57")
      window.startMainSliderChange = true;
    }
  }

  if (preloader) {
    headerStartAnimation(4000)
    mainScreenAnimation(3750)
    conditionsAnimation(4750)
    documentationAnimation(4000)
    financialAnimation(4000)
    indicatorsAnimation(4000)
    offersAnimation(4000)
  }

  setTimeout(function () {
    servicesAnimation()
    requestAnimation()
    aboutAnimation()
    historyAnimation()
    partnersAnimation()
    relatedAnimation()
    leasingAnimation()
    newsAnimation()
    companyAnimation()
    parallaxAnimation()
  }, 1500);
}