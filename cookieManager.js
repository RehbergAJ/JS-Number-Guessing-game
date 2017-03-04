/*jshint browser:true */
/*jshint devel:true */
/*jshint esversion: 6 */

var toolkit = {
    
    CookieManager:function(){
        "use strict";
  
        this.setCookie = function(name, value, days) {
            var expires;
            if (days) {
                // construct date object - will be today's date by default
                var date = new Date();
                // set time to be today plus how many days specified
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                // concatenate the expires name/value pair with expiry date converted to GMT 
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }
            // create cookie
            document.cookie = name + "=" + value + expires;
        };

        this.getCookie = function(name) {
            var nameEQ = name + "=";
            // put cookie name/value pairs into an array split on the ; delimiter (since there could be multiple cookies)
            var ca = document.cookie.split(";");
            // loop through all name/value pairs
            for(var i=0;i < ca.length;i++) {
                // grab reference to each element
                var c = ca[i];
                // trim off leading space (if any)
                while (c.charAt(0) == " ") {
                    c = c.substring(1,c.length);
                }
                // search through string to find the target name of name/value pair and return the value
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length,c.length);
                }
            }
            // if name not found then return null
            return null;
        };    
    }
};