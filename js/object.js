// Persons / dictionary 
// Person reference type 
// array are good but not sufficent for real world data
// Person store key value pairs 
// Person dont have an index 

// how Person are created 
const Person = {
    // key : value 
    name : 'yogesh',
     age : 19, 
     course : 'javaScript',
    //  we can store any value hare 
    hobby : ["coding", 'developing websites','travelling']
    }
console.log(Person);
console.log(typeof(Person));

// accessing data from Person 
// we write a key name to access value 

console.log(Person.name);
// NOTE: keys in js are in string

console.log(Person['name']); // another way of accessing data form Person 

console.log(`at index one of hobby we have: ${Person.hobby[1]}`);
console.log(Person.age);


// how to add key:value pair in Person
Person.gender = "name";
console.log(Person) 

// bracket notation is use when there is space in variables
// bracket notation to add height  
Person["height"] = 5.9;
console.log(Person) 

// beacket notation are use for this 
const key = "email";
Person[key] = 'example@gmail.com'
console.log(Person)


// iteration over Persons 
// for in loop 
console.log('\n');
for (const key in Person) {
    if (Person.hasOwnProperty.call(Person, key)) {
        const element = Person[key];
        console.log(element);       
    }
}


// Object.keys() function
console.log('\n');
console.log(Object.keys(Person))
console.log(typeof (Object.keys(Person)))
// const a = Array.isArray((Object.isArray(Person)))
const b = Array.isArray(Object.keys[Person])
console.log(b)

// iterating 
for (const key of Object.keys(Person)) {
    console.log(Person[key]);
}