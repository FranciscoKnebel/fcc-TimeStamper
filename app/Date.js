'use strict';

module.exports = function (dateParameter) {
    var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var date = {};
    var time = {};
    
    
    if(isNaN(dateParameter)) {
        date = new Date(dateParameter);
        
        if(date == "Invalid Date")
            time = setTime(date, false);
        else
            time = setTime(date, true);
    }
    else {
        date = new Date(parseInt(dateParameter));
        time = setTime(date, true);
    }
    
    /*if(time.unix === null)
        time = { error: "Invalid input!" };*/
    
    return time;
    
    
    
    
    function setTime(date, isValid) {
        var aux = { unix: null, natural: null };
        
        if(isValid) {
            aux.unix = date.getTime();
            aux.natural = [months[date.getMonth()], date.getDate() + ',', date.getFullYear()].join(' ');
        }
        
        return aux;
    }
};