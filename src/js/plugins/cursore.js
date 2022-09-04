function cursor() {
  const body = document.querySelector('body');
  const wrapper = document.querySelector('.wrapper');
  const cursor = document.querySelector('.cursor');
  const clientHeight = document.documentElement.clientHeight;
  const clientWidth = document.documentElement.clientWidth;
  wrapper.addEventListener('mouseover', () => {
    cursor.style.backgroundImage = 'url("../images/test-bg.png")'
  })
  wrapper.addEventListener('mouseout', () => {
    cursor.style.backgroundImage = 'none';
  })
  body.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
    cursor.style.transform = 'translateX(-49%) translateY(-50%)';
    let centerX = document.documentElement.clientWidth / 2
    let centerY = clientHeight / 2
    cursor.style.width = e.clientX < centerX ? (0 + e.clientX) * 2 + 'px' : (clientWidth - e.clientX) *
      2 + 'px';
    cursor.style.height = e.clientY < centerY ? (0 + e.clientY) * 2 + 'px' : (clientHeight - e
      .clientY) * 2 + 'px';
  })
}
export default cursor;