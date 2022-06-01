let a;
let date;
let time;

setInterval(()=>{
    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours()+ ":"+ a.getMinutes()+":"+a.getSeconds();
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;
},1000)