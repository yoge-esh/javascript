// factorial of number
var a =  prompt("Enter a number: ");
var b = 1;
for (var i = 1; i <= a; i++) {
    b = b * i;
}
console.log(`The factorial of ${a} is ${b}`);
document.write(`The factorial of ${a} is ${b}`);
