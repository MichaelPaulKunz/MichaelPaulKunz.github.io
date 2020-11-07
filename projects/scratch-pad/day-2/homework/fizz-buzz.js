// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    for (var i = 1; i <= 100; i++){
            //first case, number is divisible by both 5 and 3
        if (i % 5 === 0 && i % 3 === 0){
            console.log ("FizzBuzz");
            // second case, number is only divisible by 5
        } else if (i % 5 === 0){
            console.log ("Buzz");
            // third case, number is only divisible by 3
        } else if (i % 3 === 0){
            console.log ("Fizz");
            // default case, number is neither divisible by 5 nor 3
        } else {
            console.log(i);
        }
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}