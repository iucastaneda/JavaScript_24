/*
Israel Castaneda
script.js
INFO_2124_WW
Shaw
2/13/2024
*/
"use strict"

$(document).ready(() => {
    //Define base URL for fetching employee data
    const baseUrl = 'https://www.mccinfo.net/epsample/employees';

    //Get DOM elements for employee list and employee info
    const employeeList = document.getElementById('employeeList');
    const employeeInfo = document.getElementById('employeeInfo');

    //Hide error and loading elements initially
    $('#errorHolder').hide();
    $('#loadingHolder').hide();
    $('#getEmployees').hide();

    //Event listener for "Get Employees"
    $('#getEmployees').click((evt)=> {
        //Slide up the button parent, show loading instructor
        $(evt.target).parent().slideUp();
        $('#loadingHolder').slideDown();

        //Fetch employee data
        fetch(baseUrl)
        .then ( response => response.json() )
            .then((employees) => {
                for(let employee of employees) {
                    let div = document.createElement('div');
                    let a = document.createElement('a');
                    a.href='#';
                    a.id = employee.id;
                    a.innerHTML = `${employee.first_name} ${employee.last_name}`;
                    a.addEventListener('click',onEmployeeClicked);
                    div.appendChild(a);
                    employeeList.appendChild(div);
                };

                //Hide loading indicator, show employee list
                $('#loadingHolder').fadeOut(400, () => {
                    $('#employeeList').fadeIn();
                });
            })
        });
        //Function to handle click on an employee name       
        const onEmployeeClicked = (e) => {
            // Format employee_salary using accounting.js
            const e = accounting.formatMoney(employee.annual_salary, {
                symbol: "$",    // Symbol for currency
                decimal: ".",   // Decimal separator
                thousand: ",",  // Thousands separator
                precision: 2,   // Number of decimal places
                format: "%s%v"  // Format string (symbol followed by value)
                });
                            
            // Hide error message
            $('#errorHolder').hide();
            $('#errorHolder').html('');
            //Clear employee info
            employeeInfo.innerHTML = '';

            //Fetch detailed employee data
            fetch(`${baseUrl}\/${e.currentTarget.id}`)
            .then( response => response.json())
            .then((employee) => {
            // Create elements to display employee info
            let div = document.createElement('div');

            let img = document.createElement('img');
                img.src = employee.image_filename;
                img.alt = `${employee.first_name} ${employee.last_name}`;

            let h1 = document.createElement('h1');
                h1.innerText = `${employee.first_name} ${employee.last_name}`;
            
            let divDepartment = document.createElement('div')
                divDepartment.innerText = `Department: ${employee.department.name}`;

            // Format employee_salary using accounting.js
             const getEmployees = accounting.formatMoney(employee.annual_salary, {
                symbol: "$",    // Symbol for currency
                decimal: ".",   // Decimal separator
                thousand: ",",  // Thousands separator
                precision: 2,   // Number of decimal places
                format: "%s%v"  // Format string (symbol followed by value
             });

             let divSalary = document.createElement('div');
             divSalary.innerText = `Annual Salary: ${employee.annual_salary}`;                       

            // Append elements to display employee info
            let divHireDate = document.createElement('div');
                divHireDate.innerText = `Hire Date: ${employee.hire_date}`;

                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(divDepartment);
                div.appendChild(divSalary);
                div.appendChild(divHireDate);

                employeeInfo.appendChild(div);
        })

        .catch((error) => {
            console.log(error.message);
        });
    }
});