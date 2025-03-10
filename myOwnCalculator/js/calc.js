document.addEventListener("DOMContentLoaded", function() {
    let options = document.getElementById("options");
    let num2 = document.getElementById("num2");

    options.addEventListener("change" , function(){
        if (options.value === "√" || options.value === "!") {
            num2.disabled= true;
            num2.value= "";
        } else{
            num2.disabled = false;
        }
    })
})
function calculate() {
        let options = document.getElementById("options").value;
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let finalValue; 

        switch (options) {
            case "+": finalValue = add(num1, num2); break;
            
            case "-": finalValue = subtract(num1, num2); break;
            
            case "*": finalValue = multiply(num1, num2); break;
            
            case "/": finalValue = divide(num1, num2); break;

            case "^": finalValue = exponention(num1, num2); break;

            case "√": finalValue = squareRoot(num1); break;

            case "%": finalValue = percantage(num1, num2); break;

            case "!": finalValue = factorial(num1); break;
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
        if (num1 === 0 || num2 === 0) return "Undefined";
        return num1 / num2;
    }

    function exponention(num1, num2) {
        if (num2 === 0) return 1;
        num1 = BigInt(num1);
        num2 = BigInt(num2);
        
        return num1 ** num2
    }

    function squareRoot(num1) {
        if (num1 < 0) return "No Negative Number"
        return Math.sqrt(num1)
    }
    function percantage(num1, num2) {
        return divide(multiply(num1, num2),100) ;    
    }
    function factorial(num1) {
    if (num1 === 1 || num1 === 0) return 1;
    if (num1 < 0) return "No Negative factorial"
    num1 = BigInt(num1)
    let factori = 1n;
    for (let a=2n; a <= num1; a++) {
            factori = factori * a
    }
    return factori
    }
