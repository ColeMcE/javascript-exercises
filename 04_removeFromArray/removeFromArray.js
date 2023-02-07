const removeFromArray = function(arrays, ...args) {
        let a = arrays;
        let b = args;
        let c = a.filter(d => !b.includes(d));
        return c;
    
};

// Do not edit below this line
module.exports = removeFromArray;
