'use strict';

const CountdownTimer = function (selector, date) {
    this.targetDate = new Date(date);
    this.selector = selector;
    this.interval = setInterval(()=> {
        const mainBox = document.querySelector(this.selector);
        const spanArray = mainBox.querySelectorAll('.value');
        
        const currentTime = new Date().getTime();
        const eventTime = this.targetDate.getTime();
        const time = eventTime - currentTime;
        
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  
  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  spanArray[0].textContent = days;
  spanArray[1].textContent = hours;
  spanArray[2].textContent = mins;
  spanArray[3].textContent = secs;
    }, 1000);
};  


const firstTimer = new CountdownTimer('#timer-1', 'May 11 2020 19:20');
