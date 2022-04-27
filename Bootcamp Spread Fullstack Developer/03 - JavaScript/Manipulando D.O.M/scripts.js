'use strict';

//cria variaveis e pega elementos na Dom pelo id ou tag
const button = document.getElementById('mode-selector');
const title = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

//evneto de escuta para o botão light e dark mode
button.addEventListener('click', changeMode);

//funcção que usa toggle para adicionar e remover a funçãõ  cada clique
function changeClass() {
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  button.classList.toggle('dark-mode');
  title.classList.toggle('dark-mode');
}

//função que verifica o texto e muda a cada clique
function changeText() {
  if (button.textContent === 'Dark Mode') {
    button.textContent = 'Light Mode';
    title.textContent = 'Dark Mode ON';
  } else if (button.textContent === 'Light Mode') {
    button.textContent = 'Dark Mode';
    title.textContent = 'Light Mode ON';
  }
}

function changeMode() {
  changeClass();
  changeText();
}
