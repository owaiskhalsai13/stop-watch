const minutecontainer = document.querySelector(".minute")
const secondcontainer = document.querySelector(".second")
const hourcontainer = document.querySelector(".hour")
let second = 0
let minute = 0
let hour = 0
function startWatch()  {
    console.log("start watch");
    stopwatch = setInterval(function() {
        second +=1;
        if(second<10){
            secondcontainer.innerHTML="0" + second
        }
        else{
            secondcontainer.innerHTML=second
        }
        if(second == 60){
            second = 0;
            minute += 1;
            
            if(minute<10){
                minutecontainer.innerHTML="0" + minute
            }
            else{
                minutecontainer.innerHTML=minute
            }
        }
        if(minute == 60){
            hour += 1;
            minute = 0;
            if(hour<10){
                hourcontainer.innerHTML="0" + hour
            }
            else{
                hourcontainer.innerHTML=hour
            }
        }
    },100)
}
function stop(){
    clearInterval(stopwatch)
}
function refresh(){
    clearInterval(stopwatch)
    second=0;
    minute=0;
    hour=0;
    secondcontainer.innerHTML= "00";
    minutecontainer.innerHTML= "00";
    hourcontainer.innerHTML= "00";
}