function getText(...s) {
    if (!s[0]) {
        throw new Error("One argument is required!");
    }

    let text = "";
    for (let i = 0; i < s.length; i++) {
        text = text.concat(s[i]);
    }

    return text;
}

// main
const arr = ["Hello ", ", ", "how ", "are ", "you ", "?"];

let text = getText(...arr);
console.log(text);

// check error handling
console.log(getText());