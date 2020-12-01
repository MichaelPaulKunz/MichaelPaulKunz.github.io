////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * input: number, number, number
 * ouput: aray
 * edge: no step provided
 */ 
function range(num1, num2, step) {
  //declare array
  let arr = [];
  let n;
  if (step === undefined){ //set default to 1
    n = 1;
  } else{
    n = step;
  }
  //count forwards
  if (n > 0){
    //case 1, num1 smaller
    if (num1 < num2){
      for (let i = num1; i <= num2; i += n){
        arr.push(i);
      }//end loop
    //case 2, num2 smaller  
    } else if (num2 < num1){
      for (let i = num2; i <= num1; i += n){
        arr.push(i);
      }//end loop
    }
  //count backwards  
  } else {
    //case 1, num1 smaller
    if (num1 < num2){
      for (let i = num2; i <= num1; i -= n){
        arr.push(i);
      }//end loop
    //case 2, num2 smaller  
    } else if (num2 < num1){
      for (let i = num1; i <= num2; i -= n){
        arr.push(i);
      }//end loop
  }
 }//end conditional  
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  /**
   * input: array
   * output: number
   * constraints: array items must be numbers
   **/ 
  let result = 0;//initialize result at 0
  for (let i = 0; i < arr.length; i++){//search through array
    result += arr[i];//add array value to result
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  /**
   * input: array
   * output: array
   */
   
  let result = []; //declare emtpy array
  for (let i =  0; i < arr.length; i++){//iterate
    result.unshift(arr[i]);//put each item at the beginning
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  /**
   * input: array
   * output: array
   */
  //loop over half of array
  for (let i = 0; i < Math.floor(arr.length / 2); i++){
    //store current element in placeHolder
    let placeHolder = arr[i]
    //swap front and back items
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = placeHolder;
  }//end loop
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  /**
   * input: array
   * output: object
   **/ 
  
  //if array has multiple items return object with first item as value,
  //recursive call to arrayToList as rest
  if (arr.length > 1){
    return {
      value: arr[0],
      rest: arrayToList(arr.slice(1))
    }
  } else {
    //if array is only one item, 
    //return object with that item as value and null as rest
    return {
      value: arr[0],
      rest: null
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  /**
   * input: object
   * output: array
   * 
   * declare empty array. Start while loop. Push list.value into empty array.
   * Set list to equal list.rest. Terminate while loop when list === null.
   **/ 
  let array = [];
  while (list !== null){
    array.push(list.value)
    list = list.rest;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  /**
   * input: any value, object
   * output: object
   * 
   * Put list properties into placeHolder. Replace list.value with element,
   * replace list.rest with placeHolder.
   **/ 
  let placeHolder = {};
  Object.assign(placeHolder, list);
  list.value = element;
  list.rest = placeHolder;
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  /**
   * input: object, number
   * output: object stored in given list
   * edge cases: number larger than length of list
   **/
  //return undefined if number outlasts list 
  if (list === null){
    return undefined;
  }
  //return the value at the front of the list if n === 0
  if (n === 0){
    return list.value;
  } else {
  //recursive call to nth winds down to n === 0  
    return nth(list.rest, n - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  /**
   * input: object, object
   * output: boolean
   * edge cases: inputs equal null
   *             inputs are not objects
   *             inputs are arrays
   *             input properties are objects or arrays
   **/ 
  //edge case 1: one input is an object, the other is not
  if (typeof obj1 === "object" && typeof obj2 !== "object"){
    return false;
  }
  if (typeof obj1 !== "object" && typeof obj2 === "object"){
    return false;
  }
  //edge case 2 : neither input is an object
  if (typeof obj1 !== "object" && typeof obj2 !== "object"){
    return obj1 === obj2;
  //edge case 3: inputs are null  
  } else if (obj1 === null && obj2 === null){
    return true;
  //inputs are objects  
  } else {
    /**
     * Declare boolean values indicating whether the keys
     * and values of two objects are the same.
     * Default values to true
     **/ 
    var sameKeys = true;
    var sameValues = true;
    //inputs are arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)){
      if (obj1.length !== obj2.length){
        sameKeys = false;
        sameValues = false
      } else {
        for (let i = 0; i < obj1.length; i ++){
          if (obj1[i] !== obj2[i]){
            sameKeys = false;
            sameValues = false;
          }
        }//end loop
      }
    }//end array case
    //store keys of each object in array
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    //check if objects have same number of properties
    if (keys1.length !== keys2.length){
      sameKeys = false;
      sameValues = false;
    } else {
    //check if objects have the same keys  
      for (let i = 0; i < keys1.length; i++){
        if (keys1[i] !== keys2[i]){
          sameKeys = false;
          sameValues = false;
        }//end keys conditional
      }//end loop
      //check if objects have the same values
      if (sameKeys === true){
        for (let key in obj1){
          //recursive call to deepEqual if values are objects
          if (typeof obj1[key] === "object" && typeof obj2[key] === "object"){
            return deepEqual(obj1[key], obj2[key]);
          } else {
            //simple equality if keys are not objects
            if (obj1[key] !== obj2[key]){
              sameValues = false;
            }  
          }
        }//end loop
      }// end values conditional
    }//end else
  }//end else
return sameKeys && sameValues;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
