/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * input: array, string
 * ouput: object or null
 * edge case: no such animal with that name
 * constraints: none
 **/ 
function search (animalList, animalName){
    for (let i = 0; i < animalList.length; i++){
        if (animalList[i].name === animalName){
            return animalList[i];
        }
    }
    return null;    
        
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * input: array, string, object
 * output: none, return no value
 * edge case: no animal with name property is in the array
 * constraints: none
 **/ 
function replace(animals, name, replacement){
    //iterate through the array
    for (let i = 0; i < animals.length; i++){
        // if name parameter equals value of name property in array (object)
        if (name === animals[i].name){
        //  insert replacedment parameter
            animals.splice(i, 1, replacement);
       } //end if
    
    } //end for
}// end function replace    

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * input: array, string, object
 * output: none, return no value
 * edge case: no animal with name property is in the array
 * constraints: none
 **/ 
function remove(animals, name){
    //iterate through the array
    for (let i = 0; i < animals.length; i++){
        // if name parameter equals value of name property in array (object)
        if (name === animals[i].name){
        //  delete 
            animals.splice(i, 1);
       } //end if
    
    } //end for
} // end function replace    

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * input: array, object
 * output: none
 * edge cases: animal's name has no characters, 
 *             animal's species has no characters,
 *             another animal already has that name
 * constraints: none
 **/ 
function add(animals, animal){
    //iterate through animal with for in loop
    let nameValid = false; 
    let speciesValid = false;
    let nameUnique = true;
    //iterate through animal object with for loop
    for (let key in animal){
        //switch nameValid to true if name exists is non empty string
        if (key === "name"){
            if (animal[key].length > 0){
                nameValid = true;
            }//end nested if
        }//end parent if
        //switch speciesValid to true if species is non empty string
        if (key === "species"){
            if (animal[key].length > 0){
                speciesValid = true;
            }// end nested if
        }// end parent if 
    }// end for in loop
    if (nameValid){
        //iterate through animals array
        for (let j = 0; j < animals.length; j++ ){
            if (animal.name === animals[j].name){
                nameUnique = false;
            }//end nested if statement
        }//end for loop
    }//end parent if 
    if (nameValid && speciesValid && nameUnique){
        animals.push(animal);
    }//end if statement
        
    
}//end function

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
