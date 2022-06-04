const msecond = document.querySelector(".s")
const second = document.querySelector(".m")
const startTimer = document.querySelector(".start")
const clearTimer = document.querySelector(".clear")
const resetTimer = document.querySelector(".reset")
const line = document.querySelector(".line")
const line2 = document.querySelector(".line2")

let s = 01
let ms= 00
let rota = 0;
let rota2 = 0;
let timeStatus = false;
function startTimerr (){
    ms++    
    if(ms <= 9){
        msecond.innerHTML="0" + ms  
    }else if (ms >=9){
        msecond.innerHTML= ms
    }
    if(ms>=100){
        ms = 0;
        second.innerHTML = `0${s++}`;
    }
    if(s <= 9){
        second.innerHTML="0" + s  
    }else if (s >=9){
        second.innerHTML= s
    }    
}

function rotate(){
    rota++
    line.style=`transform:rotate(${rota}deg)`
}

function rotate2(){
    rota2++
    line2.style=`transform:rotate(${rota2*3.6}deg)`
}

var startTime; 
var startTime2;
var startTime3;
var rotate;

startTimer.addEventListener("click", ()=>{
    if(timeStatus==false){
        startTime = setInterval(startTimerr,10)
        startTime2 = setInterval(rotate,1000)    
        startTime3 = setInterval(rotate2,10)
        timeStatus = true;
    }    else return
})
clearTimer.addEventListener("click", ()=>{
    if(timeStatus == true){
        clearInterval(startTime)
        clearInterval(startTime2)
        clearInterval(startTime3)
        
        timeStatus = false;
    }   else return
})

resetTimer.addEventListener("click",()=>{
   
        if(timeStatus == false){
            ms = 0;
            s = 0 ;
            rota = 0;
            rota2 = 0;
            second.innerHTML="00"
            msecond.innerHTML="00"
            line2.style=`transform:rotate(${0}deg)`
            line.style=`transform:rotate(${0}deg)`
        }else return;
    
})



