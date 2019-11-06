let arr = [];

function randomColor() {
    return Math.floor(Math.random() * 256) - 1;
}

function initField(size) {
    // create random Array
    for (let i = 0; i < (size*size); i++) {
        c = new Cell(randomColor(), randomColor(), randomColor());
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
}

// Field is created, now add some magic
function randomFromTop() {
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

function linearFromTop() {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        // get DOM Element
        const currentDiv = document.querySelector("#cell"+i);

        if (i > size) {
            let cellTop = arr[i-size];
            let color = cellTop.getColorString();

            currentDiv.style.backgroundColor = color;
            
            newArray.push(cellTop);
        } else {
            newArray.push(arr[i]);
        }
    }

    arr = newArray;
}

function star() {
    let nbIndices = [-size - 1, -size + 1, size - 1, size + 1];

    const r = Math.floor(Math.random() * (arr.length+1)) - 1;

    // color the neighbour cells like a star
    const color = arr[r].getColorString();

    nbIndices
        .map(nb => r + nb)
        .forEach(el => document.querySelector("#cell"+el).style.backgroundColor = color);
}
