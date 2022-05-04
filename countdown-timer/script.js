const daysEl = document.getElementById("days"); // days
const hoursEl = document.getElementById("hours"); // hours
const minutesEl = document.getElementById("mins"); // minutes
const secondsEl = document.getElementById("seconds"); // seconds

const newYears = "20 May 2022";

function countDown() {
  const currentDate = new Date();
  const newYearsDate = new Date(newYears);

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / (3600 * 24));

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}
//initial call
countDown();
setInterval(countDown, 1000);
