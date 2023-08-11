const input = document.getElementById('input');
const generate = document.getElementById('generate');
const content = document.getElementById('content');

generate.addEventListener('click', () => fetchData());
const fetchData = () => {
  return fetch(`https://hipsum.co/api/?type=hipster-centric&sentences=${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      content.innerText = `${data}`;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
};
