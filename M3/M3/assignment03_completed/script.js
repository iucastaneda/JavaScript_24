/*
Israel Castaneda
script.js
INFO_2124_WW
Shaw
12/24/2022
*/
"use strict";


//DO NOT MODIFY THIS CODE
function calculateTax(subtotal, taxRate) {
    const tax = parseFloat(subtotal * taxRate);
    return tax.toFixed(2);
}

function print(grossWages, federalTax, stateTax, ssTax, medicareTax, netWages) {
    const msg = `
                Gross wages: $${grossWages.toFixed(2)}

                Deductions:
                --------------------------------
                Federal Taxes:   $${federalTax.toFixed(2)}
                State Taxes:     $${stateTax.toFixed(2)}
                Social Security: $${ssTax.toFixed(2)}
                Medicare:        $${medicareTax.toFixed(2)}

                Net wages: $${netWages.toFixed(2)}
    `;
    alert(msg);
}
//END DO NOT MODIFY THIS CODE
//YOUR CODE GOES BELOW
const $ = x => document.querySelector(x);//done

document.addEventListener("DOMContentLoaded", () => {
    $("#calculateTaxes").addEventListener("click", calcualteTaxes);
});
const calculateTaxes = () => {
    const grossWages = parseFloat($("#monthlySalary").value);
    const federalTax = grossWages * 0.12;
    const stateTax = grossWages * 0.05;
    const ssTax = grossWages * 0.06;
    const medicareTax = grossWages * 0.015;
    const netWages = (grossWages - federalTax - stateTax - ssTax - medicareTax);
    print(federalTax,stateTax,ssTax,medicareTax,netWages);
};
/*  Terminology
    --------------
    Here are some terms, in case you don't understand gross/net wages.

    Gross wages is your full pay, before deductions.

    Net wages is what you actually receive, once taxes, insurance, retirement, etc. have been deducted.
*/

