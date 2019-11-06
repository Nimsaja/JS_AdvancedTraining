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
  
promise1.then(function(value) {
   console.log("Sucess...");
   console.log(value);
    // expected output: "Success!"
}, function(value) {
    console.log("Rejected....");
    console.log(value);
});

console.log("main");