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
}

// create random Array
let arr = [];
for (let i = 0; i < 16; i++) {
    r1 = Math.floor(Math.random() * 256) - 1;
    r2 = Math.floor(Math.random() * 256) - 1;
    r3 = Math.floor(Math.random() * 256) - 1;
    c = new Cell(r1, r2, r3, 1);
    arr.push(c);
}

arr.forEach((el) => el.toString());

