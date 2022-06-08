const reverseString = (string) =>{
    let output = string.split("").reverse().join("");
    return output;
}

module.exports = reverseString;