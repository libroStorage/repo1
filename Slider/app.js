const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

let click = 1;

next.addEventListener('click', () => {
  if (click > 3) {
    click = 1;
  } else {
    click += 1;
  }
  dataSwitch();
});

previous.addEventListener('click', () => {
  if (click < 2) {
    click = 4;
  } else {
    click -= 1;
  }
  dataSwitch();
});

function dataSwitch() {
  switch (click) {
    case 1:
      one.classList.remove('hidden');
      two.classList.add('hidden');
      three.classList.add('hidden');
      four.classList.add('hidden');

      break;
    case 2:
      one.classList.add('hidden');
      two.classList.remove('hidden');
      three.classList.add('hidden');
      four.classList.add('hidden');

      break;
    case 3:
      one.classList.add('hidden');
      two.classList.add('hidden');
      three.classList.remove('hidden');
      four.classList.add('hidden');
      break;
    case 4:
      one.classList.add('hidden');
      two.classList.add('hidden');
      three.classList.add('hidden');
      four.classList.remove('hidden');
      break;
  }
}
