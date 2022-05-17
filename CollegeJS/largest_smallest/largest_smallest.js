// write a program to print the largest and smallest number among 10 elemnets of array 

var numbers = [2, 4, 9, 2, 0, 16, 24];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0],                      
    secondSmallest = sorted[1],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
document.write('Smallest: \n' + smallest);
// console.log('Second Smallest: ' + secondSmallest);
// console.log('Second Largest: ' + secondLargest);
console.log('Largest: ' + largest);
document.write(' Largest: ' + largest);

