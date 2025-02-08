// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

// Answer: an error. 
// Error: Cannot read property 'name' of undefined

// That’s because rules that set this do not look at object definition. Only the moment of call matters.

// Here’s the opposite case:

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// alert( user.ref().name ); // John
// Now it works, because user.ref() is a method. And the value of this is set to the object before dot