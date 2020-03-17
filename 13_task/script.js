window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  const hideTabContent = a => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  const showTabContent = b => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', event => {
    let target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // timer

  let deadline = '2020-03-18';

  const getTimeRemaining = endtime => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));
    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timerInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      const addZero = num => {
        if (+num < 10) return '0' + num;
        else return num;
      };
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timerInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  };

  setClock('timer', deadline);

  // modal

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descriptionBtns = document.querySelectorAll('.description-btn');

  more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  descriptionBtns.forEach(element => {
    element.addEventListener('click', function() {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  });

  // form

  let message = {
    loading: 'Загузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!', // obj with readystage messages
    failure: 'Что-то пошло не так!',
  };

  let form = document.querySelector('.main-form'),
    inputs = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    let formData = new FormData(form);

    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    let json = JSON.stringify(obj);

    // request.send(formData);
    request.send(json);

    request.addEventListener('readystatechange', function(params) {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  });
});