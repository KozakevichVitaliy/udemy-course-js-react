const ul = document.querySelector('.menu');
const liItems = document.querySelectorAll('.menu-item');
const li = document.createElement('li');
const body = document.querySelector('body');
const text = document.createTextNode('Пятый пункт');
const divTitle = document.getElementById('title');
const columns = document.querySelectorAll('.column');
const adv = document.querySelector('.adv');
const promptAnswer = document.getElementById('prompt');

body.style.backgroundImage = "url('./img/apple_true.jpg')";
li.classList.add('menu-item');
li.appendChild(text);

ul.replaceChild(liItems[2], liItems[1]);
ul.insertBefore(liItems[1], liItems[3]);
ul.appendChild(li);

divTitle.innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple';
columns[1].removeChild(adv);

const answer = prompt('Ваше отношение к технике Аpple', '');
promptAnswer.innerText = answer;
