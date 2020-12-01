// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  /**
   * input: array of arrays
   * output: array
   * edge cases: none
   * constraints: use reduce and concat
   **/
   return arrays.reduce((a, b) => a.concat(b));
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////bo/////////////////////////////////

function loop(value, test, update, body){
  /**
   * input: value, function, function, function
   * output: series of values
   **/ 
  while (test(value)){ //while test is true
    body(value); //call body function with value
    value = update(value);//value equals update value
  }
}  

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  /**
   * input: array, function
   * output: boolean
   */ 
  for (let i = 0; i < array.length; i++){
    if (!test(array[i])){
      return false;
    }
  }//end loop
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
let charArray = [];
//create array of code units for each character in given text
for (let i = 0; i < text.length; i++){
  charArray.push(text.codePointAt(i));
}
let scriptArray = [];
//create array of scripts for each character in given text
for (let i = 0; i < charArray.length; i++){
  if (characterScript(charArray[i]))
  scriptArray.push(characterScript(charArray[i]));
}
//use countBy to get array of objects showing number of characters for each direction
//reduce array to direction object with highest count
let dominant = countBy(scriptArray, s => s.direction).reduce((a, b) => a > b ? a : b);
//return name value of direction object with highest count
return dominant.name;
 
}//end dominantDirection

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
