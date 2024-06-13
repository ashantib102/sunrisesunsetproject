/*let request = new XMLHttpRequest();
// Coordinates for New York
const latitude = 40.71427
const longitude = -74.00597
let url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`
request.open('GET', url, true);
request.onload = function() {
  let data = JSON.parse(this.response);
console.log(data);
  let sunrise = document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');
  
  if (request.status >= 200 && request.status < 400) {
      sunrise.textContent =convertToEST(data.results.sunrise);
      sunset.textContent = convertToEST(data.results.sunset);

  }
};
request.send();
//Used to extract the hour from our time string by using the substr() 
//function which will return a portion of the string.
function convertToEST(utc){
  let utcHours= utc.substr(0, utc.indexOf(":"));
  let utcMinSec= utc.substr(utc.indexOf(":")+1);

//We had to use the parseInt() function here to convert the string into a number
//before we can substract it. The parseInt() function takes two parameters. One is the string it is converting.
  let est= parseInt(utc, 10) -5;
  est+= ":"+utcMinSec;
  
  return est; 
}
//Now that we have our function, we will call it in our code. We can pass 
//in our sunrise/sunset strings and it will return the  converted EST time string. 

//declare variables we'll need
const alarmButton = document.querySelector(".btn-alarm");
const snoozeButton = document.querySelector(".btn-snooze");
const stopButton = document.querySelector(".btn-stopalarm");
const time = document.querySelector(".alarm-time");
const options = document.querySelector(".options");
const alarmSound = new Audio();

/* 
* I cannot guarantee this url
* will not change and break 
* the sound functionality. 
*/

const latitude = 40.71427
const longitude = -74.00597
const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.querySelector('#sunrise').innerHTML = data.results.sunrise
    document.querySelector('#sunset').innerHTML = data.results.sunset
  })
  .catch(error => console.error('Error:', error))

  alarmSound.src = "http://soundbible.com/mp3/Rooster-SoundBible.com-1114473528.mp3";
let alarmTimer;

/* initially hides snooze and stop alarm options until they're useful
options.style.display = "none";

function setAlarm() {
  let ms =
    new Date().setHours(0, 0, 0, 0) +
    time.valueAsNumber;
  if (isNaN(ms)) {
    alert("You've got to give me something to work with here, friend.");
    return;
  }
  let alarm = new Date(ms);
  var dt = new Date().getTime();
  let differenceInMs = alarm.getTime() - dt;

  if (differenceInMs < 0) {
    alert(
      "It looks like that's a date from the past! Are you a time traveler?!"
    );
    return;
  }
  alarmTimer = setTimeout(initAlarm, differenceInMs);
  alarmButton.innerText = "Cancel Alarm";
  alarmButton.setAttribute("onclick", "cancelAlarm(this);");
  options.style.display = "";
}

function cancelAlarm() {
  clearTimeout(alarmTimer);
  alarmButton.innerText = "Set Alarm";
  alarmButton.setAttribute("onclick", "setAlarm(this);");
  options.style.display = "none";
}

function initAlarm() {
  alarmSound.play();
  alarmSound.loop = true;
  options.style.display = "";
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  options.style.display = "none";
}

function snooze() {
  stopAlarm();
  setTimeout(initAlarm, 5000);
}

alarmButton.addEventListener("click", setAlarm, false);
snoozeButton.addEventListener("click", snooze, false);
stopButton.addEventListener("click", stopAlarm, false);






*/
