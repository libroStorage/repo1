const nav = document.getElementById('nav');
const sidebar = document.getElementById('sidebar');
const x = document.getElementById('x');
const body = document.body;

window.addEventListener('scroll', () => {  
  twClass = ['bg-black/70', 'fixed'];
  if (scrollY > 150) {
    nav.classList.add(...twClass);
    
  } else {
    nav.classList.remove(...twClass);
    
  }
});

x.addEventListener('click', (event) => {
  event.stopPropagation();
  sidebar.classList.remove('-translate-x-full');
});

body.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
});

