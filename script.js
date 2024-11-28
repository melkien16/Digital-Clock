const hourE1 = document.querySelector(".houres");
const minutesE1 = document.querySelector(".minitus");
const secondsE1 = document.querySelector(".seconds");

function updateClock() {
  const currentDate = new Date();
  // setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minitus = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const minitusDeg = (minitus / 60) * 360;
  minutesE1.style.transform = `rotate(${minitusDeg}deg)`;

  const hourDeg = (hour / 12) * 360;
  hourE1.style.transform = `rotate(${hourDeg}deg)`;

  const secondsDeg = (seconds / 60) * 360;
  secondsE1.style.transform = `rotate(${secondsDeg}deg)`;
}

// updateClock();

setInterval(updateClock, 1000);
