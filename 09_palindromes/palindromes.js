const palindromes = function (inputString) {
    // My worse way
    // punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    // plainText = inputString.replace(punctuationRegex, "").replace(/\s/g, '').toLowerCase();
    // reversedText = plainText.split("").reverse().join("");
    // return reversedText === plainText;


    // Better solution
    const processedString = inputString.toLowerCase().replace(/[^a-z]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
