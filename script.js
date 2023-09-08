//JS for clock
const messagePopUp = document.getElementById("messagePopUp");
const popUpMessage = document.getElementById("popUpMessage");
let imageChanger = document.getElementById("imageChanger");
let images = [
  "./img/morning-1.svg",
  "./img/afternoon-1.svg",
  "./img/lunch_image.jpg",
  "./img/Group 5194.svg",
];
const myTimeSelectMorning = document.getElementById("myTimeSelect-wakeup");
const myTimeSelectAfternoon = document.getElementById("myTimeSelect-afternoon");
const myTimeSelectEvening = document.getElementById("myTimeSelect-evening");
const myTimeSelectNight = document.getElementById("myTimeSelect-night");
//CLOCK
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h >= 6 && h <= 10) {
    messagePopUp.innerHTML = "GRAB SOME HEALTHY BREAKFAST";
  }
  if (h >= 11 && h <= 15) {
    messagePopUp.innerHTML = "Let's Have Some Lunch!!";
  }
  if (h >= 16 && h <= 19) {
    messagePopUp.innerHTML = "STOP YAWNING,GET SOME TEA...ITS JUST EVENING! ";
  }
  if (h >= 20 && h <= 5) {
    messagePopUp.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP ! ";
  }

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var hr = h;
  var min = m;
  var sec = s;
  var amPm = session;
  document.getElementById("hr").innerText = hr;
  document.getElementById("hr").textContent = hr;
  document.getElementById("min").innerText = min;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").innerText = sec;
  document.getElementById("sec").textContent = sec;
  document.getElementById("amPm").innerText = amPm;
  document.getElementById("amPm").textContent = amPm;

  setTimeout(showTime, 1000);
}

showTime();

//changing text of the button on hover
function mouseOver() {
  document.querySelector(".submit-btn").textContent = "Party Time!";
}
function mouseOut() {
  document.querySelector(".submit-btn").textContent = " Set Alarm";
}

function changeData() {
  let date = new Date();
  let h = date.getHours();

  setInterval(() => {
    //for morning
    if (myTimeSelectMorning.value == h) {
      imageChanger.src = images[0];
      popUpMessage.innerHTML = "GOOD MORNING !! WAKE UP !!";
    }
    //for noon
    if (myTimeSelectAfternoon.value == h) {
      imageChanger.src = images[1];
      popUpMessage.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    //for evening
    if (myTimeSelectEvening.value == h) {
      imageChanger.src = images[2];
      popUpMessage.innerHTML = "GOOD EVENING !!";
    }
    //for night
    if (myTimeSelectNight.value == h) {
      imageChanger.src = images[3];
      popUpMessage.innerHTML = "GOOD NIGHT !!";
    }
  }, 1000);
}
function buttonSubmit() {
  const morningvalue = myTimeSelectMorning.options[myTimeSelectMorning.value];
  console.log(morningvalue);

  const afternoonValue =
    myTimeSelectAfternoon.options[myTimeSelectAfternoon.value];

  const eveningValue = myTimeSelectEvening.options[myTimeSelectEvening.value];

  const nightValue = myTimeSelectNight.options[myTimeSelectNight.value];

  wakeUpRemainder.innerHTML = `Wake up time :${morningvalue.text}`;
  lunchTimeRemainder.innerHTML = `Lunch Time   : ${afternoonValue.text}`;
  napTimeRemainder.innerHTML = `Nap Time :  ${eveningValue.text}`;
  nightTimeRemainder.innerHTML = `Night Time:${nightValue.text}`;
  setInterval(changeData, 1000);
}
