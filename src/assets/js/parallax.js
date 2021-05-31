export const parallaxAnimation = () => {

  gsap.utils.toArray(".img-parallax .bg").forEach((section, i) => {
    console.log(section);
    const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

    gsap.fromTo(section, {
      y: -heightDiff
    }, {
      scrollTrigger: {
        trigger: section.parentElement,
        scrub: true
      },
      y: 0,
      ease: "easeOutExpo"
    });
  });
}