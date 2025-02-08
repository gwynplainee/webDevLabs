// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert(new A() == new B()); // true