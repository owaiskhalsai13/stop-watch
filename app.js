const minutecontainer = document.querySelector(".minute")
const secondcontainer = document.querySelector(".second")
const hourcontainer = document.querySelector(".hour")
let second = 0
let minute = 0
let hour = 0
function start() {
    console.log("start watch");
    setInterval(function()  {
        if (second === 60){
            second = 0;
            minute += 1;
            minutecontainer.innerHTML = minute;

            return
        }
        second += 1;
        if (second < 10){
            secondcontainer.innerHTML = "0" + second
            return
        
        }
        secondcontainer.innerHTML = second;
        
    }, 100);
    

}