// write a program to sort the data of an arrya 

const items = [2, 4, 9, 2, 0, 16, 24];
var data = items.sort(function(a, b) {
    return a - b;
});

console.log(data);
document.write(data);