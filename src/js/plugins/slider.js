function sliderInit() {
  const slider = document.querySelector('.slider'),
    prev = slider.querySelector('.slider__prev'),
    next = slider.querySelector('.slider__next'),
    inner = slider.querySelector('.slider__inner'),
    items = [...slider.querySelectorAll('.slider__item')];
  prev.addEventListener('click', () => {
    items.unshift(items[items.length - 1]);
    items.pop(items[items.length - 1]);
    inner.textContent = ''
    items.forEach(item => {
      inner.append(item);
    })
  })
  next.addEventListener('click', () => {
    let timingItem = items[0]
    items.shift();
    items.push(timingItem);
    inner.textContent = ''
    items.forEach(item => {
      inner.append(item);
    })
  })
}

module.exports = sliderInit;