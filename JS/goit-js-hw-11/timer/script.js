class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`)
    };
  }

  timerId = setInterval(() => {
    const currentTime = Date.now();
    this.updateClockFace(this.targetDate - currentTime);
  }, 1000);

  updateClockFace(time) {
    let days = 0,
      hours = 0,
      mins = 0,
      secs = 0;

    if (time > 0) {
      /*
       * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
       * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
       */
      days = Math.floor(time / (1000 * 60 * 60 * 24));
      /*
       * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
       * остатка % и делим его на количество миллисекунд в одном часе
       * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
       */
      hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      /*
       * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
       * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
       */
      mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

      /*
       * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
       * миллисекунд в одной секунде (1000)
       */
      secs = Math.floor((time % (1000 * 60)) / 1000);
    } else {
      clearInterval(this.timerId);
    }

    this.refs.days.textContent = this.pad(days);
    this.refs.hours.textContent = this.pad(hours);
    this.refs.mins.textContent = this.pad(mins);
    this.refs.secs.textContent = this.pad(secs);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2019")
});
