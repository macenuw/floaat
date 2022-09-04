function tabsInit() {
  const control = document.querySelectorAll('.do__btn'),
    tabs = document.querySelectorAll('.do__info');

  function removeActive(elem) {
    elem.classList.remove('active');
  }
  control.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.target)
      control.forEach(item => {
        removeActive(item)
      })
      tabs.forEach(tab => {
        removeActive(tab)
      })
      if (btn === e.target || btn === e.target.closest('do__btn')) {
        btn.classList.add('active');
        document.querySelector(`#${btn.getAttribute('id')}-info`).classList.add('active')
      }
    })
  })
};
export default tabsInit;