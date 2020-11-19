/** 
 * VARIABLES:
 *
 *  0. To hold things in memory during the life-cycle of a program, we can use variables.  
 *  Variables are named identifiers that can point to values of a particular type, 
 *  like a Number, String, Boolean, Array, Object or another data-type.  
 *  Variables are called so because once created, 
 *  we can CHANGE (or VARY) the value (and type of value) to which they point.
 **/


 /** 
 * 1. To create a variable we use the keyword var, 
 *    followed by our variable's name (id or alias).
 *
 * 2. There are 2 phases of using variables: 
 *    declaration and initialization (or assignment).
 **/

//1. declaration  

/** 
 * To work with variables in JavaScript, we first must declare them. 
 * This is as simple as typing the keyword var 
 * and following it with the name of our variable.
 **/

var myName;

/** 
 * At the declaration phase, the variable myName is undefined 
 * because we have NOT initialized it to anything
 **/

console.log(myName); // prints => undefined

/** 
 * Notice the unique capitalization of myName. This is known as camelCase.
 * The first word is all lowercase, and every word after it is capitalized.
 * Variables in JavaScript are case sensitive. 
 **/

var myJob;
console.log(myJob); // prints => undefined
//console.log(MyJob); // yields ReferenceError

/** 
 * Removing the comment tag yields a ReferenceError at runtime.
 * That's cause the variable MyJob has not been declared. 
 * Only the variable myJob has been declared. 
 **/

/** 
 * JavaScript does NOT require us to declare our variables in camelCase. 
 * Capitalizing the first letter (or no letters) will not throw an error,
 * as long as we do it the same way every time.
 * camelCase is encouraged for consistency's sake. 
 * It makes our code more readable, and it reduces the likelihood 
 * of accidentally calling a variable with the wrong letters capitalized. 
 * This is extremely helpful during debugging, especially when working in groups.
 **/ 
var dayOfWedding; //this will PLEASE your future self, your coworkers, and your fiance
var dAYoFwedDiNG; // this will INFURIATE your future self, your coworkers, and your fiance
/** 
 * Variable names must begin with a letter or an unerscore (_). 
 * Starting with a number will make the computer think you are referencing a number value.
 **/
var num5;      //this is okay
var _num5;    //this is okay
//var 5num; //this throws a SyntaxError
  
//You can't use a JavaScript keyword as a variable name. 
//var console; <= No! Computer thinks you're trying to print!
//var var; <== Computer is still waiting for you to name the variable.

/**
 * Name your variable something useful and specific.
 * If you're storing the color of your shoelaces, 
 * then go ahead and name it colorOfLaces.
 * Sure, you can just name it x instead. 
 * The computer may not know the difference, but you will. 
 * Humans have to read your code too. Why not make it easy? 
 **/

// 2. initialization or assignment //

/**
 * Once you have declared your variable, 
 * the next step is to initialize it, or assign it a value.
 * This is done with the assignment operator, 
 * represented by one equal sign. 
 **/

myName = 'michael'; //assigns value of 'michael' to the variable myName

/**
 * When this code runs, the computer reads the line right to left. 
 * It first registers the String value 'michael.' 
 * Then it reads the assignment operator, and determines it must store the value in a variable.
 * The variable itself can be thought of as a box that contains a value. 
 * Now that it's assigned, any time the computer reads myName, 
 * it will replace it with 'michael' instead of undefined.
 **/

console.log('michael');  //prints ==> michael
console.log(myName);    // also prints ==> michael 
//initialize more variables we declared earlier
myJob = 'coder';  // ... and so can you!
dayOfWedding = 'Thursday'; // perfect day for a wedding
dAYoFwedDiNG = 'never'; // you don't deserve love if you declare variables like this


/**
 * So far, we have assigned all of our variables to String values.
 * A string is a character or a group of characters wrapped in quotes.
 * You can use single ('') or double ("") quotes. You can even use backticks (``).
 * Strings are one of many datatypes we can store in variables.
 * We can also store Numbers in variables.
 **/

num5 = 5; //no quotes needed. 5 is a number, not a string
console.log(num5); // prints => 5


// 3. re-assignment //

/**
 * Earlier we said variables can change (key word: vary) their value.
 * Re-assigning a variable is pretty easy.
 * We just repeat our assignment statement from earlier, 
 * only with a different value. 
 * Let's say I'm having an identity crisis, and I want to change my name to bob.
 */
myName = 'bob'; // ==> changes value of myName from 'michael' to 'bob'
console.log(myName); // prints => bob
//It's just that easy.  Turns out it's raining on Thursday? That won't do!
dayOfWedding = "Friday"; //much better
//We can declare and initalize a variable all in one line
var myVariable = 1;
// When we reassign it, we don't need to stay in the same type.
myVariable = true; // reassigns to boolean value
myVariable = "someString"; //reassigns to string value

/**
 * CONSTANTS:
 * Once initialized, we can reassign a variable. 
 * we cannot do this with constants, which are called with the const command
 **/ 
const MYCONST= 1;
//MYCONST = 2; //TypeError
/**  
 * Removing the comment tag from the beginning of the line will yield a TypeError at runtime. 
 * This is because we cannot reassign a constant. 
 * Simply stated, the value of a variable varies while the value of a constant is constant. 
 * 
 * It's common practice to use ALL CAPS for const declarations.
 * 
 * In math and science, constants and variables are opposites.  
 * But in JavaScript, we can think of constants as a subset of variables, 
 * like variables with different limitations and specifications. 
 **/
const PI = 3.14; //pi, a mathematical constant, never changes
const C = "the speed of light"; //C, a scientific constant, is also a fixed value

/**
 * let:
 * 
 * If we want to declare a variable with a limited scope, we can use the let
 * keyword instead of the var keyword. Using the let keyword is kind of like
 * counting on your fingers. We don't want a container to carry a reusable
 * piece of data, like the day of a wedding, our name, or occupation.
 * We just need to keep track of a value temporarily, so we let t equal, 
 * for example, the number of times a top spins before falling.
 * Later, we might want t to represent something totally different, 
 * and we're glad we defined t as a let, instead of a var. 
 * because the computer has already forgotten about it. 
 * Lets are often numbers, and it's common to declare them with a single letter
 **/

//let i equal 10
let i = 10; //declaring and assigning a let in one line reads like human language
let j; //but it's still okay to only declare the let and initalize it later

/**
 * SCOPE:
 * To understand how a let differs from a var, we need to understand scope. 
 * Code in JavaScript contains functions and other code blocks, like loops,
 * and if statements. If a let is declared inside a loop or an if statement, 
 * its scope is limited to that code block. If you try to call the let 
 * outside of that code block, the computer won't recognize it.
 **/ 

var counter = 0;
while (counter < 10) {
  counter += 1;
  let x = counter; // let declared in code block
  var example = "I'm still here";
  console.log(x); //prints 1... 10
}

console.log(counter); //prints 10
console.log(example); //prints "I'm still here"
//console.log(x); //yields ReferenceError

/**
 * Removing the comment tag from the above line yields a ReferenceError at runtime.
 * That's because let x was declared in a while loop, so its scope only
 * encompasses the while loop. The var example, however, has a global scope
 * when declared within a code block. So even though we declared it 
 * within the loop, we can call it outside the loop.
 **/

/**
 * Constants have the same scope as lets.
 * A constant declared in a code block will 
 * vanish outside the code block.
 **/

if (true) {
  const NEWCONST = "Local Scope";
  var newVar = "Global Scope";
  let newLet = "Local Scope";
}
console.log(newVar);//<== prints Global Scope
//console.log(NEWCONST); //<== yields reference error
//console.log(newLet); //<==  error
/**
 * A var declared in a function, or a reusable block of code, 
 * will be scoped to the function, the same way a const or a let
 * is scoped to a code block.
 **/

function heavens(){
  var vanish = "Where did I go?";
  survivor = "I'm still here."; //assigned without declaring
  const trump = "president";
  let myPeople = "go";
}

heavens();
console.log(survivor);
//console.log(vanish); //<== yields ReferenceError
//console.log(trump);  //<== yields ReferenceError
//console.log(myPeople);//<== yields ReferenceError

/**
 * A var behaves in a function the same way a let and a const behave in a code block.
 * So var vanish, declared in the function heavens, 
 * yields a ReferenceError when called outside the function. 
 * Lets and consts are also locally scoped to functions, just
 * as they are locally scoped to code blocks. So calling our let myPeople no longer returns
 * the value go. And trump, thank heavens, is no longer president.
 * 
 * You'll notice we have something called survivor that is declared in the function
 * and still manages to be called outside the function. survivor is a variable. Here's
 * the dirty little secret about variables. You don't actually have to declare them
 * with the keyword var. You can simply type a word, hit the equal sign, and type a value.
 * However, the var keyword implements local scope in functions. Without
 * any keyword, variables you declare will all be globally scoped. Because so much of
 * JavaScript coding is done in functions and code blocks, it behooves us to understand
 * the different keywords and the scopes they allow. Using the var keyword ensures us that
 * our variable will only exist in the function we're working in.
 * 
 * Real talk, do NOT assign variables without declaring them with var, let, or const.
 * Just don't do it. It's a bad idea. It's always a bad idea.
 **/

/**
 * Hoisting:
 * 
 * The last thing we need to understand about how vars, lets, and consts, differ from eachother
 * is hoisting. Hoisting refers to the order in which the computer collects data at runtime.
 * At run time, the computer reads code top to bottom, with some exceptions. 
 * Var declarations, for example, are hoisted to the top of their scope (the top of the program
 * or, if they are declared within a function, the top of that function).
 **/
console.log(boo);
var boo = "Scared ya, didn't I?";
/**
 * This does not yield a ReferenceError, even though boo is not defined until after it is called.
 * var declarations (as well as function declarations) are executed before any of the other code.
 * We refer to this as being "hoisted to the top." It's like the computer takes all those declarations,
 * and sticks them in the top lines before it does anything, or sweeps through twice, executing
 * those statements before sweeping through again to properly run the code.
 * 
 * Even though we don't get an error, we still don't get the value of boo we assigned. 
 * Only the var declaration is hoisted. Not the assignment. We need to call the variable
 * again, after it's been assigned, to get the value we want.
 */
console.log(boo); //<== prints "Scared ya, didn't I?"

/**
 * Let and const declarations are NOT hoisted. 
 * This is the final thing that makes them different
 * from var declarations. 
 **/ 

//console.log(suffering); //<== ReferenceError
const suffering = "pain"; 
console.log(suffering); //<== prints pain 

//console.log(itSnow); //<== ReferenceError
let itSnow = ("Let it snow");
console.log(itSnow); //<== prints itSnow