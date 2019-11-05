class Cell {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    getColorString() {
        return 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ',1)';
    }

    addToDOM(index) {
        // create a new div element 
        var newDiv = document.createElement("div");
        newDiv.id = "cell"+index;
        newDiv.style.backgroundColor = this.getColorString();
        newDiv.className = "cell";
        // and give it some content 
        var newContent = document.createTextNode(""); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
  
        // add the newly created element and its content into the DOM 
        const currentDiv = document.querySelector("#cell"+index);
        document.body.insertBefore(newDiv, currentDiv); 
    }
}

class BlackCell extends Cell {
    constructor() {
        super(0, 0, 0);
    }
}

class WhiteCell extends Cell {
    constructor() {
        super(255, 255, 255);
    }
}