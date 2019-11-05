const size = 50;
let interval;

// start
initField(size);

// button functions
function run() {
    let timesRun = 0;
    interval = setInterval(function(){
        changeField();
    }, 1000); 
};

function stop() {
    clearInterval(interval);
}

function step() {
    changeField();
}

