class Timer {
  constructor(endtime, timerId, hCss, mCss, sCss) {
    this.endtime = endtime;
    this.timerId = document.getElementById(timerId);
    this.hours = this.timerId.querySelector(hCss);
    this.minutes = this.timerId.querySelector(mCss);
    this.seconds = this.timerId.querySelector(sCss);
  }
  tick() {
    
    let t = Date.parse(this.endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    function addZero(num) {
      if (num <= 9) {
        return '0' + num;
      } else return num;
    }
    
    this.hours.textContent = addZero(hours);
    this.minutes.textContent = addZero(minutes);
    this.seconds.textContent = addZero(seconds);

    if (t <= 0) {
      clearInterval(timeInterval);
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }
}

const timer = new Timer('2020-03-18', 'timer', '.hours', '.minutes', '.seconds');

setInterval(() => {
  timer.tick();
}, 1000);
