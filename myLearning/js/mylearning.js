function exchangeUsingThirdVariable(a, b) {
    let c = a;
    a = b;
    b = c;
    console.log(a + " " + b);
}

function exchangeWithoutUsingThirdVariable (c, d) {
    c = c + d;
    d = c - d;
    c = c - d; 
    console.log(c + " " + d);
} 

function isPrime(n) {
    if (n < 2) return "Not a prime"; 
    for (let i = 2; i * i <= n ; i++) { 
        if (n % i === 0) {
            return "Not a prime";   
        }
    }
    return "Prime";
}

function sqrt(n) {
    if (n < 0) return "not a prefect sqaure"
    for (let i=2 ; i*i <= n ; i++){
        if (i * i === n ) return i;
    }
    return 0;
}

function findingLargestValue(arr) { 
    if (arr.length === 0) return "Undefined"
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;    
}

function findingSmallestValue(arr) {
    if (arr.length === 0) return "Undefined"
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        }
    }
    return minValue;
}

function findMinMax(arr) {
    if (arr.length === 0) return "Undefined"
    let minValue = arr[0];
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return { minValue,  maxValue };
}

function rotateArray (arr) {
    if (arr.length === 0) return "Undefined"
    let n = arr.length;
    let array = new Array();

    for (let i = 0 ; i < n ; i++) {
        array [n - i - 1] = arr[i];
    }
    for (let i = 0 ; i < n ; i++) {
        arr[i] = array[i];
    }
    return arr;
}

function rotateArrayWithoutTempArray (arr) {
    if (arr.length === 0) return "Undefined"
    let n = arr.length;

    for (let i = 0 ; i < n / 2 ; i++) {
        let c = arr[i]
        arr [i] = arr [n - i - 1];
        arr [n - i - 1] = c;
    }
    return arr;
}


function secondMax(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else {
            if (arr[i] > secondMax && arr[i] < max) {
                secondMax = arr[i];
            }
        }   
    }
    return secondMax
}   

function secondMin(arr) {
    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else {
            if (arr[i] > min && arr[i] < secondMin) {
                secondMin = arr[i];
            }
        }
    }
    return secondMin
}

function secondMaxMin(arr) {

    let max = -Infinity, secondMax = -Infinity;
    let min = Infinity, secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) { 
            secondMax = arr[i];
        }

        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] > min && arr[i] < secondMin) { 
            secondMin = arr[i];
        }
    }

    return {
        secondMax , secondMin
    }
}

function table(n) {
    console.log("TABLE OF " + n);
    for (let i = 1; i <= 10; i++) { 
        console.log(n + " X " + i + " = " + n * i);
    }

    return "Table of " + n + " printed...";
}


function halfstarsUpwards() {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row +="*"
        }
        console.log(row)
    }     
}  

function halfstarsDownward() {
    let n = 5;
    for (let i= 5 ; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i ; j++) {
            row +="*"
        }
        console.log(row)
    }
}   

function halfstars() {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row +="*"
        }
        console.log(row)
    }  
    for (let i=4; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i ; j++) {
            row +="*"   
        }
        console.log(row)
    }
}