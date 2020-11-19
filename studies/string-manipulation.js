/**
 * String Manipulation:
 * 
 * JavaScript provides us with an array of tools (see what I did there?)
 * with which to manipulate strings. Some are simple operators and some
 * are higher order functions and methods. Lets get started by declaring
 * a string and running expressions on it.
 */
var happyString;
//once we declare our string, we can initalize it with the = operator
happyString = "I am happy";
/**
 * We can concactenate a new string onto the end of happyString
 * with the += operator
 */
happyString += "!!!";
/**
 * If we console.log happyString, we will notice it now has three
 * exclamation points at the end of it.
 */
console.log(happyString);
//Let's declare and assign a new string
questionString = " Are you happy?";
//now let's combine those two strings into a new string with the + operator
var happyQuestion = happyString + questionString;
console.log(happyQuestion);
//I am happy!! Are you happy?

/**
 * How many characters are in our string?
 * We can find out with the .length function
 **/
console.log(happyQuestion.length); //<== prints 28
/**
 * Our string is zero indexed. We can find a character in our string
 * with bracket notation using the index. [0] wil give us the first 
 * character.
 */
console.log(happyQuestion[0]); //<== prints I
// .length - 1 will give us the last character
console.log(happyQuestion[happyQuestion.length - 1]);//<== prints ?
/**
 * indexOf() tells us where in our string other strings are located
 * Let's start simple and search for just one character.
 */
console.log(happyQuestion.indexOf("a"));//<== prints 2
/**
 * a first appears as the third character, 
 * and strings are zero indexed, so indexOf()
 * returns 2. We can also put a longer string into our
 * indexOf method
 */
console.log(happyQuestion.indexOf("happy")); //<== prints 5
/**
 * It returns the index of the first letter.
 * But our string has "happy" twice. What if we want to 
 * access that second happy?
 * 
 *lastIndexOf() lets us do this
 */
console.log(happyQuestion.lastIndexOf("happy"));// <== prints 22
/**
 * The last instance of the string "happy" starts at the 22 index
 * of the parent string.
 * 
 * Let's make a new string that includes everything in our 
 * happyQuestion string from the first happy indluced 
 * to the second happy not included. We can do that with slice.
 */
var happyAreYou = happyQuestion.slice(5, 22);
console.log(happyAreYou); //<== prints happy!!! Are you
/**
 * We want our string to be a little more manic. So let's
 * capitalize all the letters with toUpperCase
 */
var mania = happyAreYou.toUpperCase();
console.log(mania); //<== prints HAPPY!!! ARE YOU
/**
 * Let's make it look like we were too happy to type 
 * properly and add a bunch of extraneous spaces to 
 * the front and back of our string. Earlier we
 * concactenated with the + operator. But we can use
 * the concat function instead.
 */

var spaces = "    ".concat(mania, "    ");
console.log(spaces);
//now let's trim those spaces off
var fixIt = spaces.trim();
console.log(fixIt);
//Now let's calm down. Switch to lowercase
var calm = fixIt.toLowerCase();
console.log(calm);
//Let's split our string up into words
var words = calm.split(" ");
console.log(words);
//Now it's an array, each word is an item

/**
 * These are just a handful of the many useful methods
 * JavaScript provides for manipulating strings.
 * Google is your friend!
 */