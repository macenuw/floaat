import cursor from './plugins/cursore';
import spyImg from './plugins/spyImg';
import cursorHover from './plugins/cursore-hover';
import counter from './plugins/counter';
import scrollingStyle from './plugins/scrollingStyle'
import tabsInit from './plugins/tabs'
import sliderInit from './plugins/slider'
import preloader from './plugins/preloader'
preloader();
window.addEventListener("DOMContentLoaded", () => {
  cursor();
  spyImg();
  cursorHover();
  counter();
  scrollingStyle();
  tabsInit();
  sliderInit();
});