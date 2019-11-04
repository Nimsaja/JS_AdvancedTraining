class Cell {
    constructor (color) {
        this.color = color;
    }

    setRGBAValues(red, green, blue, alfa) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alfa = alfa;
    }

    toString() {
        console.log("My Color is " + this.color);
    }

    toStringRGBA() {
        console.log("My Color is " + this.red + "," + this.green + "," + this.blue + "," + this.alfa);
    }

    setColorWithPoints() {
        document.querySelector("#"+this.color).style.backgroundColor = this.color;
    }

    setColorWithRGBA() {
        let text = 'background-color : rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alfa + ')';
        document.querySelector("#"+this.color).setAttribute("style", text);
    }
}

let b = new Cell("blue");
let r = new Cell("red");
let g = new Cell("green");
g.setRGBAValues(20, 200, 10, 0.5);

b.toString();
r.toString();
g.toStringRGBA();

b.setColorWithPoints();
r.setColorWithPoints();
g.setColorWithRGBA();
