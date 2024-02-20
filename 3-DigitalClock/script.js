const clock = document.querySelector('#clock');

setInterval(function () {
  time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
}, 1000);
