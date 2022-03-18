// palindrome number 
var a =  prompt("Enter a number: ");
var b = a.split("").reverse().join("");
if (a==b) {
    alert(`${a} is a palindrome`);
    console.log(`${a} is a palindrome`);
    document.write(`${a} is a palindrome`);
}
else {
    alert(`${a} is not a palindrome`);
    console.log(`${a} is not a palindrome`);
    document.write(`${a} is not a palindrome`);
}