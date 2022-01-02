// booleans and comparision operators 

let num1 = 5;
let num2 = 8;

console.log(num2 >num1);

// == vs ===
let num3 = 7
let num4 = '7'
// == checks the value
console.log(num3 == num4) // true 

// === chacks value and data type 
console.log(num3 === num4) // false 


// != va !==
// true = false 
// false = true 

// !=  chqacks the value 
console.log(num3 != num4) // false because the value is same 

// checks the data type to 
console.log(num3 !== num4) // true because they are different 


// if else consition 
let age = 18;
if (age >= 18 )
{
    console.log("user can go to bar");
}
else
{
    console.log('User cant go to bar ')
}

// ever or odd 
let num = 8
if (num%2 === 0)
{
    console.log('even') // true 
} 
else{
    console.log('odd')
}


// falsy value 

// let firstName = ""
// let firstName = null
// let firstName = 0
let firstName = false


if (firstName){
    console.log(firstName)
}
else{
    console.log('first name is  empty')
}



// ternary operator / conditional operator  
let newAge = 8;
// let drink; // undefine variable
let drink = age >= 5? "coffee" : "milk";
// variable store value = checks_confdition >5 ? true : false

// and or operator 
// and 
let Name = 'yogesh';
let Age = 19;
if (Name[0] === 'y' && age >= 18)
{
    console.log('your name start with y and age is greater than 18');
}
else{
    console.log('the condition is false');
}


if (Name[0] === 'Y' || age >= 18)
{
    console.log('True')
}
else 
{
    console.log('false')
}


// nested if else 
// number guessuing game 
let winning_number = 19;
// prompt take input in string 
let userGuess = Number(prompt("Guess number: ")); // typecasting 
// console.log(typeof userGuess, userGuess)

if (userGuess === winning_number)
{
    console.log('Win the game')
}
else
{
    if (userGuess > 19)
    {
        console.log('guess lower number')
    }
    else{
        console.log('guess higher number')
    }
}

// if, else if, else 
let temperature = Number(prompt("Enter a temperature: "));

if (temperature > 20){
    console.log('good weather')
}
else if (temperature > 25 && temperature <= 25) 
{
    console.log('weather is started getting hot')
}
else if (temperature >= 26 )
{
    console.log('weather is really hot')
}
else 
{
    if (temperature < 15 && temperature > 1)
    {
        console.log('Weather is cold')
    }
    else if (temperature === 0)
    {
        console.log('temperatur is at 0')
    }
    else 
    {
        console.log('Temperature is really cold')
    }
}



// switch case 
let day = Number(prompt("Enter a day number: "));

switch (day) {
    case 1:
        console.log('Sunday')
        break; // doesnot allow any other code to execute after the block will satisfy
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('its a holiday')
        break;

    default:
        console.log('Invalid syntax')
        break;
}


