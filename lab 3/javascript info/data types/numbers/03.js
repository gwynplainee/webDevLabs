// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);