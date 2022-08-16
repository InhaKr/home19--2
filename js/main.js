  // "use strict";
  let block = document.querySelector('.block');
  let a = document.querySelector('.miniblock');
  let c = document.querySelector('#event-details');


  let step = 15;
  let jump = 50;
  let sit = false;

  document.addEventListener('keydown', (event) => {
    console.log(event.keyCode, event.type)

    switch (event.keyCode) {
      case 37:
        a.style.left = `${a.offsetLeft - step}px`;
        break;

      case 38:
        a.style.top = `${a.offsetTop - step}px`;
        break;
      case 39:
        a.style.left = `${a.offsetLeft + step}px`;
        break;
      case 40:
        a.style.top = `${a.offsetTop + step}px`;
        break;
      case 32:
        let originalTop = a.offsetTop;
        a.style.top = `${originalTop - jump}px`;

        setTimeout(() => {
          a.style.top = `${originalTop}px`;
        }, 500)
        break;

      case 17:
        let originalWidth = 100;
        let originalHeight = 100;

        a.style.width = `${originalWidth+10}px`;
        a.style.height = `${originalHeight-40}px`;

        setTimeout(() => {
          a.style.width = `${originalWidth}px`;
          a.style.height = `${originalHeight}px`;
        }, 200)
    }
  })