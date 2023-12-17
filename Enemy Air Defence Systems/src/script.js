function clock(){
    let date = new Date();

    let hours = date.getHours();
    if(hours<10){hours="0"+hours}
    let minutes = date.getMinutes();
    if(minutes<10){minutes="0"+minutes}
    let seconds = date.getSeconds();
    if(seconds<10){seconds="0"+seconds}

    document.getElementById("clock").innerHTML = "Czas: "+hours+":"+minutes+":"+seconds;

   setTimeout("clock();",1000);
}


