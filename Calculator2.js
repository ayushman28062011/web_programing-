function calculate() {
    let options = document.getElementById("options").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let finalValue;

    switch (options) {
        case "+": finalValue = add(num1, num2);break;
        
        case "-": finalValue = subtract(num1, num2);break;
        
        case "*": finalValue = multiply(num1, num2);break;
        
        case "/": finalValue = divide(num1, num2);break;
        
    }
    printFinalValue(finalValue);

}

function printFinalValue(finalValue) {
    document.getElementById("calc").value = finalValue;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}