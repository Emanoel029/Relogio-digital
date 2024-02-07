const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.getElementById("seconds");

function newTime() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hoursEl.textContent = fixTime(hours);
  minutesEl.textContent = fixTime(minutes);
  secondsEl.textContent = fixTime(seconds);
}

//Função para colocar os zeros na esquerda
function fixTime(time) {
  return time < 10 ? "0" + time : time;
}

//Temporizador 'setInterval' a cada 1s
newTime();
setInterval(newTime, 1000);
