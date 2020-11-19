/**
 * Datatypes:
 * 
 * Datatypes are the different categories our data can fall into.
 * Each datatype can express a unique set of values 
 * and can be modified only with certain operators.
 * The datatype of the value stored in our variable determines 
 * which operators we can use and what data we can obtain.
 * 
 * Let's focus on 9 different datatypes, how they are used, 
 * and how they differ from eachother:
 * 
 *  1. Numbers
 *  2. NaN
 *  3. undefined
 *  4. null
 *  5. strings
 *  6. booleans
 *  7. objects
 *  8. arrays
 *  9. functions
 **/

/**
 * 1. Numbers
 * 
 * To assign a number to a variable, simply put a number on the right side 
 * of our assignment operator (=). Do NOT use quotes.
 **/

var num = 42;
console.log(42);   // <== prints 42
console.log(num); // <== also prints 42
//the typeof function tells us the datatype of our data
console.log(typeof 42); //<== prints number
console.log(typeof num);//<== prints number

/**
 * Numbers behave exactly as you'd expect them to behave.
 * We can modify them with arithmetic operators (+, -, *, /, %)
 **/
var numPlus = 10 + 10; //<== sets numPlus to value of 20 via addition (+) operator
console.log(numPlus);//<== prints 20
console.log(10 + 10);//<== also prints 20

//Numbers can hold values of 0
var nada = 0;
//Numbers can hold negative values
var lessThanNothing = -19;
console.log(nada); //<== prints 0
console.log(lessThanNothing); //<== prints -19
//Infinity is a recognized number value in JavaScript
console.log(typeof Infinity); //<== prints number
//As is negative Infinity (-Infinity)
console.log(typeof -Infinity); //<== prints number
/**
 * Infinity will always return greater than a non Infinity number
 * And -Infinity will always return smaller than a non -Infinity number
 */
console.log(Infinity > 9999999999999999);//<==prints true
console.log(-Infinity < -999999999999999);//<==prints true
//Numbers don't have to be integers, or whole numbers.
var decimalNum = 9.99; //<== assigns decimal value
console.log(decimalNum); //<== prints 9.99
//But they do have to be real numbers. Sorry, i.
console.log(Math.sqrt(-1)); //<== prints NaN, or Not a Number. 

/**
 * 2. NaN:
 * 
 * The computer can only perform certain operations on certain types.
 * If we try to perform a numbers-only operation on a non-number, 
 * the computer returns NaN, meaning Not a Number
 */
console.log(parseInt("Am I a number?")); //<== prints NaN
//Ironically, typeof NaN returns number 
console.log(typeof NaN); //<== prints number
/**
 * Try not to let this give you an existential crisis. 
 * NaN simply allows us to return what the computer reads as a number 
 * where one is expected but not received, letting us know 
 * something went wrong without breaking our code 
 * (i.e. throwing an error message).
 **/

/**
 * 3. undefined 
 * 
 * NaN is not the only negatively defined datatype. 
 * undefined and null both represent vacancies.
 * When a variable has been declared but not yet assigned, 
 * its value is undefined. Hey, that rhymed.
 **/
var waitingRoom;
console.log(waitingRoom);//<== prints undefined
console.log(typeof waitingRoom); //<== prints undefined
/**
 * undefined is a type with the single value undefined.
 * Best practice is never to deliberately assign a var undefined. 
 * Saving it for unintialized variables gives the type a clear
 * purpose: to show a variable is waiting for a value, 
 * or to designate an unexpected vacancy.
 **/

/**
 * 4. null:
 * 
 * If you want to deliberately empty out a variable, 
 * assign it to null. 
 **/ 
var trash = "trash";
//take out the trash
trash = null;
console.log(trash);// <== returns null
//For legacy reasons, typeof null returns object, not null.
console.log(typeof trash);// <== returns object
//If a variable returns the value null, it is also of the datatype null.

//We can think of undefined and null as the same value but separate types,
console.log(null == undefined); //<==prints true
//loose equivalency, performs type conversion
console.log(null === undefined);//<== prints false
//strict equivalency, does not perform type conversion

/**
 *5.  Strings:
 * 
 * The next datatype we'll look at is strings. When we looked at numbers,
 * we made sure NOT to put quotes around the number values. 
 * That's because putting quotes around them would make them strings.
 * A string is a character or characters enclosed in single ('') 
 * or double ("") quotes. 
 **/
var numNotString = 45; // stores number 45 in variable
console.log(typeof numNotString); //returns number
var stringNotNum = '45';// stores string '45' in variable
console.log(typeof stringNotNum); //returns string
console.log(numNotString === stringNotNum); //returns false
/**
 * The quotes tell the computer that the datatype is string.
 * Even back-to-back open and close quotes are read as a string.
 * Namely, an empty string.
 **/
var stringEmpty = ""; //initalizes empty string  
/**
 * Strings behave differentlly from numbers. 
 * If we add numNotString to itself, we will get its value doubled.
 * numNotString = 45. So numNotString + numNotString = 90. 
 **/
console.log(numNotString + numNotString); //<== prints 90;
/**
 * Strings do not behave like numbers. 
 * If we add stringNotNum ('45') to itself,
 * we don't get '90'. We get '4545'
 **/
console.log (stringNotNum + stringNotNum); //<== prints 4545
/**
 * In the world of strings, this is known as concatenation,
 * putting multiple strings together into one big string.
 **/
var stringOne = 'We are '; // initalizes a string value
var stringTwo = 'both strings!';// initalizes another string value
var stringConcat = stringOne + stringTwo; //concactenates the strings
console.log(stringConcat); //<==prints We are both strings!
/**
 * Notice the space after "are" in stringOne. 
 * When using the plus (+) operator to concactenate 
 * strings, JavaScript will not add a space for us. 
 * If we simply ended stringOne on the letter e, 
 * combining the strings would give us:
 *        "We areboth strings!" 
 * This would be awkward and confusing
 * 
 * Strings have a length property that returns the number
 * of characters in the string. 
 **/
var greeting = 'Hi';
console.log(greeting.length); //<== prints 2
//That greeting seems a bit informal. Let's make it longer.
greeting = 'Hello there';
//The space between the two words counts as a character
console.log(greeting.length);//<== prints 11
//The length property returns a number datatype
console.log(typeof greeting.length); //<== prints number
/**
 * In addition to the length property, we can grab the character
 * of a string at a given index with bracket notation.
 * 
 * JavaScript treats strings like numbered lists 
 * of characters. The list is zero-indexed, which means 
 * the first character in the list is at index 0 
 **/
var someLetters = 'asdfjkl'; //<==assigns string
var first = someLetters[0]; //<== first character in the string
console.log(first); // <== prints a
// calling the 1 index gives us the second character in the string
console.log(someLetters[1]);// <==prints s
// calling 2 gives us the third
console.log(someLetters[2]);//<== prints d
// and so on..
console.log(someLetters[3]);//<== prints f
// all the way until the last character, at length - 1
console.log(someLetters[someLetters.length - 1]); //<==prints l

//We cannot reassign individual characters in a string
var season = 'Zinter';
season[0] = 'W'; //no error, but doesn't work
console.log(season);//<== still prints Zinter
//we can only reassign the whole string at once
season = "Winter";
console.log(season); //<== prints Winter

/**
 * 6. Booleans:
 * 
 * A boolean is a datatype that can only hold two values: 
 * true and false. Like a flip of the switch, the boolean 
 * is either on (true) or off (false). This is perhaps the 
 * easiest of all the datatypes for the computer to understand.
 * its language is built off a binary (base 2) number system.
 **/
var bool = true;
console.log(bool); //<==prints true
console.log(typeof bool); //<==prints boolean
//comparison statements return boolean values
console.log(4 === 4); //<== prints true
console.log(4 === 5); //<== prints false
/**
 * Boolean values are used in if/then statements to control 
 * the flow of the code, executing certain statements only in 
 * the event that a statement returns a true value.
 **/
if (4 === 4){ //statement is true
  console.log("Four equals four"); //<== prints "Four equals four" 
}
//if we change one of the 4's to a 5, the computer will pass over the line
if (4 === 5){ //statement is false
  console.log("Four equals five"); //<== doesn't print anything
}
//we can simply put the boolean value right there in the conditional
if(true){
  console.log("it prints!"); //<== prints "it prints!"
}
/**
 * Putting a value  in a conditional field implies 
 * that that is a boolean value, but what happens 
 * if you put a number in the conditional field?
 **/
if (8){
  console.log(8);//<== prints 8
}
/**
 * Surprisingly, this does not throw an error. 
 * Instead, it prints 8 to the console.
 * Why? A number with a non 0 value is "truthy." 
 * It exists, so the computer reads it as true 
 * when forced to return a boolean value.
 **/
if(0){
  console.log("You won't see me");// <== does not print 
}
/**
 * Whereas other numbers are truthy, 0 is falsey. 
 * If forced to read 0 as a boolean, the computer returns false. 
 * Empty strings are also falsey
 **/
if(""){ 
  console.log("Dark side of the moon");// <== does not print
}
/**
 * Other strings are truthy. They return true 
 * if forced to be read as boolean
 **/ 
if("string"){
  console.log("Earth side of the moon"); //<== prints the text
}
//All negatively defined datatypes are falsey
if(NaN){
  console.log("will not print"); //NaN is falsey
}
if(null){
  console.log("will not print"); //null is falsey
}
if(undefined){
  console.log("will not print"); //undefined is falsey
}

/**
 * Simple and complex datatypes:
 * 
 * So far, we've only looked at simple (or primitive) datayptes.
 * Primitive datatypes hold only one immutable value.
 * By immutable, we mean the data is unchangeble. 
 * We can assign a var num to 5
 **/
var num = 5;
//and then reassign it to 6
num = 6;
/**
 * The value the variable holds has changed
 * from 5 to 6, but the numbers 5 and 6 
 * have not changed. They are both unchangeable, 
 * or immutable. The variable simply holds one 
 * of these values, until it holds a different value.
 * This immutability is a core feature of simple,
 * or primitive, datatypes. Numbers, strings, booleans,
 * null, undefined, and NaN are all simple datatypes.
 * They have a limited size of 8 bytes,
 * and they store immutable (or atomic) values.
 **/

/**
 * Complex datatypes, by contrast, store aggregate 
 * collections of values. They are unlimited in size.
 * Rather than holding the values themselves, they hold 
 * references to values. As a result, they are NOT
 * immutable the way simple datatypes are. This has concrete
 * implications for how we assign complex datatype values.
 * We will explre that after we've looked at a few complex datatypes.
 */

/**
 * 7. Arrays:
 * 
 * The first complex datatype we will look at is an array.
 * An array is a numbered (indexed) list of values 
 * enclosed in brackets ([]).
 **/
var arrayOfNum = [1, 3, 3, 7]; //<== 4 item array of numbers
//Like strings, arrays have a length property
console.log(arrayOfNum.length);//<==prints 4
//And we can access individual items with bracket notation
console.log(arrayOfNum[1]);// <==prints 3
//Like strings, arrays are zero indexed
console.log(arrayOfNum[0]);// <== prints 1
//Unlike strings, we CAN change individual items
arrayOfNum[2] = 4;
console.log(arrayOfNum); //<==prints [1,3,4,7]
//the push function adds items to the back of the array
arrayOfNum.push(8);
console.log(arrayOfNum); //<== prints [1,3,4,7,8]
//the pop function removes items from the back of the array
//and returns the removed item
console.log(arrayOfNum.pop()); //<== returns 8
console.log(arrayOfNum); //<== prints [1,3,4,7]
//the unshift function adds items to the front of the array
arrayOfNum.unshift(8,9);
console.log(arrayOfNum);//<==prints [8,9,1,3,4,7]
//the shift function removes items from the front of the array
//and returns the removed item
console.log(arrayOfNum.shift());// <== prints 8
console.log(arrayOfNum); // <== prints [9,1,3,4,7]

/**
 * Arrays can hold groups of any datatype, including strings
 * and other arrays. A single array can hold items of various
 * datatypes
 **/
 var heterogenousArray = [4, "string", [3,7,5], false];
 //this array contains a number, a string, an array, and a boolean

 /**
  * In much the same way that the computer reads quotes ("" or '')
  * and thinks "string", brackets ([]) can let the computer know that
  * we are dealing with an array, such that open and closed brackets
  * with nothing in them are read as an empty array
  **/
var arrayEmpty = [];
console.log(Array.isArray(arrayEmpty));//<== prints true

/**
 * We use the Array.isArray() function to determine if 
 * something is an array. It returns a boolean value.
 * We need this because the typeof function will return object
 **/
console.log(typeof arrayEmpty);//<== prints object

/**
 * 8. Objects:
 * 
 * An object is another complex datatype that holds a collection
 * of values as references. While arrays hold values at numbered
 * indexes, objects hold properties comprised of key / value pairs.
 * The keys are understood to be strings, so when assigning an
 * object, we don't need to put quotes around them. The values
 * can be any dataype, including arrays and other objects.
 * While strings are enclosed in quotes ('' or "") and arrays 
 * are enclosed in brackets ([]), objects are enclosed in curly
 * braces ({})
 */

var addToMe = {}; //<== assigns variable to empty object
console.log(typeof addToMe); //<== prints object
//we can use dot notation to add properties to our empty object
addToMe.firstThing = "A string";
//we can also use bracket notation, but we need quotes
addToMe["secondThing"] = 55;
console.log(addToMe);
//prints { firstThing: 'A string', secondThing: 55};
/**
 * the push, pop, unshift, and shit functions we use with arrays
 * are not compatiable with objects. We can only add properties with
 * the assignment operator and dot or bracket notation. We can remove
 * properties with the delete operator.
 */
delete addToMe.secondThing;
console.log(addToMe); //<==prints { firstThing: 'A string'}
/**
 * We don't need to assign variables to empty objects and then fill
 * them later. We can assign an object with properties already in it.
 * Let's see what that looks like
 */
var alreadyHasProperties = {
  firstProp : "string",
  secondProp : false,
  thirdProp : 55
}; 
//put commas at the end of each property except the last

/**
 * Deciding when to use an array or an object:
 * 
 * Arrays are good for lists of things, 
 * like students in a classroom. 
 * 
 * Objects are good to model one thing with 
 * different properties, like an individual student. 
 * 
 * Arrays comprised of objects are not uncommon.
 **/

var student1 = {
  number: 1,
  name: 'George',
  grade: 'B'
};

var student2 = {
  number: 2,
  name: 'Mary',
  grade: 'A'
};

var student3 = {
  number: 3,
  name: 'Sam',
  grade: 'D'
};

var classList = [student1, student2, student3];
console.log(classList); //<== prints array of objects

/**
 * Complex datatypes do not directly hold values.
 * They hold references to values. 
 * 
 *  We mentioned earlier that primitive datatypes are immutable.
 *  5 equals 5 and "I am a string" equals "I am a string" no matter
 *  what we do to the variable holding these values. 
 * 
 *  Complex datatypes, by contrast, do not directly hold values.
 *  Two arrays that hold the same numbers in the same order do not
 *  equal eachother.
 */
oneArray = [0,1,2,3];
notTheSame = [0,1,2,3];
console.log(oneArray === notTheSame); //<== returns false
/**
 * Even though the values are the same and in the same order,
 * the two arrays do not equal eachother because they point to
 * two separate references. By contrast, if we do the same thing
 * with a simple datatype like number...
 */
var aNumber = 12;
var sameNumber = 12;
console.log(aNumber === sameNumber); //<==returns true
/**
 * This is what we mean when we say that a primitive
 * datatype is immutable, or atomic.
 * There is only one reference to 12 that all the variables must share.
 * There are theoritically infinite references to [0,1,2,3,4].
 * 
 * We can still make two arrays equal eachother,
 * with the assignment operator (=). 
 */
oneArray = notTheSame;
console.log(oneArray === notTheSame); //<== returns true
/**
 * The values inside the two arrays have not changed. They are both
 * [0,1,2,3] just like before. Only now they are both pointing to the 
 * the same reference to [0,1,2,3]. This has its own consequences.
 * If we perform a function on oneArray:     
 * */
oneArray.push(4);
// and then check in on oneArray...
console.log(notTheSame);
/**
 * We'll see the same function has been performed on NotTheSame.
 * That's because when we assigned one as equal to the other,
 * we instructed them both to point to the same reference to the
 * values. A function performed on either variable is a function
 * performed on that reference, which both variables share.
 **/

/**
 * Complex datatypes referencing instead of directly holding values
 * is a quirk of JavaScript. While it can be confusing and accidentally
 * lead to bad code, it saves a ton of space, which is important for a
 * language used in web development. We want our code to be able to operate
 * on anybody's computer. We don't want to write a website that can only 
 * run on a laptop with a ram upgrade. Complex datatypes can take up tons 
 * of space if they hold actual values. Limiting them to references 
 * makes the web more accessible. 
 */

/**
 * 9. Functions:
 * 
 * Functions are complex data types that hold logic data.
 * They can stand alone as blocks of reusable code
 */

function sayHello(){
  return console.log("Hello");
};

/**
 * They can also be assigned to variables
 */

var friendlyGreeting = function (){return console.log("Hello, friend")};
// call the stand alone function like this
sayHello();
//call the function set to a variable like this
console.log(friendlyGreeting());

