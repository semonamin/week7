// 1/ Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);


// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
let result = ages[ages.length -1] - ages[0]
console.log(result);

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

let newAges = 43;
ages.push(newAges);
 result = ages[ages.length -1] - ages[0];
console.log(result);

//  .Use a loop to iterate through the array and calculate the average age.
 let sumAges = 0;
  for(let i = 0; i < ages.length; i++){
    sumAges += ages[i]
  }
  let averageAge = sumAges / ages.length;
  console.log(averageAge);

  //2- Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Use a loop to iterate through the array and calculate the average number of letters per name.

// 


let sumLetter = 0;
for (let i = 0; i < names.length; i ++){
  sumLetter += names[i].length
}
let averageNames = sumLetter / names.length;
console.log(averageNames);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenatedNames = ' ';
for(let name of names){
concatenatedNames += name +' ';
}
console.log(concatenatedNames)

// How do you access the last element of any array
console.log(names[names.length - 1]);

// How do you access the first element of any array?


console.log(names[0]);

//5- Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for(let name of names){
  nameLengths.push(name.length);

}
console.log(nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum = 0;
for (i = 0; i< nameLengths.length; i++){
sum += nameLengths[i];
}

console.log(`sum of length of each
 name ${sum}`);


// 7-Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').


function concatenateWord (word, n){
  let result = "";
for(let x = 0; x < n; x++){
  result += word;
}
return result;
}
console.log(concatenateWord('Hello', 3))


// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.


function getFullName(firstName, lastName){
  return firstName + " " + lastName;

}
let fullName = getFullName('Semon', 'Amin')
console.log(fullName);


// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numbers = [90, 120, 10, 99];
function sumOfNumber (numbers){
  let sum = 0;
for (let i = 0; i< numbers.length; i++){
   sum += numbers[0];
}
return sum > 100;
}
console.log(sumOfNumber(numbers));



// write a function that takes an array of numbers and returns the average of all the elements in the array.


function getAverage(numbers){
let sum = 0;
for (let i =0; i<numbers.length; i++){
  sum += numbers[i]
}
 return sum / numbers.length;
}

console.log(getAverage(numbers));


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function  myFunction(num1, num2){
  
  let sum1 = 0 , sum2 = 0
   for (let i = 0; i< num1.length; i++){
    sum1 += num1[i];
   }
   for (let i = 0; i<num2.length; i++ ){
    sum2 += num2[i];
   }

 let avg1 = sum1/num1.length;
 let avg2 = sum2/num2.length;
 return avg1 > avg2

}
const num1 = [2, 3, 6, 9];
const num2 = [1, 1, 1, 1];
console.log(myFunction(num1,num2));


// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50..

let  willBuyDrink = (isHotOutside, moneyInPocket) => {
  if(isHotOutside && moneyInPocket > 10.50){
return true;
  }else{
    return false;
  }
}
console.log(willBuyDrink( true,10));


// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// function to check if it is rainy so i wiil study at home other else i will go outside

function checkTheWeather (rainy){

  if (rainy === true ){
    return " stay home becaue it is raining today"
  
  } else {
    return " go outside it is a sunny day today"
  }
  
}
console.log(`today i will ${checkTheWeather(false)}`);



//   my function will check if the number is even or not

function checkTheEvenNumber (n){
if (n % 2 === 0) {
  return "this number is even"

} else { 
   return "this number is odd"
}
}


console.log(checkTheEvenNumber(10)); 
console.log(checkTheEvenNumber(9));