
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  
/**
 * Looping a triangle
 *  Write a loop that makes (argument) calls to console.log to output the following triangle:
 *
    #
    ##
    ###
    ####
    #####
    ######
    #######
    
 * (num = 7)    
 * It may be useful to know that you can find the length of a string by writing .length after it.
 *
 * var abc = "abc";
 * console.log(abc.length);
 *    // → 3
 * Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
 **/
 
  // declare string 
  let str = "";
  //loop 1 through 7
  for (let i = 1; i <= num; i++ ){
    str += "#"; //add #'s'
    if (str.length === i){ //only print when line is finished
      console.log(str); 
    } // end if statement
    
  }// end for loop
}//end function
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
/**
 * Write a program that uses console.log to print all the numbers from 1 to 15, 
 * with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
 * and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 * When you have that working, modify your program to print "FizzBuzz", 
 * for numbers that are divisible by both 3 and 5 
 * (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 **/
 
 for (let i = 1; i <= 15; i++){
   if (i % 5 === 0 && i % 3 === 0){ //both
     console.log("fizzbuzz");
   } else if (i % 5 === 0){ //just 5
     console.log("buzz");
   } else if (i % 3 === 0){ //just 3
     console.log("fizz"); 
   } else {                 //neither
     console.log(i);
   }
 }//end loop
  
  
}//end function

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(height) {

/**
 * Write a program that creates a string that represents an 8×8 grid, 
 * using newline characters to separate lines. At each position of the 
 * grid there is either a space or a “#” character. 
 * The characters should form a chess board.

    Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 * When you have a program that generates this pattern, define a variable size = 8 
 * and change the program so that it works for any size, outputting a grid of the given width and height.
 **/
 let chess = ""; //our board starts empty
 let tagNext = false; //the first square is a NOT hashtag
 // loop to (height of grid)^2
 for (let i = 1; i <= Math.pow(height,2); i++){ 
   if (tagNext){     //toggle between
     chess += "#";   //<=hashtags
     tagNext = false;// <fip>
   } else{           //and
     chess += " ";   //<=spaces  
     tagNext = true; // <flip>
   }//implement line break
    if (i % height === 0){ //we've completed the line
     chess += "\n"; //so add a line break
     if (height % 2 ===0){  //if height is even number
       tagNext = !tagNext;  //then repeat last character after linebreak
     }
    }
 } //end loop
 //print chessboard
 console.log(chess);

} //end function

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
