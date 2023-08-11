const input = document.getElementById('input');
const submit = document.getElementById('submit');
const appContainer = document.getElementById('app');
const deleteButton = document.getElementById('delete');

document.addEventListener('DOMContentLoaded', () => renderComponents());
document.addEventListener('keypress', (data) => {
  if (data.key === 'Enter') {
    submit.click();
  }
});
input.addEventListener('input', () => inputListener());
submit.addEventListener('click', () => submitListener());
deleteButton.addEventListener('click', () => deleteAll());

const inputListener = () => {
  let value = input.value;
  return value;
};

const storedData = localStorage.getItem('list');
let contentArray = storedData ? JSON.parse(storedData) : [];
localStorage.setItem('list', JSON.stringify(contentArray));

const createComponent = (content) => {
  const element = document.createElement('div');
  element.className =
    'w-full bg-[#263238] py-4 px-4 rounded flex justify-between';
  element.textContent = content;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'ml-2';
  deleteButton.addEventListener('click', () => deleteComponent(element));

  element.appendChild(deleteButton);

  return element;
};

const renderComponents = () => {
  appContainer.innerHTML = '';

  contentArray.forEach((item) => {
    const component = createComponent(item);
    appContainer.appendChild(component);
  });
};

const submitListener = () => {
  const newValue = inputListener();

  if (!newValue) {
    console.error('Error: Input value is empty.');
  } else if (contentArray.includes(newValue)) {
    console.error(
      'Error: Value already exists in the array or the array is empty.'
    );
  } else {
    contentArray.push(newValue);
    localStorage.setItem('list', JSON.stringify(contentArray));
    renderComponents();
    input.value = '';
  }
};

const deleteComponent = (element) => {
  const index = Array.from(appContainer.children).indexOf(element);
  if (index !== -1) {
    contentArray.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(contentArray));
    renderComponents();
  }
};

const deleteAll = () => {
  contentArray = [];
  appContainer.innerHTML = '';
  localStorage.clear();
};
