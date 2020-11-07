// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // makeContact should return an object with th eperson's contact info
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
            
        },
        // we did this with Ryan's help in class
        addContact: function(contact) {
            contacts.push(contact);
        },
        //input: full name string output: contact object edge case: names doesn't match any in list, return undefined
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++){
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                    return contacts[i];
                }
            }
            
        },
        //input: object ; output: none ; edge case: object not in array
        removeContact: function(contact) {
            //search contacts array
            for (var i = 0; i < contacts.length; i++){
                // if provided object equals object at index, remove it
                if (contact === contacts[i]){
                    contacts.splice(i, 1);
                }
            }
                
            
        },
        // input none: output: multi-line string 
        printAllContactNames: function(){
            //declare array to store full names
            var fullNames = [];
            //iterate array
            for (var i = 0; i < contacts.length; i++){
            //push strings into new array     
                fullNames.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            }
            //return array joined into string broken up by line breaks
            return fullNames.join("\n");
            
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
