var str = "The best things in life are free";
var patt = new RegExp("i", "g");
var res = str.match(patt);

console.log(res.length);

console.log(str.replace(/b/, "B"));