"use strict";

let counter = 0;
const array = [];
theOnlyFunction(); 


function theOnlyFunction() {
    array.unshift(counter);
    counter++;


    if (counter > 9 ) {
        array.pop(array);
    }

    setTimeout(theOnlyFunction, 1500);
 
    console.log(array);

}