const removeFromArray = function(array, ...targets) {
    return array.filter(target => !targets.includes(target));
};

// Do not edit below this line
module.exports = removeFromArray;
