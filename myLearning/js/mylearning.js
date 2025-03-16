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
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;    
}

function findingSmallestValue(arr) {
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
        }
    }
    return minValue;
}

function findMinMax(arr) {
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
    let n = arr.length;

    for (let i = 0 ; i < n / 2 ; i++) {
        let c = arr[i]
        arr [i] = arr [n - i - 1];
        arr [n - i - 1] = c;
    }
    return arr;
}