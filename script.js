/*let [seconds,minutes,hours]=[0,0,0];
let displayTime = document.getElementById("displayTime");
let timer=null;

function stop(){
    seconds++;
    if(seconds==60)
    {
        seconds=0;
        minutes++;

        if(minutes==60)
        {
            minutes=0;
            hours++;
        }
    }
    let h=hours < 10 ? "0" + hours :hours;
    let m=minutes < 10 ? "0" + minutes :minutes;
    let s=seconds< 10 ? "0" + seconds :seconds;

    displayTime.innerHTML= h +":"+ m +":"+ s;
    
    
}
  function start(){
    if(timer!==null){
        clearInterval(timer);
    }
   timer= setInterval(stop,1000);

  }
  function stop(){
    clearInterval(timer);

  }
  function Reset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
  }
    */
  let [seconds, minutes, hours] = [0, 0, 0];
  let displayTime = document.getElementById("displayTime");
  let timer = null;
  
  function updateDisplay() {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
  
      displayTime.innerHTML = h + ":" + m + ":" + s;
  }
  
  function incrementTime() {
      seconds++;
      if (seconds == 60) {
          seconds = 0;
          minutes++;
          if (minutes == 60) {
              minutes = 0;
              hours++;
          }
      }
      updateDisplay();
  }
  
  function start() {
      if (timer !== null) {
          clearInterval(timer);
      }
      timer = setInterval(incrementTime, 1000);
  }
  
  function stopTimer() { // Renamed from stop()
      clearInterval(timer);
  }
  
  function Reset() {
      clearInterval(timer);
      [seconds, minutes, hours] = [0, 0, 0];
      updateDisplay();
  }
  