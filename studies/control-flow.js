/**
 * Control Flow:
 * 
 * Control flow refers to which statements and expressions are executed
 * in our code and when. We can control the flow of our code with if
 * statements, else statements, if else statements, and switch statements.
 */

/**
 * If statements:
 * 
 * If statements work with boolean values to run lines of code
 * only under the condition that boolean's value is true. 
 * This is known as the conditional statment.
 **/

if (true){ //<==true conditional statement
  console.log("Run this code"); //<==code runs
}

if (false){//<==false conditional statement
  console.log("Don't run this code")//<==code doesn't run
}

/**
 * It usually won't be as simple as plugging the value true
 * or false into our conditional statement. Most of the time,
 * it will be a comparison operation that resolves to either
 * true or false
 **/
 if (9 >= 7){
   console.log("Run this code");
 }

 if (9 === 7){
   console.log("Don't run this code");
 }

/**
 * It isn't until we start to use variables whose
 * values might be unknown as the operands in our
 * comparison operations that we really start to see
 * the power of if statments.
 **/
var yearOfBirth = "2000";
var thisYear = "2020";
var drinkingAge = "21";

if (thisYear - yearOfBirth >= drinkingAge){
  console.log("Have a drink, grown up!");
} else {
  console.log("Go home, baby!");
}
/**
 * Our conditional statement above includes an else statement.
 * An else statement provides an alternative route, for if the
 * condition provided is false. One of the two statements will
 * surely run. We could also code this with a conditional 
 * ternary operator
 **/
console.log(thisYear - yearOfBirth >= drinkingAge ? "Have a drink" : "Go home");

/**
 * What if our hypothetical person is not old enough to drink,
 * but they are nice, and we don't want to be rude by calling them
 * a baby? We can use an else if statement to account for the 
 * possibility of them being nice
 **/

var isNice = true;

if (thisYear - yearOfBirth >= drinkingAge){
  console.log("Have a drink, grown up!");
} else if (isNice){
  console.log("Sorry, we can't serve you. But we like you. You are nice.");
} else{
  console.log("Go home, mean baby!");
}

/**
 * Syntactically, the difference between an else statement and an 
 * else if statement is that an else statement has no conditional
 * after it, whereas an else if statement does.
 * 
 * Functionally, an else statement is what happens if the parent if
 * statement is false. An else if statement requires both the parent
 * statement to be false and some other caveat to be true.
 * 
 * Neither else nor if else statements can exist without an if statement
 * first. 
 * 
 * The final else statement must run only if all the ifs and if elses
 * preceding it are false.
 **/

/**
 * Switch statements are another handy tool for controlling the flow of our code.
 * 
 * A switch statement is called with the keyword switch followed by
 * an expresion in parentheses.
 * 
 * Below are a series of cases, each representing a possible value 
 * the expression could resolve to.
 * 
 * At the end there is a default case that runs if the expression
 * resolves to none of the provided cases.
 * 
 * Each case is followed by a colon. The code corresponding to the case
 * ends with a break statement 
 **/

var colors = ["green", "blue", "red", "purple"];
//we set favColor to randomly pick an item of array colors
var favColor =  colors[((Math.floor(Math.random() * Math.floor(colors.length))))];
console.log("My favorite color is " + favColor);
/**
 * Our switch statement responds with a different message for each
 * favorite color. We've included one color in the array that is not
 * accounted for in our switch statement to trigger the default case
 **/
 switch (favColor){
   case "green": 
     console.log("You must love the trees!");
     break;
   case "blue":
     console.log("You must love the sky!");
     break;
   case "red":
     console.log("You must love blood and cold hearted revenge!");
     break;
   default:
     console.log("That is not a color we recognize");
 }  
/**
 * It is important to remember our break statement after each case.
 * The break statement tells the computer to stop executing code.
 * Below we have an identical switch statement to the one above,
 * only we've forgotten our break statement after our green case.
 * We've also switched the message for our blue case to 
 * "Cool colors are in this year."
 * 
 * Now, if favColor is green, we will get both "You must love the trees"
 * and "Cool colors are in this year." The computer will just keep running
 * code until it reaches a break statement.
 */
 switch (favColor){
   case "green": 
     console.log("You must love the trees!");
   case "blue":
     console.log("Cool colors are in this year.");
     break;
   case "red":
     console.log("You must love blood and cold hearted revenge!");
     break;
   default:
     console.log("That is not a color we recognize");
 }
