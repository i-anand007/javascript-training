const body = document.querySelector('body');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let colorInterval;

const randomColorGenretor = function () {
  hex_codes = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex_codes[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startChangingColor = function () {
  colorInterval = setInterval(changeBgColor, 1000);
  function changeBgColor() {
    body.style.backgroundColor = randomColorGenretor();
  }
};

function stopChangingColor() {
  clearInterval(colorInterval);
  color = null
}

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);

