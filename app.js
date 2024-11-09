const secondEl = document.getElementById('second');
const minuteEl = document.getElementById('minute');
const hourEl = document.getElementById('hour');

// second
const rotatePerSecond = 360/60;

function updateSecond() {
  const secondTime = new Date().getSeconds();
  let secondAngle = secondTime * rotatePerSecond;
  
  secondEl.style.rotate = secondAngle + 'deg';
  
  secondAngle += rotatePerSecond;
  if(secondAngle === 360) {
    secondAngle = 0;
  }

  setTimeout(updateSecond, 1000)
}
updateSecond();



const rotatePerSecondM = 360/60;
const rotatePerSecondMs = 360/60/60;


function updateMinute() {
  const Time = new Date().getMinutes();
  const secondTime = new Date().getSeconds();
  let Angle = (Time * rotatePerSecondM) + (secondTime * rotatePerSecondMs);
  
  minuteEl.style.rotate = Angle + 'deg';
  
  Angle += rotatePerSecondM;
  if(Angle === 360) {
    Angle = 0;
  }

  setTimeout(updateMinute, 1000)
}

updateMinute();

// hour
const rotatePerHour = 360/12;
const rotatePerMins = 360 / 60;

function updateHour() {
  const Time = new Date().getHours();
  const minuteTime = new Date().getMinutes();
  let Angle = (Time * rotatePerHour)  + (minuteTime * .5);  
  hourEl.style.rotate = Angle + 'deg';
  
  Angle += rotatePerHour;
  if(Angle === 360) {
    Angle = 0;
  }

  setTimeout(updateHour, 999)
}
updateHour();