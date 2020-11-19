/**
 * Loops:
 * 
 * Loops let us run the same code multiple times,
 * generally until some condition is met.
 * 
 * Let's start with a while loop. 
 * While loops take the following form:
 * 
 * while (true){
 *   code
 * }
 * 
 * The code will keep running until the condition
 * becomes false, and it is up to put something in
 * the body of our loop that will falsify our true
 * statement.
 **/
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
/**
 * This wil print the numbers 0 through 10 the console in ascending order.
 * Before each iteration of the loop, the computer checks to see if the
 * condition is true. If it is, the loop runs.
 * At the start of our loop, our variable equals 0. 0 is less than or 
 * equal to 10. So the loop runs. It prints the value of i and then
 * increments i by 1. We loop back around again with i at 1. Still
 * less than or equal to 10, so we print and increment. This will keep
 * happening until we print 10 to the console, i increases to 11,
 * and it loops back around reading (11 <= 10) as false.
 * In fact, if we console.log i after running the loop, we get 11
 */
console.log(i); //<==prints 11
/**
 * We need to make sure our while loop is written correctly. 
 * If we had set the conditional to (i >= 10), it would have simply
 * never run because the condition would have been false from
 * the jump. Worse, if we had forgotten our i++ expression, our loop
 * would have been an infinite loop. If we don't put a statement
 * somewhere in our loop that makes our condition false eventually,
 * the loop will literally run forever, or more accurately until the
 * computer crashes. This is worse than an error message. This is like
 * when they cross the beams in ghost busters.
 * 
 * Let's redo that while loop so that it counts backwards from 10 to 0,
 * making sure to get all of our statements right so that the loop 
 * will run and it won't run infinitely 
 **/

 i = 10;
 while (i >= 0){
   console.log(i);
   i--;
 }

/**
 * For loops are like while loops, but we set all of our necessary
 * statements at the very beginning. In the header of a for loop,
 * we have three statements: our initilizer, our condition, and our
 * increment.
 * 
 * for (initialize; condition; increment){
 *    code
 * }
 * 
 * Our initialize statement sets a variable to some value.
 * Our condition is the statement that will terminate the loop
 * when it becomes false. Our increment is the thing we will 
 * change about the variable each time the loop is run.
 * For loops are commonly used to iterate arrays
 **/

 var colors = ["blue", "green", "yellow", "red"];
 //we can use a for loop to print each item of our colors array
 for (i = 0; i < colors.length; i++){
   console.log(colors[i]);
 } 
/**
 * Notice we didn't have to increment i in the body of our loop.
 * The header does that for us. Let's iterate through the same
 * array, but backwards this time.
 **/

for (i = colors.length - 1; i >= 0; i--){
  console.log(colors[i]);
}

/**
 * With all this rad functionality that arrays enjoy with for loops,
 * objects get a little jealous. Objects don't have numbered indexes,
 * so looping through their properties is not as simple as incrementing
 * or decrementing a number. Fortunately we have for-in loops. A for in
 * loop takes the form for [key] in [object] and runs the block of code
 * for every property the provided object has. Let's explore
 */

var student = {
  name : "Michael",
  age : "still young",
  grade : "let's talk about something else",
  };
//we can use a for-in loop to get information about student's properties

for (let key in student){
  console.log(key);
}

/**
 * This returns "name" "age" and "grade" because they are the keys
 * of the object's properties. We can use any variable name in place
 * of key. The syntax of for - in lets the computer know that the var
 * stands in place of the object's keys. We use key as a convention
 * because it makes everything less confusing. 
 * 
 * Now let's get the values of each property
 **/

 for (let key in student){
   console.log(student[key]);
 }

/**
 * This will print "Michael" "still young" and
 * "let's talk about something else"
 * Notice we use bracket notation to call the 
 * properties' values. This is not a choice.
 * We have no free will in the situation. If we
 * were to use dot notation, the object would be
 * looking for a key actually named "key." Because
 * we are supposed to use quotes in bracket notation,
 * if we do NOT use quotes, the computer reads it
 * as a string variable and loads the contents in
 * as a string. Here, this is exactly the behavior
 * that we want. 
 **/



