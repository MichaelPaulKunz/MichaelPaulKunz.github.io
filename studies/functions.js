/**
 * Functions:
 * 
 * Functions are reusable blocks of code. 
 * Writing functions requires two steps.
 * First we must declare-- or define-- our function.
 **/
 function helloWorld(){
   console.log("Hello World");
 }
/**
 * Running the above code will not print anything to the console.
 * That's because we still have to call-- or execute-- our function.
 **/
helloWorld();//<== prints Hello World

/**
 * In both the declaration and execution of our helloWorld function,
 * the name is followed by empty parentheses. When functions are declared,
 * they can include parameters in those parentheses. But they don't have to. 
 * Our helloWorld function has no parameters, so the parentheses are empty. 
 * Let's declare a function with some parameters.
 **/
 function addNums(num1, num2){  //<==num1 and num2 are parameters
   return num1 + num2;
 }
/**
 * num1 and num2 are addNums' parameters. Parameters are variables 
 * locally scoped to the function. When we call our function, we
 * enter values in place of the parameters. These values are our
 * function's arguments.
 **/
 console.log(addNums(10, 15));//10 and 15 are arguments
 //prints 25
/**
 * We can run the addNums function multiple times with different
 * arguments to obtain different values
 **/
 console.log(addNums(2, 5));//<== 7
 console.log(addNums(12, 12));//<== 24
 console.log(addNums(100, 100));//<== 200
/**
 * In our helloWorld function, our print statement was in the function declaration.
 * Simply calling the function printed our string to the console.
 * In our addNums function, we returned a number value and 
 * called our function within a print statement. Both methods have the 
 * same output result. Just like a function declaration may or may not
 * have parameters, it may or may not return a value. 
 **/  

/** 
 * Functions encompass their own datatype, dealing {
 * in logic data.
 **/
console.log(typeof helloWorld); // <== prints function
console.log(typeof addNums);    //<== prints function
/**
 * A function called without its arguments is read as logic data.
 * A function called with its arguments is read as whatever data
 * the function returns.
 */
console.log(typeof addNums()); //<== prints number
console.log(typeof helloWorld()); //<== prints undefined
/**
 * A function that does not return any value 
 * returns the default value undefined.
 * 
 * Just like any other type of data, we can store function
 * values in variables.
 **/

var world = function(){console.log("The world waves back.")};

/**
 * helloWorld() and addNums() are both NAMED functions. They have 
 * their own names. We can use those names to call them.
 * The function stored in our world variable is an anonymous function.
 * It doesn't have a name. It can only be called or executed
 * via the variable that is assigned to it. 
 * 
 * We can simplify the syntax for our anonymous function declarations
 * with arrow function notation. Let's make a new addition function
 * and assign it with an arrow function
 *
 * Our function will add 5 to any number given as argument.
 * 
 * Here's how we'd code it as a named function:
 * function addFive (num){
 *    return num + 5;
 * } 
 * 
 * But we don't want a named function. 
 * We want an anonymous function stored in a variable:
 * 
 * var addFive = function(num){return num + 5};
 * 
 * To construct this as an arrow function, first we replace
 * the function keyword with an arrow between the parameter
 * and the body of the function:
 * 
 * var addFive = (num) => {return num + 5};
 * 
 * In this notation, what comes between the assignment operator
 * and the arrow is understood to be a parameter, so we can 
 * remove the parentheses.
 * 
 * var addFive = num => {return num + 5};
 * 
 * What's after the arrow is understood to be the return statement.
 * We can remove the curly braces and the return keyword.
 **/

var addFive = num => num + 5; //voila!
console.log(addFive(6)); //<==prints 11

/**
 * Arrow functions are useful when our anonymous function 
 * has only one parameter and the body of its declaration
 * spans only one return statement.
 **/

// Variables declared within a function are scoped to that function
function listerine(){
  var nowYouDont = "Now you see me.";
  return nowYouDont
} 
// We can see the value of nowYouDont by calling the listerine function
console.log(listerine()); //<== Now you see me.
//But nowYouDont does not exist outside the listerine function
//console.log(nowYouDont); //ReferenceError: nowYouDont is not defined

/**
 * Variables declared outside a function are globally scoped and can
 * be called within functions.
 **/
var today = "Wednesday";
function isNice(nice){
  if (nice){
    console.log(today + " is a nice day.");
  }
}
isNice(true);
/**
 * The function isNice takes a boolean value as argument and prints
 * today " is a nice day" if that value is true.
 * 
 * The var today is declared outside the function, and the function
 * can still use it. As we saw in our listerine example, the opposite
 * is not so. 
 * 
 * Be careful any time you take globally scoped variables declared outside
 * a function and manipulate them within a function. You may get unexpected
 * results. Function and variable declarations are both hoisted to the top 
 * of the code. But a named function's declaration is hoisted above the
 * variable declaration.. Anonymous functions are hoisted the same way other 
 * variables are. What's more, while a variable's declaration-- but not its 
 * assignment-- are hoisted, a function's internal code WILL be hoisted. With 
 * all these twists and turns, it can be easy pass an undefined value where 
 * you're expecting a string or a number. The specifics of the variations can 
 * be hard to keep track of, so make sure to max out your testing with any 
 * function that uses globally scoped variables.  
 **/

/**
 * Closure:
 * 
 * We can nest functions inside each other, i.e. declare one function
 * inside the declaration of another function. 
 **/

function parent (){
  var z = 10;
  function nested (){
    var x = 20;
    console.log("outer variable: " + z);
    console.log("inner variable: " + x);
    x++;
    z++
  }
  return nested;
}

/**
 * In our parent function example, we take it a step further than 
 * just nesting the functions. We actually have the parent function
 * return its nested function. Not much is going on in the functions
 * themselves. Parent function declares a variable, assigns it to 10.
 * Then the nested function declares a variable, assigns it to 20.
 * The nested function prints the values of both variables and Then
 * increments each by one.
 * 
 * We declare a variable to the parent function:
 */
var func = parent();
//Now we print that variable
console.log(func);
//This prints [Function nested]
/**
 * Notice that in the return statement, nested does not have 
 * parentheses after it. If you call a function without its
 * parameters, you simply call the lines of the function, the 
 * logic data that the function stores. We can override this by
 * calling the variable with parentheses after it.
 */
console.log(func());
/**
 * Javascript reads this as having the nested function called
 * with its parameters. Since the nested function is the return value
 * of the function that we set func to equal, we have effectively called
 * nested(). What prints to the console confirms this. We get the two
 * variable value statements.
 * 
 * There is something curious about this, though. Variables declared within
 * a function should only exist while that function is executing. When we
 * assigned var func the value of the parent function, the parent function 
 * executed. Afterward, var z whose value the nested function displays
 * and increments should have vanished. But we can see that it's still there.
 * This is because of closure, a feature whereby JavaScript preserves the 
 * scope chain of a variable. 
 * 
 * We can prove that the variable declared in the outer function is created
 * once when the outer function is called in the variable declaration and then
 * preserved, while the inner variable is created again every time the 
 * variable func is called, executing the nested function. Just call
 * the variable func over and over and watch the outer variable increment
 * while the inner variable keeps the same value.  
 **/
console.log(func()); //outer: 11, inner: 20
console.log(func()); //outer: 12, inner: 20
console.log(func()); //outer: 13, inner: 20

/**
 * This shows we are dealing with the same variable in the outer function
 * each time the inner function is called, but a newly created variable
 * in the inner function.
 */
