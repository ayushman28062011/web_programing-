/*
    function <function name> (<parameter1>, <parameter2>, <parameter3>...) {

    }
*/

function displayMyName(firstName, lastName) {
    myName = firstName + " " + lastName;
    console.log(myName);

    return myName;
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}


function validateInput(event) {
    const key = event.key;
    if (!/[0-9]/.test(key)) {
        event.preventDefault();
    }
}

function validatenumbers(event) {
    const key = event.key;
    if (!/[0-9]/.test(key)) {
        event.preventDefault();
    }
}
 