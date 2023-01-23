const sumAll = function(num1,num2) {
    if (!(num1 >0) || !Number.isInteger(num1)) return 'ERROR';
    if (!(num2 >0 )|| !Number.isInteger(num2)) return 'ERROR';


    let start = (num1<num2) ? num1 : num2;
    let end = (num1>num2) ? num1 : num2;
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
