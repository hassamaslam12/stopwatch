var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var interval , m = 0 , s = 0 , ms = 0 ;


var startDisplay = document.getElementById("start");
var stopDisplay = document.getElementById("stop");
var restartDisplay = document.getElementById("restart");




function start(){
    startDisplay.style.display = "none";
    stopDisplay.style.display = "inline-block";
    restartDisplay.style.display = "inline-block";


    interval = setInterval(function()
    {
        ms++;
        msec.innerHTML = ms;
        if( ms === 100 ){
            s++;
            sec.innerHTML = s + ".";
            ms=0
        }
        if( s === 60 ){
            m++;
            min.innerHTML = m + ".";
            s = 0 ;
        }
    },10);
    
}

function stop(){
    clearInterval(interval);     //stop the timer

    stopDisplay.style.display = "none";
    startDisplay.style.display = "inline-block" ;
    startDisplay.className = " two-buttons";
}

function restart(){
    ms = 0,s = 0,m = 0;//reset all values to zero
    sec.innerHTML = s + ".";
    min.innerHTML = m + ".";
    msec.innerHTML = ms + ".";
    stop();

    stopDisplay.style.display = "none" ;
    restartDisplay.style.display ="none";
    startDisplay.style.display = "inline-block";
}