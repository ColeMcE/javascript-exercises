const repeatString = function(string, num) {
    let stringValue = string;
    if (num > 0) {
        for (i = 1; i < num; i++) {
            string += stringValue;
            
            
        }
    }
    else if (num === 0){
        string = "";

    }
    else {
        string = "ERROR";
    }
    return string;  
    
    
};

// Do not edit below this line
module.exports = repeatString;
