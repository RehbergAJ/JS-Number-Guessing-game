/*jshint browser:true */
/*jshint devel:true */
/*jshint esversion: 6 */

Number.prototype.getRandom = function(low, high) {
    "use strict";
    
    if ((low === undefined) || (high === undefined)){
        low = 1;
        high = 10;
    }
    var randomNumber = 0;
    //calculate the random number
    randomNumber = Math.round(Math.random() * (high - low)) + low;
    
    return randomNumber;
};

Number.prototype.easterEgg = "Drew added this hidden prop";
    