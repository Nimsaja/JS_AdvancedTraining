let arr = [];

for (let i=0; i<20; i++) {
    arr[i] = i;
}

console.log(arr);

// + 1
let newArr = arr.map(el => el + 1);
console.log(newArr);

// filter even
newArr = arr
    .map(el => el + 1)
    .filter(el => el%2 === 0);
console.log(newArr);

// sum
newArr = arr
    .map(el => el + 1)
    .filter(el => el%2 === 0)
    .reduce((el1, el2) => el1+el2);
console.log(newArr);

