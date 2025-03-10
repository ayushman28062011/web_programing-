function exchangeUsingThirdVariable(a, b) {
    let c = a;
    a = b;
    b = c;
    console.log(a + " " + b);
}
//exchange(5, 10)