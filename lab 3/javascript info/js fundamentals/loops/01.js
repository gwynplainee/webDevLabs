// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

// The answer: 1.

// Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.