const myAge = 14;

/* The line of code above declares a variable named "myAge" with a value of 14, which is my age in years.
It was declared using const to keep it from changing values */

let earlyYears = 2;

/* The line of code above declares a variable named "earlyYears" with a value of 2.
It was declared using let to allow it to change values */

earlyYears *= 10.5;

let laterYears = myAge - 2;

/* The line of code above declares a varialbe named "laterYears" with a value of (myAge - 2).
It was declared using let to allow it to change values */

laterYears *= 4;

/* The line of code above multiplies the variable "laterYears" by 4. */

const myAgeInDogYears = earlyYears + laterYears;

/* The line of code above declares a variable named "myAgeInDogYears" with a value of (earlyYears + laterYears).
It was declared using const to keep its value as (earlyYears + laterYears). */

const myName = "Charles".toLowerCase();

/* The line of code above declares a variable named "myName" with a value of "'Charles'.toLowerCase()".
the .toLowerCase() method changes the case of the string to lowercase. */

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} 
years old in dog years.`);



