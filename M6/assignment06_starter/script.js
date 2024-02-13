/*
Israel Castaneda
script.js
INFO_2124_WW
Shaw
2/10/2024
*/
"use strict";
//This is a helper function to convert a string
//to a numeric value
//Returns:
//      - An integer or a float value of the string
//Throws:
//      - Error if the string is not a number
function convertToNumber(numVal) {
    if(!isNaN(numVal)){
        if(Number.isInteger(parseFloat(numVal))) {
            return parseInt(numVal);
        } else {
            return parseFloat(numVal);
        } 
    } else {
        throw new Error("Input is not a valid number.");
    }
}

$(document).ready(function() { 

    $('#convertButton').on('click', function() { 
  
      var valueToConvert = parseFloat($('#valueHolder').val()); 
  
      var selectedOptionValue = $('#conversionSelector').val(); 
  
       
  
      if (isNaN(valueToConvert) || valueToConvert < 0) { 
  
        alert("Error: Value to convert must be a positive number!"); 
  
        return; 
  
      } 
  
       
  
      switch(selectedOptionValue) { 
  
        case 'm2k': 
  
          // Miles to Kilometers conversion 
  
          var result = valueToConvert * 1.60934; 
  
          alert(valueToConvert + " miles is equal to " + result + " kilometers."); 
  
          break; 
  
        case 'k2m': 
  
          // Kilometers to Miles conversion 
  
          var result = valueToConvert / 1.60934; 
  
          alert(valueToConvert + " kilometers is equal to " + result + " miles."); 
  
          break; 
  
        case 'p2k': 
  
          // Pounds to Kilograms conversion 
  
          var result = valueToConvert * 0.453592; 
  
          alert(valueToConvert + " pounds is equal to " + result + " kilograms."); 
  
          break; 
  
        case 'k2p': 
  
          // Kilograms to Pounds conversion 
  
          var result = valueToConvert / 0.453592; 
  
          alert(valueToConvert + " kilograms is equal to " + result + " pounds."); 
  
          break; 
  
        case 'f2m': 
  
          // Feet to Meters conversion 
  
          var result = valueToConvert * 0.3048; 
  
          alert(valueToConvert + " feet is equal to " + result + " meters."); 
  
          break; 
  
        case 'm2f': 
  
          // Meters to Feet conversion 
  
          var result = valueToConvert / 0.3048; 
  
          alert(valueToConvert + " meters is equal to " + result + " feet."); 
  
          break; 
  
        case 'f2c': 
  
          // Fahrenheit to Celsius conversion 
  
          var result = (valueToConvert - 32) * 5 / 9; 
  
          alert(valueToConvert + " Fahrenheit is equal to " + result.toFixed(2) + " Celsius."); 
  
          break; 
  
        case 'c2f': 
  
          // Celsius to Fahrenheit conversion 
  
          var result = (valueToConvert * 9 / 5) + 32; 
  
          alert(valueToConvert + " Celsius is equal to " + result.toFixed(2) + " Fahrenheit."); 
  
          break; 
  
        default: 
  
          alert("Error: Unsupported conversion option!"); 
  
      } 
  
    }); 
  
  }); 