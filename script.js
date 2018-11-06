let now = new Date();
let expire = new Date(Date.UTC(2020,2,19,8,0,0));
let remaining = Math.floor((expire - now) / 1000);
let daysElement = document.getElementById("dispDays");
let hoursElement = document.getElementById("dispHours");
let minutesElement = document.getElementById("dispMinutes");
let secondsElement = document.getElementById("dispSeconds");

function timerUpdate(duration) {
  let days = Math.floor(duration / 60 / 60 / 24);
  let hours = Math.floor(duration / 60 / 60 % 24);
  let minutes = Math.floor(duration / 60 % 60);
  let seconds = Math.floor(duration % 60);
  let dispDays;
  let dispHours;
  let dispMinutes;
  let dispSeconds;
  if(days < 10) { dispDays = "0" + days; } else { dispDays = days; };
  if(hours < 10) { dispHours = "0" + hours; } else { dispHours = hours; };
  if(minutes < 10) { dispMinutes = "0" + minutes; } else { dispMinutes = minutes; };
  if(seconds < 10) { dispSeconds = "0" + seconds; } else { dispSeconds = seconds; };
  if (parseInt(dispSeconds) % 5 == 0) {
    document.getElementById("body").classList.toggle("switch");
  }
  daysElement.innerHTML = dispDays;
  hoursElement.innerHTML = dispHours;
  minutesElement.innerHTML = dispMinutes;
  secondsElement.innerHTML = dispSeconds;
  remaining--;
}
setTimeout(function(){document.getElementById("body").classList.toggle("switch");}, 1000);
setInterval(function(){
  timerUpdate(remaining);
  // console.log(remaining);
}, 1000);