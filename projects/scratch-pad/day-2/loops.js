// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //iterate over input Array front to back by incrementing var i in a for loop
  for (var i = 0; i < array.length; i++){
    //print value of Array's item [i], then increment i by 1. 
    // stop running code when i = array.length
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //iterate over input Array back to front by decreasing locally declared var i in a for loop
  for (let i = array.length - 1; i >= 0; i--){
    //print value of Array's item [i], then decrease i by 1.
    // stop running code when i < 0
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // declare an array to store keys in
  let obArray = [];
  //iterate through object's properties with "for in" loop
  for (var key in object){
  // push object's keys into obArray  
    obArray.push(key);
  }
  // return the completed array
  return obArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //iterate through object's properties with "for in" loop
  for (var key in object){
  // print object's keys 
    console.log (key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // declare an array to store values in
  let obArray = [];
  //iterate through object's properties with "for in" loop
  for (var key in object){
  // push each key's value into obArray  
    obArray.push(object[key]);
  }
  // return the completed array
  return obArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //iterate through object's properties with "for in" loop
  for (var key in object){
  // print value of each key
    console.log (object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //declare empty array
  let array = [];
  //push each object key into array
  for (var key in object){
    array.push(key);
  }
  //return length of array
  return array.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //declare empty array
  let array = [];
  //unshift values into array so they are arranged back to front
  for (var key in object){
    array.unshift(object[key]);
  }
  //iterate through array, logging each value
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
