/**
 * Operators:
 * 
 * Operators act on our data, manipulating it, putting it in new variables,
 * cutting it in half, changing its type, etc. The pieces of data that 
 * operators do their work on are called operands. One way we can identify
 * different kinds of operators is by how many operands they work on at once.
 * Unary operators manipulate one operand. Binary operators manipulate two operands,
 * and ternary operands manipulate three operands. Let's start by looking at binary
 * operators because those are the ones we'll be working with the most. 
 **/

/**
 * =, +=, -=, x=, /=
 * Assignment operators:
 * 
 * Often times, the first thing we do with a variable after declaring it is assign it 
 * to a value. We do this by using the equals (=) assignment operator. Just put our
 * variable on the left, the value we'd like to assign it on the right, and the 
 * equal sign in the middle.
 **/
var smooth = "operator"; 
/**
 * We can also use the equals assignment operator to reassign variables that have
 * already been initialized.
 **/
smooth = "Sade";
/**
 * Simple enough, but there are some other assignment operators that mostly work
 * on number values and combine assignment with an arithmetic operation.
 * 
 * The first one we'll look at is plus-equals (+=). It takes the value on its left
 * side and adds it by the value on its right side 
 */
var tell = 12;
tell += 6; //tell = tell + 6, or 18
/**likewise, the plus-minus(-=) operator subracts a number on the 
 * right from a number on the left
 **/
tell -= 6; // tell = 12 again.
// *= and /= respectively multiply and divide by the number on the right
tell *= 10; // tell = 120 (12 * 10)
tell /= 2; // sweet = 120 / 2 = 60
/**
 * The += operator can also be used to concactenate a new string to the 
 * end of a string
 **/ 
var rich = "homie ";
rich += "quan"; //<== rich = homie quan

/**
 * +, 1, *, /, %
 * Arithmetic Operators:
 * 
 * Arithmetic operators act on two number values 
 * and give us a third number value.
 **/
console.log(5 + 5);//prints 10
console.log(5 * 5);//prints 25
console.log(5 - 5);//prints 0
console.log(5 / 5);//prints 1
console.log(5 % 5);//prints 0
/**
 * While the first four operators are pretty self-explanatory 
 * and familiar from fourth grade math, the % operator is 
 * less so. It returns the remainder of the first number
 * divided by the last. So, actually, still pretty fourth
 * grade math. It's useful for figuring out if a number is 
 * even or odd, and for determining if a number is divisible
 * by another number.
 **/
console.log(10 % 2); //<==prints 0. So 10 is an even number
/**
 * The plus (+) operator can also be used to concactenate strings
 **/
var souffle = "I steak ";
var imSkrate = "my plate";
console.log(souffle + imSkrate);//<== prints "I steak my plate"

/**
 * ===, ==, >, <, >=, <=, !==, !=
 * Comparison Operators:
 * 
 * Comparison operators are binary operators 
 * that compare two values and return a boolean value.
 **/
console.log(9 > 8); //prints true, 9 is greater than 8
console.log(9 < 8); //prints false, 9 is not less than 8
console.log(7 >= 7); //true, 7 is either greater than or equal to 7
console.log(9 <= 7);//false 9 is neither less than nor equal to 7

/**
 * JavaScript allows for both strict and loose comparison
 * when determining if one value equals another value.
 * Strict equality is represented by three equal signs (===)
 * It compares both the value and the type of the two operands
 * Loose equality is represented by two equal signs(==)
 * It compares only the value of the operands, performing a 
 * type conversion so that it still returns true if they are
 * of different types.
 **/
console.log(10 === 20);//<==prints false
console.log(10 === 10);//<==prints true
console.log("10" === 10);//<==prints false
console.log("10" == 10);//<==prints true
/**
 * The strict not equal (!==) and loose not equal (!=)
 * operators do the same thing, only in reverse
 **/
console.log(10 !== 10);//<==prints false
console.log(10 !== 20);//<==prints true
console.log("10" !== 10);//<==prints true
console.log("10" != 10);//<==prints false
/**
 * Unless some function specifically calls for loose 
 * comparison, always use strict. Using loose can
 * cause unpredictable behavior down the line.
 **/

/**
 * &&, ||, !
 * Logical Operators:
 * 
 * Logical operators, like comparison operators, are binary 
 * operators that yield boolean values. Their operands are
 * either boolean values or comparison statements that resolve
 * to boolean values
 * 
 * Two logical operators in JavaScript: 
 * And(&&)
 * Or(||)
 * 
 * For an and operation to resolve to true, 
 * both boolean values must be true
 **/
console.log(true && true);//<==prints true
console.log(true && false);//<==prints false
console.log(false && false);//<==prints false
console.log(5 > 3 && 2 === 1);//<===prints false
/**
 * For an or operation to resolve to true, one of the two
 * boolean values must be true 
 **/
console.log(true || true);//<==prints true
console.log(true || false);//<==prints true
console.log(false || false);//<==prints false
console.log(5 > 3 || 2 === 1);//<==prints true

/**
 * The band (!) operator is also a logic operator as well
 * as the first unary operator we will look at.
 * It switches a true value to false and vice versa
 **/
console.log(!true);//<==prints false
console.log(!false);//<==prints true


/**
 * Comparison and logical operators are both
 * useful in conjunction with if, else, and
 * if else statements to control the flow
 * of your code!
 **/

/**
 * +, -, !, typeof
 * Unary Operators:
 * 
 * Unary Operators work with only one operand.
 * We looked at the unary bang (!) operator when
 * we explored logic operators. It flips the
 * true or false boolean value of a piece of data.
 * 
 * The unary minus (`-`) operator goes before the operand 
 * and flips its positive or negative numeric value  
 **/
var posi = 99;
console.log(-posi); //<==prints -99 
var neg = -10;
console.log(-neg); //<==prints 10
/**
 * The unary plus (+) operator keeps the same positive or 
 * negative value of the operand. The only actual change
 * it makes to data is that it pushes non number values into
 * number or NaN values.
 **/
var notNumber = "String";
console.log(+notNumber);// <==returns NaN
console.log(+true);//<== returns 1
console.log(+false);//<==returns 0

/**
 * The unary typeof operator goes before the operand and
 * returns the type of that operand
 **/
var way = "some";
console.log(typeof way); //<==return string

/**
 * (a ? b : c)
 * Ternary Operators:
 * 
 * This conditional (a ? b:c) operator is the only ternary operator
 * in JavaScript. It takes one condition followed
 * by a question mark and executes one of two expressions separated
 * by a colon, based on if the condition is true or false. 
 * It can be used in place of an if statement
 **/
console.log(true ? 1 : 0); //<<==prints 1
console.log(false ? 1 : 0);//<==prints 0