class Cell {
    constructor(red, green, blue, alfa) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alfa = alfa;
    }

    toString() {
        console.log("My Color is " + this.red + "," + this.green + "," + this.blue + "," + this.alfa);
    }

    setColor() {
        let text = 'background-color : rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alfa + ')';
        document.querySelector("#"+this.color).setAttribute("style", text);
    }

    getColorString() {
        return 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alfa + ')';
    }
}

const size = 30;

// create random Array
let arr = [];
for (let i = 0; i < (size*size); i++) {
    r1 = Math.floor(Math.random() * 256) - 1;
    r2 = Math.floor(Math.random() * 256) - 1;
    r3 = Math.floor(Math.random() * 256) - 1;
    c = new Cell(r1, r2, r3, 1);
    arr.push(c);
}

function addElement (c, i) { 
    // create a new div element 
    var newDiv = document.createElement("span");
    newDiv.id = "Cell"+i;
    newDiv.style.backgroundColor = c.getColorString();
    // and give it some content 
    var newContent = document.createTextNode("[]"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    const currentDiv = document.querySelector("#cell"+i);
    // currentDiv.setAttribute("style", 'background-color : rgba(200, 200, 200, 1)');
    document.body.insertBefore(newDiv, currentDiv); 
}

function createNewLine() {
    let newDiv = document.createElement("div");
    const currentDiv = document.querySelector("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

arr.forEach((el, i) => {
    if (i%size == 0) {
        createNewLine();
    }
    addElement(el, i);
});

// Field is created, now add some magic
function changeField() {
    let newArray = [];

    r = Math.floor(Math.random() * 3) - 1; 

    for (let i = 0; i < arr.length; i++) {
        // get DOM Element
        const currentDiv = document.querySelector("#cell"+i);

        if (i > size) {
            let cellTop = arr[i-size-r];
            let color = cellTop.getColorString();

            currentDiv.style.backgroundColor = color;
            
            newArray.push(cellTop);
        } else {
            newArray.push(arr[i]);
        }
    }

    arr = newArray;
}

let interval;
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

