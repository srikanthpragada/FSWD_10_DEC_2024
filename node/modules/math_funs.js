function isEven(n) {
    return  n % 2 === 0
}

function isOdd(n) {
    return  n % 2 !== 0
}

exports.add = function (a, b) {
    return a + b;
}

// export functions and variables 
exports.isEven = isEven 
exports.isOdd = isOdd 
exports.SIZE = 100


 
