/*
Israel Castaneda
script.js
INFO_2124_WW
Shaw
2/11/2024
*/

"use strict";

// Define an array to hold the list items
const listItems = [];

// Wait for everything to load before executing the code
$(document).ready(() => {

    // Define click event listener for #addItemToList
    $('#addItemToList').click(() => {
        // Trim the contents of the text field
        let newItem = $('#listItemInput').val().trim();
        
        // Replace the contents of the text field with the trimmed value
        $('#listItemInput').val(newItem);

        // Check if the text field is empty
        if (newItem === "") {
            // Display error for empty input
            showError("Error! Franz Liszt's list item cannot be empty. This is unacceptable. Franz Liszt demands you correct his list!");
        } else {
            // Check for duplicate items
            if (listItems.map(item => item.toLowerCase()).includes(newItem.toLowerCase())) {
                // Display error for duplicate input
                showError("Error! You are attempting to enter a duplicate value!");
            } else {
                // Check if the list has reached maximum capacity
                if (listItems.length >= 6) {
                    // Display error for list exceeding maximum capacity
                    showError("Error! Franz Liszt's list can only hold 6 items!");
                } else {
                    // Add the item to the list and update the UI
                    listItems.push(newItem);
                    $('#listItemsHolder').append(`<li>${newItem}</li>`);
                }
            }
        }
    });

    // Define click event listener for #clearList
    $('#clearList').click(() => {
        // Clear the contents of the unordered list
        $('#listItemsHolder').empty();
        
        // Clear the listItems array
        listItems.length = 0;
    });
});

// Function to display error message
function showError(message) {
    $('#errorMessage').text(message);
}
  
// Function to display error message 
function showError(message) { 
    $('#errorMessage').text(message); 
}