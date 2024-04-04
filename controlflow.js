// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. 
// Return the array with the new values
function numbersArray(arr){
    const firstFourNumbers = arr.slice(0,4).map(item => item * item);
    console.log(firstFourNumbers)
    const lastTwoNumbers = arr.slice(-2).map(item => item + 10);
    const middleNumbers = arr.slice(4,-2)
    const newValueArr = firstFourNumbers.concat(middleNumbers).concat(lastTwoNumbers)
    console.log(newValueArr)
   }
 numbersArray([1,2,3,4,5,6,7,8,9,10])

// Write a program that takes in the following array and 
// use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

function program(numbers){
  while(numbers.slice(0,3),numbers.slice(5)){
    console.log(numbers)
  if(numbers[4]){
    break;
  }
  }
}
program([1,2,3,4,5,6,7,8,9])

// Write a function that takes in a an array of strings and use a continue statement when the item is at 
// the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
const fruitsString = (fruits) =>{
  for(let i = 0; i < fruits.length; i++){
    if (i <fruits.length){
      continue;
    }
    fruits=fruits[2]
  }
  return fruits
}
let fruits = ['apple','plum','banana','strawberries','kiwi']
console.log(fruitsString(fruits))


// Write a function that accepts an array of strings and console.logs each element using a for loop.
const stringArray = (string) => {
  let newArr = [];
  let strChar = 's'

  for (let i = 0; i < string.length; i++){
      const result = string[i]&strChar;
      newArr.push(result)

  }
  return newArr;
};
console.log(stringArray(["shoe","cup","mark","book"]))

// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
const inputString = (firstCopy) => {
  let strCopy = "";
  for (let i = firstCopy.length -1; i >= 0; i--){
    while(i <= firstCopy.length -1 && 1 >= 0){
      strCopy += firstCopy[i];
    }
  }
  console.log(strCopy);
  return strCopy
}
let firstCopy = "This is Java";
console.log(inputString(firstCopy))
