const elements = {
  picture: document.getElementById('picture'),
  content: document.getElementById('content'),
  name: document.getElementById('name'),
  email: document.getElementById('mail'),
  age: document.getElementById('age'),
  adress: document.getElementById('adress'),
  phone: document.getElementById('phone'),
  country: document.getElementById('country'),
  refresh: document.getElementById('refresh'),
};

elements.refresh.addEventListener('click', () => {
  for (const key in elements) {
    if (key !== 'picture' && key !== 'content' && key !== 'refresh') {
      elements[key].innerHTML = '';
    }
  }
  elements.content.innerText = 'XXXX-XXXX-XXXX-XXXX';
  fetchAndUseRandomUser();
});

fetchAndUseRandomUser();

async function fetchAndUseRandomUser() {
  const randomUser = await fetchRandomUser();

  const data = {
    picture: randomUser.picture.large,
    name: `${randomUser.name.title}. ${randomUser.name.first} ${randomUser.name.last}`,
    email: randomUser.email,
    age: randomUser.dob.age,
    adress: `${randomUser.location.street.name}/${randomUser.location.street.number}`,
    phone: randomUser.phone,
    country: randomUser.location.country,
  };

  for (const key in data) {
    if (key === 'picture') {
      elements.picture.innerHTML = `<img src="${data[key]}" alt="" width="144" height="144">`;
    } else {
      const iconClass = {
        email: 'fa-regular fa-envelope',
        age: 'fa-solid fa-calendar-days',
        adress: 'fa-solid fa-map-location-dot',
        phone: 'fa-solid fa-phone',
        country: 'fa-solid fa-earth-americas',
      }[key];
      const element = document.createElement('span');
      element.innerText = key.charAt(0).toUpperCase() + key.slice(1);
      if (iconClass) {
        const iconElement = document.createElement('i');
        iconElement.className = iconClass;
        elements[key].append(iconElement, element);
      } else {
        elements[key].appendChild(element);
      }
      elements[key].addEventListener(
        'click',
        () => (elements.content.innerText = data[key])
      );
    }
  }
}

async function fetchRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data.results[0];
}
