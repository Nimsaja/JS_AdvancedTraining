function Person(firstName, lastName) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        console.warn("This is not a valid name "+firstName+" " +lastName);
    }    
    this.firstName = firstName;
    this.lastName = lastName;
    
  }
  
  var john = new Person("John", "Smith");
  var jane = new Person("Jane", "Doe");
  var emily = new Person("Emily", "Jones");
  var noName = new Person(10, 17);
  var noName2 = new Person("Test", 17);
  var noName3 = new Person(10, "Bla");

  let table = [john, jane, emily, noName, noName2, noName3];
  console.table(table);

  document.getElementById("result").innerHTML = JSON.stringify(table);

