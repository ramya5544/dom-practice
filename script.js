
const timer=document.getElementById("timer");
function setTime(){
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    timer.innerText=`${hour} : ${min} :${sec}`;
}setInterval(setTime,1000);


