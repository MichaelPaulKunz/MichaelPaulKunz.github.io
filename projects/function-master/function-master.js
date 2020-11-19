//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // input is an object
    // output is an array
    // edge cases: none so far
    
    //first create the array to hold the object values
    const arrayToReturn = [];
    //
    
    //loop through the object getting the values
   for (var key in object){
       //put value into array
        arrayToReturn.push(object[key]);
    }
    // return that array
    return arrayToReturn;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    /**
     * input: object
     * output: string
     * edge cases: none so far
     **/
     //first, create an empty array
     var keysArr = [];
     //search through object with for in loop
     for (let key in object){
         keysArr.push(key);
     }//end for loop
     return keysArr.join(" ");
     
}//end keysToString function

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    /**
     * input: object
     * output: string
     * edge cases: property does not contain string value
     **/
     //first, create an empty array
     var keysArr = [];
     //search through object with for in loop
     for (let key in object){
         if (typeof object[key] === 'string'){
           keysArr.push(object[key]);
             
         }//end if
     }//end for loop
     return keysArr.join(" ");
    
    
}//end function valuesToString

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    /**
     * input : object or array
     * output: string
     * edge cases: none
     * constraints: input must be object or array
     */
     
     if (Array.isArray(collection)){
         return "array";
     } else {
         return "object";
     }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /**
     * input: string
     * output: string
     * edge cases: none
     * constraints: argument must be string 
     **/
     return (string[0].toUpperCase() + string.slice(1));
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    /**
     * input: string
     * output: string
     * edge cases: none
     * constraints: argument must be string
     **/
     
     //create an array of individual words in string
     var words = string.split(" ");
     //capitalize each words in array
     for (let i = 0; i < words.length; i++){
         //capitalize first letter in each array element
         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
     }//end loop
     
     return words.join(" ");
    
}//end function

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    /**
     * input: object
     * output: string
     * edge cases: capitalize noncapitalized name
     * constraint: input must be object with name property
     **/
     
     return ("Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!");
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    /**
     * input: object
     * output: string
     * edge cases: capitalize name and species
     * constraints: argument must be object with both name and species properties
     **/
     
     //capitalize first letter of name and species
     let nameCap = object.name[0].toUpperCase() + object.name.slice(1);
     let speciesCap = object.species[0].toUpperCase() + object.species.slice(1);
    //return string
    return (nameCap + " is a " + speciesCap); 

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    /**
     * input: object
     * output: string
     * edge cases: no noises key in object
     * constraints: argument must be object
     **/ 
     //create boolean for edge case
     var makesNoise = false;
     //search object for noises
     for (let key in object){
         if (key === "noises" && Array.isArray(object[key]) && object.noises.length > 0){
             makesNoise = true;
         }
     }
     if (makesNoise){
         return object.noises.join(" ");
     } else{
         return "there are no noises"
     }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
/**
 * input: 2 strings
 * otput: boolean
 * constraints: no punctuation?
 * edge cases: I imagine punctuaction could break this
 **/ 
 //create an array of words in our string
 var eachWord = string.split(" ");
 //search through our new array
 for (let i = 0; i < eachWord.length; i++){
     if (eachWord[i] === word){
         return true; //return true if it finds the word
     }
 } // end loop
 return false; //will never reach this statement if true is returned in loop
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function addFriend (name, object) {
/**
 * input: string, object
 * output: same object, altered
 * edge cases: none
 * constraints: object must have friends key with array value
 **/
 object.friends.push(name);
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
/**
 * input:  string, object
 * output: boolean
 * edge cases: friends property is not at array
 * constraint: object must have friends key with array value
 **/
 //search through object.friends array
 if (Array.isArray(object.friends)){
     for (let i = 0; i < object.friends.length; i++){
         if (name === object.friends[i]){
             return true;
         }//end if
     }//end for
 }//end if
 return false;
}//end function


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
 //search through array
 var notMyFriends = [];
 for (let i = 0; i < array.length; i ++){
  //two checks
  // is object we're on equal to name
  // is name in friend array of object we're on
     if (name === array[i]["name"] || array[i]["friends"].includes(name)){
     continue; //return to top of loop
  } else{
     notMyFriends.push(array[i]["name"]);
  }
 }//end loop
 return notMyFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
/**
 * Input: Object, string, anything
 * Output: object, even though this is not clear from the instructions
 * constraints: object must be an object
 */
 
 /**
 * Input: Object, string, anything
 * Output: none
 * constraints: object must be an object
 **/
  object[key] = value;
  return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (let key in object){
   if (array.includes(key)){
    delete object[key];
   }//end if
  }//end loop
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
/**
 * input: array
 * output: array
 **/
  const ITEMS = array.length; 
  //search through array
  for (let i = 1; i < ITEMS; i++){ 
   if (array.slice(0, i).includes(array[i])){ //if item is included already in front of array
     array.splice(i, 1); //remove duplicate item
     i--; //back i up, as array has shifted
   } //end if
 }//end loop
 return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}