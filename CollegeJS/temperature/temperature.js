// convert temperature from celcius to fahrenheit 
var temp = prompt("Enter temperature in celcius: ");
var tempF = (temp * 9/5) + 32;
var tempC = (tempF - 32) * 5/9;
alert("Temperature in fahrenheit: " + tempF);
alert("Temperature in celcius: " + tempC);
console.log("Temperature in fahrenheit: " + tempF);
console.log("Temperature in celcius: " + tempC);
document.write("Temperature in fahrenheit: " + tempF);
document.write("<br>Temperature in celcius: " + tempC);