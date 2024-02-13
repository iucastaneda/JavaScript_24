/*
Israel Castaneda
lib_convert.js
INFO_2124_WW
Shaw
2/12/2024
*/
"use strict"

class SuperDate extends Date {
    constructor(dateUnit) {
        if (dateUnit === undefined) {
            super();
        } else {
            super(dateUnit);
        }
    }

    getFullDayName() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[this.getDay()];
    }

    getShortDayName() {
        return this.getFullDayName().slice(0, 3);
    }

    getFullMonthName() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[this.getMonth()];
    }

    getShortMonthName() {
        return this.getFullMonthName().slice(0, 3);
    }
}

// Export the SuperDate class
//module.exports = SuperDate;

$(document).ready(function() {
    const mySuperDate = new SuperDate();
    $('#fullDayName').text(mySuperDate.getFullDayName());
    $('#shortDayName').text(mySuperDate.getShortDayName());
    $('#fullMonthName').text(mySuperDate.getFullMonthName());
    $('#shortMonthName').text(mySuperDate.getShortMonthName());
});
