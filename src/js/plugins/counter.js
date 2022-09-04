function counter() {
  const counter = document.querySelector('.top-section__counter');
  for (let i = 1000000000; i <= 1000348541; i++) {
    let intArr = (i + '').split('');
    let validStr = '';
    for (let y = 0; y < intArr.length; y++) {
      validStr += intArr[y]
      if (y % 3 === 0) {
        validStr += ' ';
      }
    }
    const myInterval = setTimeout(() => {
      counter.textContent = validStr
    }, 1000);
    if (i === 1000348540) {
      clearInterval(myInterval)
    }
  }
};
export default counter;