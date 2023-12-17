var btnStop = document.querySelector(".stop");
var btnStart = document.querySelector(".start");
var counter = document.querySelector(".square")

i=0;


btnStart.addEventListener("click" , function(){

    infiniti=true;

    setInterval(function(){

        if(infiniti){
            counter.textContent = i++;
        }
        btnStop.addEventListener("click", function(){
            infiniti=false;
        })
        
    } , 15   )
})


