// while loop 
let i = 0
while (i<= 5) {
    console.log(i);
    i++;
}
console.log(`the current value of i is ${i}`); // 6


// sum of first 10 natureal numer 
let a = 10;
let sum = 0;

while (a>=0)
{
  sum += a;
  a--;
}
console.log(sum)

// trick 
let total = (a*(a+1))/2;
console.log(total)

// for loop 
for (let i = 0; i<= 10; i++)
{
    let sum = 0; // lacal variable 
    sum += i;
    console.log(sum)
}


// break and continue 
for(let i = 0; i <= 10; i++)
{
    let sum = 0;
    if (i === 5)
    {
        continue // escape the 5 and continue working 
        // terminate loop in this case and start again
    }
    else if (i === 8)
    {
        break // break at 5 if the condition is satisfy
    }
    sum += i;
    console.log(sum)    
}



// // do while loop 
let j = 10;
do{
    console.log('althouth the condition is false we can do while loop will execute for one time as we can see in below example')
    console.log(j);
    j++;
}while(j<=10);     



// for loop 
let item1 = ['apple', 'oranges', 'mangos'];
for (let i = 0; i < item1.length; i++) {
    const element = item1[i];
    console.log(element)   
}
console.log('\n')   
console.log(item1[item1.length-1]) // the value of item1 at -1 is 2

// printing the value in uppercase 
for (let i = 0; i < item1.length; i++) {
    console.log(item1[i].toUpperCase());   
}

// pushing the value of item1 to list item2 using loop 
console.log();
let item2 = []; // empty array 
for (let i = 0; i < item1.length; i++) {
    item2.push(item1[i].toUpperCase());
}
console.log(item2);



// use const or creatuing array 
const newValue = ['apple', 'mangos'];
// if we push hete it will directly push to memory location due to which it allow to push the value in const 
// newValue.push('bananans')
// console.log(newValue)

// while loop 
let k = 0;
while (k<newValue.length) {
    console.log(newValue[k].toUpperCase());
    k++;
}
 


// for of loop
console.log('\n');
const goods = ['Rice', 'Dal', 'Tarkari'];
for (const iterator of goods) {
    console.log(iterator.toUpperCase());
}


// for in loop 
console.log('\n');
const number = [1,2, 3, 4, 5, 6, 7]
for (const key in number) {
    if (number.hasOwnProperty.call(number, key)) {
        const element = number[key];
        console.log(element)
    }
}



// array destruction 
console.log('\n');
const var1 = ["value1", 'value2', 'value3', 'value4'];
// let var2 = var1[0];
// let var3 = var1[1];
// console.log(var2)
// console.log(var3)

// const var1 = ["value1"]; // throw an undefine value because value are not eniugh with variables 
// let [var2, var3, var4] = var1; //above code can be use in this way, which is shorter 
let [var2, var3, , var4] = var1; // giving an comma to in between og varibles will help us to escape the value 
console.log(var2);
console.log(var3);
console.log(var4); // return last value 



console.log('\n');
const object = ['hello', 'dear', 'how are ', 'you doing?'];

// let [obj1, obj2] = object; 
// let ob = object.slice(2) // start after index 2

// shorten the line of code 
let [obj1, obj2, ...ob] = object; 
console.log(obj1)
console.log(obj2)
// console.log(`return the rest of value after first and seciond: ${ob}`);
console.log(ob);

