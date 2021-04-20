console.log('koden er inde');
const burger = document.getElementById('burger');
const url = document.getElementById('urlNav');
const icon = document.getElementById('icon');

burger.addEventListener('click', () => {
  url.classList.toggle('vis');
  icon.classList.toggle("fa-times");
});
