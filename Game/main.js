const size = 50;
let interval;
let changeFunction = randomFromTop;

// start
initField(size);

// button functions
function run() {
    let timesRun = 0;
    interval = setInterval(function(){
        changeFunction();
    }, 1000); 
};

function stop() {
    clearInterval(interval);
}

function step() {
    changeFunction();
}

function changeAnimation() {
    const option = document.getElementById("select").value;

    stop();
    
    switch(option) {
        case "randomFromTop":
          changeFunction = randomFromTop;
          break;
        case "linearFromTop":
          changeFunction = linearFromTop;
          break;
        case "increaseDarkCells":
          changeFunction = increaseDarkCells;
          break;
        default:
          changeFunction = randomFromTop;
    }
}

