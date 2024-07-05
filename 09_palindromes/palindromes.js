const palindromes = function (string) {
    let array = Array.from(string.toLowerCase()).filter(char => "abcdefghijklmnopqrstuvwxyz01234568789".includes(char))
    return array.join("") === array.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
