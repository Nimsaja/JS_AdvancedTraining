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

// create random Array
let arr = [];
for (let i = 0; i < 900; i++) {
    r1 = Math.floor(Math.random() * 256) - 1;
    r2 = Math.floor(Math.random() * 256) - 1;
    r3 = Math.floor(Math.random() * 256) - 1;
    c = new Cell(r1, r2, r3, 1);
    arr.push(c);
}

// arr.forEach((el) => el.toString());

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
    const currentDiv = document.querySelector("#Cell"+i);
    // currentDiv.setAttribute("style", 'background-color : rgba(200, 200, 200, 1)');
    document.body.insertBefore(newDiv, currentDiv); 
}

function createNewLine() {
    let newDiv = document.createElement("div");
    const currentDiv = document.querySelector("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

for (let i = 0; i < arr.length; i++) {
    if (i%30 == 0) {
        createNewLine();
    }
    addElement(arr[i], i);
}

// Field is created now add some magic
function changeField() {
    let newArray = [];
    newArray.push(arr[0]);

    for (let i = 1; i < arr.length - 1; i++) {
        // get DOM Element
        const currentDiv = document.querySelector("#Cell"+i);

        let cellLeft = arr[i-1];
        let cellRight = arr[i+1];
        let newColorCell =  new Cell(cellLeft.red, cellRight.green, cellLeft.blue, 1);
        let color = newColorCell.getColorString();

        currentDiv.style.backgroundColor = color;

        newArray.push(newColorCell);
    }

    newArray.push(arr[arr.length-1]);

    arr = newArray;
}
