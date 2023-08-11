let counter = 0;
const number = document.getElementById('number');

function updateCounter(value) {
  counter += value;
  number.innerText = counter;
}

document
  .getElementById('decrease')
  .addEventListener('click', () => updateCounter(-1));
document
  .getElementById('reset')
  .addEventListener('click', () => updateCounter(-counter));
document
  .getElementById('increase')
  .addEventListener('click', () => updateCounter(1));
