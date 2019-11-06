var promise1 = new Promise(function(resolve, reject) {
    const r = Math.random();
    setTimeout(() => {
        if (r < 0.5) {
            resolve('Success!');
        } else {
            reject('Rejected!');
        }
    }, 1000);
  });

var promise2 = new Promise(function(resolve, reject) {
    const r = Math.random();
    setTimeout(() => {
        if (r < 0.5) {
            resolve('Success2!');
        } else {
            // reject('Rejected2!');
        }
    }, 1000);
  });
  
promise1.then(function(value) {
   console.log("Sucess...");
   console.log(value);
    // expected output: "Success!"

    return Promise.resolve(promise2);
}, function(value) {
    console.log("Rejected....");
    console.log(value);
}). then(function(value) {
    console.log("Success 2...");
    console.log(value);
});

console.log("main");