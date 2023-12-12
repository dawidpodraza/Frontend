
function odliczanie(){

    let dzisiaj = new Date();

    let godzina = dzisiaj.getHours();
    if(godzina <10){godzina = "0"+godzina;}

    let minuta = dzisiaj.getMinutes();
    if(minuta <10){minuta = "0"+minuta;}
    
    let sekunda = dzisiaj.getSeconds();
    if(sekunda <10){sekunda = "0"+sekunda;}

    document.getElementById("clock").innerHTML = godzina+":"+minuta+":"+sekunda;

    setTimeout("odliczanie();",1000);
}

function game(){
    for(let i=1;i<101;i++){

        if(i%15==0){
            console.log("FizzBuzz");
        }
        else if(i%3==0){
            console.log("Fizz");
            
        }else if(i%5==0){
            console.log("Buzz");
            
            
        }else{
            console.log(i);   
        }
    }
}