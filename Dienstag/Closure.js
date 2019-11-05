function make(op) {
    console.log("create fct " + op);

    return function(a, b) {
        console.log(a + op + b + " = " + eval(a + op + b));
        return eval(a + op + b);
    }
}

const diff = make("-");
const add = make("+");

diff(7, 2);
diff(12, 4);

add(1, 3);
add(5, 3);

const result = add(diff(100, 50), 10);
console.log("Result " + result);

