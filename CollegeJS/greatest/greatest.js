// greatest number among three numbers

var a = +prompt("Enter first number: ");
var b = +prompt("Enter second number: ");
var c = +prompt("Enter third number: ");
if (a>b && a>c) {
    alert(`${a} is greater`);
    console.log(`${a} is greater`);
    document.write(`${a} is greater`);
}
else if (b>a && b>c) {
    alert(`${b} is greater`);
    console.log(`${b} is greater`);
    document.write(`${b} is greater`);
}
else if (c>a && c>b) {
    alert(`${c} is greater`);
    console.log(`${c} is greater`);
    document.write(`${c} is greater`);
}
else {
    alert(`${a}, ${b} and ${c} are equal`);
    console.log(`${a}, ${b} and ${c} are equal`);
    document.write(`${a}, ${b} and ${c} are equal`);
}
