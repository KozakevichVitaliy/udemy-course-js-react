let message = {
  loading: 'Загузка...',
  success: 'Спасибо! Скоро мы с вами свяжемся!', // obj with readystage messages
  failure: 'Что-то пошло не так!',
};

let form = document.querySelector('.main-form'),
  statusMessage = document.createElement('div'),  
  contactForm = document.querySelector('#form');
statusMessage.classList.add('status');


// send data from form
function sendData(elem) {
  elem.addEventListener('submit', function(event) {
    event.preventDefault();
    this.appendChild(statusMessage);
    inputs = this.getElementsByTagName('input');
    let formData = new FormData(this);

    // create POST request
    function postData(data) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let obj = {};
        data.forEach((value, key) => {
          obj[key] = value;
        });
        let jsonData = JSON.stringify(obj);

        request.addEventListener('readystatechange', function() {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200) {
              resolve();
            } else {
              reject();
            }
          }
        });

        request.send(jsonData);
      });
    }

    function clearInput() {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
    }
    postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInput);
  });
}

sendData(form);
sendData(contactForm);
