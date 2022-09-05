function cursorHover() {
  const cursor = document.querySelector('.cursor__center'),
    logo = document.querySelectorAll('.logo'),
    headerBtn = document.querySelectorAll('.header__btn'),
    prev = document.querySelector('.slider__prev'),
    next = document.querySelector('.slider__next');
  logo.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.style.backgroundColor = 'white';
      cursor.style.width = '20px';
      cursor.style.height = '20px';
    })
    item.addEventListener('mouseout', () => {
      cursor.style.backgroundColor = 'red';
      cursor.style.width = '10px';
      cursor.style.height = '10px';
    })
  });

  headerBtn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      if (!btn.classList.contains('header__btn--menu')) {
        cursor.textContent = 'contact us';
        cursor.style.minWidth = '80px';
        cursor.style.minHeight = '80px'
      } else if (btn.classList.contains('header__btn--menu')) {
        cursor.textContent = 'open';
        cursor.style.minWidth = '80px';
        cursor.style.minHeight = '80px'
      }
    });
    btn.addEventListener('mouseout', () => {
      cursor.textContent = '';
      cursor.style.minWidth = '10px';
      cursor.style.minHeight = '10px';
    })
  })
  prev.addEventListener('mouseover', () => {
    cursor.textContent = 'prev';
    cursor.style.minWidth = '80px';
    cursor.style.minHeight = '80px'
  });
  prev.addEventListener('mouseout', () => {
    cursor.textContent = '';
    cursor.style.minWidth = '10px';
    cursor.style.minHeight = '10px';
  })
  next.addEventListener('mouseover', () => {
    cursor.textContent = 'next';
    cursor.style.minWidth = '80px';
    cursor.style.minHeight = '80px'
  });
  next.addEventListener('mouseout', () => {
    cursor.textContent = '';
    cursor.style.minWidth = '10px';
    cursor.style.minHeight = '10px';
  })
};
export default cursorHover;