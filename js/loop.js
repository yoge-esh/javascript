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



