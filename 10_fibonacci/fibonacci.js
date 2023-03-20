const fibonacci = function(memberNo) {
    if (memberNo < 0) return "OOPS";
    if (memberNo === 0) return 0;
    let a = 1;
    let b = 1;
    let c = 0;
    for (let count = 2; count < memberNo; count++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
