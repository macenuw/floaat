function preloader() {
  const images = document.querySelectorAll('.preloader__img-inner'),
    percent = document.querySelector('.preloader__loading'),
    timing = 4000,
    maxInt = 100,
    step = 1;
  let counterImage = 1;

  function hideAllImage() {
    images.forEach(image => {
      image.style.display = 'none'
    })
  }

  function showImage(r) {
    hideAllImage();
    console.log('im change image')
    images[r].style.display = 'block';
  }
  let timingChangeImage = timing / images.length
  let n = 0;
  let t = Math.round(timing / (maxInt / step))
  let interval = setInterval(() => {
    n += step;
    if (n === maxInt) {
      clearInterval(interval);
      document.querySelector('.preloader').remove();
    }
    percent.textContent = n
  }, t)
  let imageInterval = setInterval(() => {
    showImage(counterImage);
    console.log('images must change')
    counterImage++;
    if (counterImage === images.length) {
      clearInterval(imageInterval);
    }
  }, timingChangeImage)
};
export default preloader;