let a, date ,time; 
const display = { weekday:'long' , year: "numeric", month: "long", day: "numeric"}; 
setInterval(()=>{
a = new Date();
date = a.toLocaleDateString(undefined, display);
t = a.getHours() + ':' + a.getMinutes() +':' + a.getSeconds() ;
document.getElementById("time").innerHTML = date + "<br>  Time:   " + t;
},1000);
