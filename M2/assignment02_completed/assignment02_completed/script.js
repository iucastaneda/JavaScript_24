/*
Israel Castaneda
script.js
INFO_2124_WW
Shaw
12/15/2022
*/
"use strict";
const cargoWeight = [];           //this will hold an array of different item weights
let totalCargoWeight = 0;       //this will hold the total weight of all items
let itemWeight = 0;             //this will hold the weight of a single item
const maxWeightLbs = 1000;        //this specifies the maximum weight for all cargo
let average = 0;                //this will hold the average weight of all items

//add your loop around this 
do {
    itemWeight = parseFloat(prompt("Please enter the item weight in pounds, or input -1 to exit."));
    if(itemWeight >= 0) {
        cargoWeight[cargoWeight.length] = itemWeight;
    } else if (itemWeight != -1) {
        alert("Item weight must be a valid number that is greater than zero pounds!");
    }
}
while (itemWeight != -1); //entering -1 will cause while loop to be false and exit loop


if (cargoWeight.length > 0) {
    let totalCargoWeight = 0;
    
    for (const weight of cargoWeight) {
        totalCargoWeight += parseFloat(weight);
    }
    const average = parseFloat(totalCargoWeight / cargoWeight.length);
}
/***************** calculation console BEGIN*****************/
if(cargoWeight.length > 0) {
    for (const weight of cargoWeight) {
        itemWeight += weight;
        totalCargoWeight = parseFloat(totalCargoWeight + weight);
    }
    average = parseFloat(totalCargoWeight / cargoWeight.length);
    
}
/***************** calculation console END*****************/

//*****************rocket can take off display BEGIN*****************
const success =
`
    <h1><label>Space Weight</label></h1>
    <p><label>Total cargo weight:</label> ${totalCargoWeight.toFixed(2)}</p>
    <p><label>Average item weight:</label> ${average.toFixed(2)}</p>
    <p><label>Congratulations! The rocket can take off!</p>
`;
//*****************rocket can take off display END*****************
//*****************rocket cannot take off display BEGIN*****************
const fail =
`
    <h1>Space Weight</h1>
    <p>Total cargo weight: ${totalCargoWeight.toFixed(2)}</p>
    <p>Average item weight: ${average.toFixed(2)}</p>
    <p>Oh no! Your rocket is too heavy to take off!</p>
    <p>The rocket must be less than 1000 pounds to take off!</p>
`;
//*****************rocket cannot take off display END*****************
//*****************rocket switch code BEGIN*****************
if (totalCargoWeight < maxWeightLbs) {
    document.write(success);
}
else if (totalCargoWeight >= maxWeightLbs) {
    document.write(fail);
}
//*****************rocket switch code END*****************
const html = ``;
document.write(html);