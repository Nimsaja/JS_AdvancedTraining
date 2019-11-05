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

class MyCell extends Cell {
    hasNoNeighbour = true;

    constructor(size, red, green, blue, alfa) {
        super(red, green, blue, alfa);
        this.size = size;
    }

    toString() {
        super.toString();
        console.log("and my Size is " + this.size);
    }

    calcArea() {
        return this.size * this.size;
    }
}

const cell = new Cell(200, 200, 50, 1);
const myCell = new MyCell(4.5, 100, 100, 20, 1);

cell.toString();
myCell.toString();
console.log("Area: " + myCell.calcArea());

console.log("Test " + myCell.hasNoNeighbour);