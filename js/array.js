// array : odred collections of elements
// use to store more value in same variable 
let fruits = ['apple', 'oranges', 'mango']
console.log(fruits) 
console.log(fruits[0]) 
console.log(fruits[1]) 
console.log(fruits[2]) 

// changing/updating the value
// of array 
fruits[1] = 'Banana'
console.log(fruits)

// any valuye can be added in arrays / list 
let number = [1, 2, 3, 'string', undefined, null]
console.log(number)


// arrays are objects 
console.log(typeof fruits)

// to find out the array are array we can do following steps 
console.log(Array.isArray(fruits)) // return true, it is a array 

let obj = {}; 
console.log(typeof obj)

// this method is used to check specific of array 
console.log(Array.isArray(obj))  // false not a object 

// array methods 
// array push add => add athe last of array/ list (append as as python)

let list = [1, 2, 3, 4, 'string', 'tuple']
// array/ list are mutable which are changable 
console.log(list)

list.push('yogesh')
console.log(list)

// array shift unshift 
let pop = list.pop();
// pop always remove the elements form last, which we can return in some othere place 
console.log(`the pop fruits is removed from list, which is ${pop}`)
console.log(list)


// unshift : add the value at the starting, we can add multi value 
list.unshift('added at begining', 'added additional elements on array')
console.log(list)


// shift: remove the value form begining 
let shift = list.shift()
console.log(`removing the begining value is "${shift}"`)


// primitive vs refrence data type 

// primitive type : doesnot change to all, change only at one variable 
// they work on different memory location
let num1 = 6;
let num2 =num1;
console.log('value of num1 is ', num1)
console.log('value of num2 is ', num2)
num1++;
console.log('value of num1 is ', num1)
console.log('value of num2 is ', num2)

// refrence type : change to all the variable 
// array is refrence type 
// they work on same memory location
let array1 = ['item1', 'item2'];
let array2 = array1;
console.log(array1)
console.log(array2)
array1.push('item3')
console.log('added one element to array 1')
console.log(array1)
console.log(array2)


// clone array 
let array3 = [1, 2, 3];
let array4 = array3;
console.log(array3 === array4) // true 

// cloning the array 
// using slicing method 
let array5 = array3.slice(0)
array5.push(4)
console.log('cloning the value of array3 only ')
console.log(array5)

// next way to clong 
let array6 = [].concat(array4)
array4.push(5)

console.log(array4 === array6)
console.log(array6)


// new way to clone the array 
// spread operator 
let array7 = [...array4] ;
array4.push(4, 5, 6, 7); // only added to array4
console.log(array4 === array5);
console.log(array4)
console.log(array5)

let assign = ['hello', 'yogesh'];
// let assign1 = assign;

// cloning the arraya with spread operator 
let assign3 = ['i am doing great']; // i can clone this too 
let assign2 = [...assign, ...assign3]; // we can add in same line too 
// assign.push('how are you doing?')
console.log(assign)
console.log(assign2)