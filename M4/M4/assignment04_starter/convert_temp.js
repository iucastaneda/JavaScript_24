/*
Israel Castaneda
script.js
INFO_2124_WW
Shaw
1/11/2024
*/
"use strict";

//DO NOT MODIFY THE CODE BELOW 

/*********************
*  helper functions  *
**********************/
const $ = selector => document.querySelector(selector);
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;
//ADD YOUR CODE BELOW 

const toggleDisplay = (label1Text, label2Text) => {
    // update labels and clear disabled textbox
    $("#calculateCelsius").textContent = calculateCelsius;
    $("#calculateFahrenheit").textContent = calculateFahrenheit;
    $("#temp").value = "";

    // select text in degrees textbox
	//$("#value_entered").select();
    $("#degrees").select();
}

/****************************
*  event handler functions  *
*****************************/
const performConversion = () => {   

};

const toggleToCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toggleToFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", performConversion);
    $("#to_celsius").addEventListener("click", toggleToCelsius);
    $("#to_fahrenheit").addEventListener("click", toggleToFahrenheit);
    $("#metersToFeet").addEventListener("click", () => {
        toggleDisplay("Meters:","Feet:");
    });
	
	// move focus
	$("#value_entered").focus();
});



