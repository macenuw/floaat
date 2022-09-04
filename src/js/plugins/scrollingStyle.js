import ScrollMagic from 'scrollmagic'
function scrollingStyle() {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "200%"
    }
  });

  var slides = document.querySelectorAll(".block");

  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {
        pushFollowers: false
      })
      .addTo(controller);
  }
}
export default scrollingStyle;