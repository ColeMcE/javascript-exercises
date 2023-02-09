const fibonacci = function(fibNumb) {
    const fibonacciArray = [];
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= 100; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        fibonacciArray[i] = n1;
    }
    if (fibNumb < 0) {
        let oops = "OOPS";
        return oops;
    }
    else {
        return fibonacciArray[fibNumb];
    } 
};

// Do not edit below this line
module.exports = fibonacci;
