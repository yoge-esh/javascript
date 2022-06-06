// JS program to find the largest and smallest Number among 10 no in an array    
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var largest = arr[0];
var smallest = arr[0];
for (var i = 0; i < arr.length; i++) { // loop to find largest number
    if (arr[i] > largest) { // if current element is greater than largest
        largest = arr[i]; // largest number
    }
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(`The largest number is ${largest}`);
console.log(`The smallest number is ${smallest}`);
document.write(`The largest number is ${largest}`);
document.write(`<br>The smallest number is ${smallest}`);
