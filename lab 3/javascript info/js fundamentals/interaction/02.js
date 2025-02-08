let conf = confirm("You must be at least 18 years old to view this content.");

if (conf) {
    let name = prompt("What's your name?");
    let age = prompt("What's your age?");
    alert(`Your Name is ${name} and You are ${age} years old!`)
}