function spyImg() {
  const wrapper = document.querySelector('.wrapper');
  const img = document.querySelector('.top-section__img');
  const clientHeight = document.documentElement.clientHeight;
  const clientWidth = document.documentElement.clientWidth;
  wrapper.addEventListener('mousemove', (e) => {
    let x = e.clientX > clientWidth / 2 ? ((e.clientX - (clientWidth / 2)) / 80) - ((e.clientX - (
      clientWidth / 2)) / 80) * 2 : ((e.clientX - (clientWidth / 2)) /
      80) - ((e.clientX - (clientWidth / 2)) / 80) * 2;
    let y = e.clientY > clientHeight / 2 ? (e.clientY - (clientHeight / 2)) / 30 : (e.clientY - (
      clientHeight / 2)) / 30;
    img.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });
};
export default spyImg;