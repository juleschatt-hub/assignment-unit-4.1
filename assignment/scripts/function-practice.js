console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
//helloName('Julian');
console.log(helloName('Julian'));

// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber
  // return firstNumber + secondNumber;
  return sum;
}
console.log('Sum of two numbers: ', addNumbers(5, 10));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}
console.log('Result for "Multiply three" function: ', multiplyThree(4, 6, 10))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Number greater than 0 as input', isPositive(2));
console.log('Number less than 0 as input', isPositive(-4));
console.log('Number IS 0 as input', isPositive(0));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
  let item = array[array.length - 1];

  return item;
}
console.log('last item', getLast(['first item', 'second item', 'third item']));
console.log('last item', getLast([1, 7, 11, 336, 25]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let item of array) {
    if (value === item) {
      return true;
    }    
  }
  return false;
} //end find

console.log('Value is found in array:', find(8, [4, 5, 6]));
console.log('Value is found in array:', find('this value exists', ['this value exists']));
console.log('Value is found in array:', find('this value exists', ['no it doesent']));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  string = string.split('') //splits characters of string making each one an item in an array
  if(string[0] === letter) {
    return true;
  } else {
    return false;
  }
}
console.log('The letter is the same as first leter in the string', isFirstLetter('a', 'about'));
console.log('The letter is the same as first leter in the string', isFirstLetter('b', 'about'));
console.log('The letter is the same as first leter in the string', isFirstLetter('A', 'about'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let item of array) {
    sum = item + sum;
  }
  // TODO: return the sum
  return sum;
  
}
console.log('The sum of the items in the array is', sumAll([1, 2, 5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  let returnArray = [];
  for(let i of inputArray) {
    if(i > 0) {
      returnArray.push(i);
    }    
  }
  console.log('Original input array:', inputArray); //check to see if input array is still the same
  return returnArray;
  
}
console.table(allPositive([1, 7, 12, -3, 18, -4]));
console.table(allPositive([1, 7, 12, -3, 18, -4, 0])); //check where 0 goes
console.table(allPositive([1, 7, 12, 3, 18, 4])); //no negatives
console.log('no positives', allPositive([-1, -7, -12, -3, -18, -4])); //no positives
console.table(allPositive([])); //empty array



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
