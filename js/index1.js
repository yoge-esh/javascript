// string methods 
// trim method 
// string are immutable
let firstName = '      yogesh     ';
console.log(firstName.length);
firstName = firstName.trim() // remove the space from both side 'yogesh'
console.log(firstName.length);

// creating a new variable to store the length of string 
let newName = firstName.trim();
console.log(firstName);
console.log(newName.length); // given the value after removing the space


// toUppercase
firstName = firstName.toUpperCase()
console.log(firstName);

// tolower case 
firstName = firstName.toLowerCase()
console.log(firstName);

// strat inde 
// end index

let newVariable = firstName.slice(0, 5) // it will give value upto 4th index not 5th 
console.log(newVariable);

newVariable = firstName.slice(1); // print the value from index 1st to end 
console.log(newVariable);



// type of operator 
// data type (primitive datattypes)
// string 
// number 
// bullean 
// undefine 
// null 
// bigInt
// symbol 

let age = 20;
let Name = 'yogesh';
// checking the data type
console.log(typeof age)
console.log(typeof Name)

// convert number to string 
// joining the number with empty string 
age =  age + "";
console.log(typeof(age)); // this converts to string 
console.log(typeof (age + "")); // this males age to string 

console.log('\n')
// convert string to number 
console.log(typeof (age)) // datatype is string 
age = +'age';
console.log(typeof(age)) // datatype is number

// typecaseing method 
// convert number to string 
console.log('\n')
let number = 100;
console.log(typeof (number)); // number 
number = String(number);
console.log(typeof(number)); // string

// convert string to number 
console.log('\n')
let variableName = 'javaScript';
console.log(typeof(variableName)); // string 
variableName = Number(variableName);
console.log(typeof(variableName)); // number 


//  string concatenation
console.log('\n')
let string1 = 'java';
let string2 = 'Script';

let fullString = string1 + string2;
console.log(fullString); 

// template string
console.log('\n')
// let aboutme = 'my name is ' + Name + ' and my age is ' + age
let aboutme = `This is ${Name} and i am ${age} years old.`
console.log(aboutme)


// undefinde : if we make a variable but dont assign any value on it
console.log('\n')
let fName ;
// we can do this this in var
// we cant do this in const, const look for a value 
console.log(fName); // undefine 
fName = 'javaScript';
console.log(typeof(fName, fName)) // return type and value 

// null 
console.log('\n')
let Nnumber = null;
console.log(typeof(Nnumber)); // null 
Nnumber = 'javaScript';
console.log(typeof(Nnumber)); // string 

// Note: in js when we check the typeof null it shoulf be null but it will display object becuase, if js will fix this issue then the the which has been written on the basis of that code will be wrong and it has to be corrected, so js is not fincing this bug

// BigInt
// capacity of intigers 
console.log('\n')
console.log(Number.MAX_SAFE_INTEGER) // return how long the int can be stire in js
console.log('\n')
// so if we need bigget than that number then we use BigInt in js
// use of BigInt
// let myInt = BigInt(123545541897781586541651198491651984658);
// another way of declaring BigInt
// the BigInt can be of few numbers also  
let myInt = 123n
let newmyInt = BigInt(7);
// the mathmatical operation of BigInt must be with same datatype  
console.log(myInt + newmyInt)

