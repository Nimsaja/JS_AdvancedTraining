const size = 50;
let interval;

// start
// create random Array
for (let i = 0; i < (size*size); i++) {
  let c;
  if (Math.random() < 0.5) {
    c = new BlackCell();
  } else {
    c = new WhiteCell();
  }
    
  arr.push(c);
}

function createNewLine() {
    let newDiv = document.createElement("div");
    newDiv.style.clear = "left";
    const currentDiv = document.querySelector("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

arr.forEach((el, i) => {
    if (i%size == 0) {
        createNewLine();
    }
    el.addToDOM(i);
});

//save neighbour cells
for (let i = size; i < arr.length - size; i++) {
  let cellTop = arr[i-size];
  let cellTopLeft = arr[i-size-1];
  let cellTopRight = arr[i-size+1];
  let cellBottom = arr[i+size];
  let cellBottomLeft = arr[i+size-1];
  let cellBottomRight = arr[i+size+1];
  let cellLeft = arr[i-1];
  let cellRight = arr[i+1];

  let cells = [cellTop, cellTopRight, cellTopLeft, cellBottom, cellBottomLeft, cellBottomRight, cellLeft, cellRight];
  arr[i].neighbours = cells;
}  

function changeFunction() {
  let newArray = [];

    for (let i = size; i < arr.length - size; i++) {
        // get DOM Element
        const currentDiv = document.querySelector("#cell"+i);

        // change color according to neighbours
        const numberOfBlackCells = arr[i].neighbours.filter(el => el instanceof BlackCell).length;

        let newCell;
        if (numberOfBlackCells > 5) {
          newCell = new BlackCell();
        } else {
          newCell = new WhiteCell();
        }
        newCell.neighbours = arr[i].neighbours;

        currentDiv.style.backgroundColor = newCell.getColorString();
            
        newArray.push(newCell);
    }

    arr = newArray;
}

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
