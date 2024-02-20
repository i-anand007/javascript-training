console.log('Project 5');
const table = document.querySelector('.key')
const p = document.createElement(`p`);

document.addEventListener('keydown', function (event) {
  console.log(event.key)
  table.innerHTML = `${event.key}`
})