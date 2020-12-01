// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    //input: any value
    //output: same value unchanged
    //constraints:
    //edge cases:
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    //input: any type
    //output: string
    //edge cases: none
    //constraints: none
    if (typeof value !== "object"){
        return typeof value;
    } else if (value === null){
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else {
        return "object";
    }
        
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num){
    //input: array, number
    //output: item of array, could be any datatype
    //edge cases: first parameter not array, second parameter not a number or not given, negative, greater
    //constraints: none
    if (!Array.isArray(arr) || num < 0){
        return [];
    }//first edge case
    if (typeof num !== "number"){
        return arr[0];
    }//end conditional
    if (num < 0){
        return [];
    }//end conditional
    if (num >= arr.length){
        return arr;
    }//end conditional
    return arr.slice(0, num);
}//end function


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, num){
    //input: array, number
    //output: item of array, could be any datatype
    //edge cases: first parameter not array, second parameter not a number or not given, negative, greater
    //constraints: none
    if (!Array.isArray(arr) || num < 0){
        return [];
    }//first edge case
    if (typeof num !== "number"){
        return arr[arr.length - 1];
    }//end conditional
    if (num < 0){
        return [];
    }//end conditional
    if (num >= arr.length){
        return arr;
    }//end conditional
    return arr.slice(num - 1, arr[arr]);
    
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, value){
    //input: an array, any value
    //output: number
    //edge cases: multiple occurances (return first)
    //            value not in array (return -1)
    //constraints: 
    
    for (let i = 0; i < arr.length; i++){
        if (value === arr[i]){
            return i;
        }//end conditional
    }//end loop
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, value){
    /**
     * input: array, any value
     * output: boolean
     * edge cases: should be strict equality, account for no value given
     */
    
   return arr.includes(value) ? true : false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, action){

if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}    

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    // create a newArray variable and assign to it an empty array
    let newArray = [];
    // loop through the array passed to the function
    for (let i = 0; i < array.length; i++) {
        // if the previously defined indexOf function returns -1, meaning that the element is not found within the newArray, push the element to the newArray
      if (_.indexOf(newArray, array[i]) === -1) {
        newArray.push(array[i]);
      }
    }
    // return the newArray
    return newArray;
}



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(arr, func){
    /**
     * input: Array, function
     * output: array
     * edge cases: function doesn't return boolean
     */ 
    //create new array 
    let result = []; 
    //pass array and ad hock arrow function into each
    _.each(arr, (element, index, array) => {
      //push element into array if it passes test
      if (func(element, index, array)){
        result.push(element);
      }
    });
    //return array
    return result;    
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func){
    // input: array and a function
    //output: an array of the elements that did not pass the function
    //edge cases:
    //constraints:
    //create a new array to push the rejects into
    var newArr = [];
    //create a for loop that loops over the values in the array
    for (let i = 0; i < arr.length; i++){
        //then run the function on each element to see if they pass or fail
        if (!(func(arr[i], i, arr))){
            //if they fail, push them into the new array
            newArr.push(arr[i]);
        }
    }
    //return the new array with the reject values
    return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, func){
    /**
     * input: array, function
     * output: array of arrays
     */
    
    //declare new arrays 
    let truthArray = [];
    let falseArray = [];
    //loop through given array
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            truthArray.push(arr[i]); //push to truthArray
        } else{
            falseArray.push(arr[i]); //push to falseArray
        }
    }//end loop
    return [truthArray, falseArray];
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func){
    //input: a collection and a function
    //output: the return values of each value in the collection when passed through the function, in an array
    //edge cases: N/A
    //constraints: N/A
    let dataType = "";
    //first check to see if the collection is an array or object
    if (Array.isArray(collection)){
        dataType = "Array";
    } else if (typeof collection === "object"){
        dataType = "Object";
    }
    let newArr = [];
    //create a new array to push the function returns into
    //create an if statement to run the function whether its an array or an object
    if (dataType === "Array"){
        for (let i = 0; i < collection.length; i++){
            newArr.push(func(collection[i], i, collection));
        }
    } else if (dataType === "Object"){
        for (let key in collection){
            newArr.push(func(collection[key], key, collection));
        }
    }
    return newArr;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, prop){
    /**
     * input: array of objects
     * output: array
     */
    //declare empty array
    let newArray = []; 
    //declare function that returns given property of object at array index
    function propert (itm, indx, arr){
       return arr[indx][prop];
    }
    //call _.map with arr array and propert function as arguments, assign value to newArray
    newArray = _.map(arr, propert);
    //return newArray
    return newArray;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(coll, func){
    /**
     * input: a collection and a function
     * output: return true if every element in the collection passes the function, false if just one fails
     * edge cases: if the function doesnt return a boolean, if function is not given
     * constraints: N/A
     */
      let dataType = "";
    //first check to see if the collection is an array or object
    if (Array.isArray(coll)){
        dataType = "Array";
    } else if (typeof coll === "object"){
        dataType = "Object";
    }
    //next check to see if the function parameter exists, if it does not, return true if it has a true value within
    //the collection, and false if the collection includes a false value
    if (func === undefined && coll.includes(true)){
        return true;
    } else if (func === undefined && coll.includes(false)){
        return false;
    }
    let result = true;
    //check the collection if its an array or object
   if (dataType === "Array"){
        for (let i = 0; i < coll.length; i++){
           if (!(func(coll[i], i, coll))){
             result = false;
           }
        }
    } else if (dataType === "Object"){
        for (let key in coll){
          if (!(func(coll[key], key, coll))){
              result = false;
          }
        }
    }
      //close the loop
  return result;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    /**
     * input: Array or Object, Function
     * output: boolean
     * edge cases: function doesn't return boolean, no function
     * constraints: none
     */
    //array case
    if (Array.isArray(collection)){
      for (let i = 0; i < collection.length; i++){ 
          //function not provided
          if (typeof func !== "function" && collection[i]){
              return true;
          //function provided      
          } else if (typeof func === "function" && func(collection[i], i, collection)){
              return true;
          }
              
      }//end loop
    //object case  
    } else {
        for (let key in collection){
          //function not provided
          if (typeof func !== "function" && collection[key]){
              return true;
          //function provided      
          } else if (typeof func ==="function" && func(collection[key], key, collection)){
            return true;
          }
      } //end loop
        
    } //end conditionals 
  return false;    
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (array, func, seed){
 /**
  * input: an array, a function, and a seed
  * output: the final function return value
  * edge cases: if seed is not given
  */
  //create a variable to return
  let result;
  //first check to see if there is a seed
  if (seed === undefined){
      //if there is not, run the function with the first element acting as the seed
      let result1 = func(array[0], array[1], 1);
      //after we have the first result, we can loop through the rest of the array starting at
      //index 2 and running the function
      for (let i = 2; i < array.length; i++){
          result1 = func(result1, array[i], i);
      }//then set the final function return equal to the result
      result = result1;
  } else {
      //if there is a seed available then we start running the function with the given seed and array[0]
      let result2 = func(seed, array[0], 0);
      for (let i = 1; i < array.length; i++){
          //then we continue to run the function while looping through the array
          result2 = func(result2, array[i], i);
      }//then set the final function return equal to the result
      result = result2;
  }
    //return the final result
return result;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, obj2, ...theObjects){
    /**
     * input: 2 or more objects
     * output: first object
     * constraints: none
     * edge cases: more than two objects
     */
    //search through obj2 
    for (let key in obj2){
        //copy properties into obj1
        obj1[key] = obj2[key];
    }//end loop
    //account for more arguments
    //loop through theObjects array
    for (let i = 0; i < theObjects.length; i++){
        //loop through each object in array
        for (let key in theObjects[i]){
            //copy properties into obj1
            obj1[key] = theObjects[i][key];
        } //end nested loop
    }//end parent loop
    return obj1;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
