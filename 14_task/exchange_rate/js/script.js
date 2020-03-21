let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd');

function getCurrent(event) {
  let id = event.target.id;
  function getData() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      request.open('GET', 'js/current.json');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send();

      request.addEventListener('readystatechange', function() {
        if (request.readyState === 4) {
          if (request.status == 200) {
            resolve(request.response);
          } else {
            reject();
          }
        }
      });
    });
  }
  getData()
    .then(data => {
      let res = JSON.parse(data);
      id === 'rub'
        ? (inputUsd.value = inputRub.value / res.usd)
        : (inputRub.value = inputUsd.value * res.usd);
    })
    .catch(() => (inputUsd.value = 'Что-то пошло не так!'));
}

inputRub.addEventListener('input', getCurrent);
inputUsd.addEventListener('input', getCurrent);
