const button = document.getElementById('button');
const current = document.getElementById('current');
const previous = document.getElementById('previous');
const previousText = document.getElementById('previousText');
const currentText = document.getElementById('currentText');
const colorsArray = [];

const updateColors = () => {
  const color = generateColor();
  colorsArray.push(color);
  current.style.backgroundColor = color;
  previous.style.backgroundColor =
    colorsArray[colorsArray.length - 2] || 'transparent';
  currentText.innerText = color;
  previousText.innerText = colorsArray[colorsArray.length - 2] || ' ';
};

button.addEventListener('click', updateColors);

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    updateColors();
  }
});

const generateColor = () => {
  const getRandomHex = () => Math.round(Math.random() * 255).toString(16);
  return '#' + getRandomHex() + getRandomHex() + getRandomHex();
};
