// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-michaelpaulkunz");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./MichaelPaulKunz.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
  //use the filter function, which takes the array passed to the outer
  //function as well as a function that takes a customer object as an argument
  let maleCustomers =  _.filter(array, function(customerObj){
    //filter out all male customers using gender key
    return customerObj.gender === "male";
  //get length of male array    
  }).length 
  return maleCustomers;
}
var femaleCount = function (array) {
  //use reduce to increment count when gender is female
  let femaleCustomers =  _.reduce(array, function(count, customerObj){
    if (customerObj.gender === "female"){
      count++;
    }
  //return count in imbedded function call
  return count;
  }, 0);
  //return new array  
  return femaleCustomers;
};

var oldestCustomer = function (array){
  //use reduce function to return object with largest age value.
  //Return the name property of that object.
  return _.reduce(array, (a, b) => b.age > a.age ? b : a).name;
};

var youngestCustomer = function (array){
  //use reduce function to return object with smallest age value.
  //Return the name property of that object.
  return _.reduce(array, (a,b) => b.age < a.age ? b : a).name;
};

var averageBalance = function (array){
  //Get array of balance values. They are strings.
  let balanceString = _.map(array, a => a.balance);
  //They need to be numbers. 
  let balanceNumber = [];
  //Split each string into an array. Filter dollar signs and commas out of each array.
  //Join each array back into a string. Convert strings to numbers with + operator.
  _.each(balanceString, string => balanceNumber.push(+string.split("").filter(a => a !== "$" && a !== ",").join("")));
  //Add all the balances and divide by the number of customers
  return  _.reduce(balanceNumber, (a,b) => a + b) / array.length;
};

var firstLetterCount = function(array, letter){
  //set names to array of customer names, lower case
  let names = _.map(array, a => a.name.toLowerCase());
  //start count at 0
  let count = 0;
  //increment count for each item whose first letter is the given lowercase letter
  _.each(names, a => a[0] === letter.toLowerCase() ? count++ : count = count);
  //return count
  return count;
};

var friendFirstLetterCount = function(array, customer, letter){
  //get array of names, case insensitive
  let names = _.map(array, a => a.name.toLowerCase());
  //get index of given customer, case insensitive
  let index = _.indexOf(names, customer.toLowerCase());
  //get list of friends, case insensitive
  let friendList = _.map(array[index].friends, a => a.name.toLowerCase());
  //set count to 0
  let count = 0;
  //increment count for each friend whose name starts with given letter, case insensitive
  _.each(friendList, a => a[0] === letter.toLowerCase() ? count++ : count = count);
  return count;
};

var friendsCount = function(array, name){
  //declare empty array to put names in    
  let result = [];
  /**
   * Use nested calls to "each" function to compare names
   * of customers' friends to the given name value.
   **/ 
  _.each(array, function(customer){
    _.each(customer.friends, function(friend){
      /**
       * When there is a match in the nested call, push the name of 
       * the customer from the parent call into the result array
       **/
      if (name === friend.name){
        result.push(customer.name);
      }//end conditional
    })//end nested each
  })//end parent each 
  //return array
  return result;
};

var topThreeTags = function(array){
    //declare tag array
    let tagArray = [];
    //loop through given array
    for (let i = 0; i < array.length; i++){
        //concatenate tags array from each object
        let customerObj = array[i];
        tagArray = tagArray.concat(customerObj.tags);
    }//end for loop
    //use reduce to create object of tag keys and count values
    let tagCountObj = tagArray.reduce(function(tagObj, currentTag){
        if (tagObj[currentTag]){
            tagObj[currentTag]++;
        } else{
            tagObj[currentTag] = 1;
        }
        return tagObj;
    }, {}); 
    let countsArray = [];
    //not sure what this line does
    countsArray = Object.entries(tagCountObj);
    //sort countsArray
    countsArray.sort((a,b) => b[1] - a[1]);
    //get top three
    let topThreeArray = countsArray.slice(0,3);
    let topThreeWords = topThreeArray.map(obj => obj[0]);
    return topThreeWords;
};

var genderCount = function(array){
  //use map to get array of genders
  let genders = _.map(array, a => a.gender);
  //reduce array of genders to object where each
  //key is a gender with a number value
  let genderObject = _.reduce(genders, function(object, string){
    //if this gender is not already a key, create it and set it to 1
    if (_.indexOf(Object.keys(object), string) === -1){
      object[string] = 1;
    //if this gender is already a key, increment its value  
    } else {
      object[string]++;
    }//end conditionals
    return object;
  }, {});
  return genderObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
