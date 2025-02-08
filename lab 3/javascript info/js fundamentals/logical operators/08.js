// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );// The result of -1 || 0 = -1, truthy
if (-1 && 0) alert( 'second' );// -1 && 0 = 0, falsy
if (null || -1 && 1) alert( 'third' );// Operator && has a higher precedence than || so -1 && 1 executes first, giving us the chain: null || -1 && 1  ->  null || 1  ->  1

// The answer: the first and the third will execute.