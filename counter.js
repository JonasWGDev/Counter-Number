
const span = document.getElementById('number');
const btnCres = document.getElementById('cres');
const btnReset = document.getElementById('reset');
const btnDecres = document.getElementById('decres');

let number = 0;

btnCres.addEventListener('click', () => {
  number++;
  span.innerHTML = number;
});

btnDecres.addEventListener('click', () => {
  number--;
  span.innerHTML = number;
});

btnReset.addEventListener('click', () => {
  number = 0;
  span.innerHTML = number;
});