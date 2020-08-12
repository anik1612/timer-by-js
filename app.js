const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const stopBtn = document.getElementById('stop-btn');

hour.value = 0;
min.value = 5;
sec.value = 0;

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset)
stopBtn.addEventListener('click', stop);

function start(){
    timer = setInterval(()=>{
        sec.value++;
        if(sec.value==60){
            min.value--;
            sec.value = 0;
            if(min.value==0){
                stop();
            }
        }
    },1000);
}


function stop(){
    clearInterval(timer);
}

function reset(){
    hour.value = 0;
    min.value = 5;
    sec.value = 0;
}