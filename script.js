$(document).ready(onReady);
let salary = 0;
let totalSalary = 0;

// created an empty array to push new employee info in
let newEmployeeInfo = [];
// let currentAnnualCost = 0;

function onReady() {


// Event listeners
  $('#submit-button').on('click', newEmployee);
  $('#employeeInfo').on('click', '.deleteButton', removeInfo);
  
}

// Event handler
function newEmployee(event) {
  event.preventDefault() 
  

  console.log('it clicked!');
  
  let newEmployee = {
   firstName: $('#submitFirstname').val(),
    lastName: $('#submitLastname').val(),
    iD: $('#submitId').val(),
    jobTitle: $('#submitJobtitle').val(),
    annualSalary: $('#submitAnnualSalary').val()
  
  }
  
  console.log(newEmployee);



newEmployeeInfo.push(newEmployee);

// Got it on the DOM
console.log('New employee info');

    
    $('tbody').append(`
    
      <tr>
      <td>${newEmployee.firstName}</td>
      <td>${newEmployee.lastName}</td>
      <td>${newEmployee.iD}</td>
      <td>${newEmployee.jobTitle}</td>
      <td>${newEmployee.annualSalary}</td>
      <td><button class="deleteButton">Delete</button></td>
      </tr>
    
`)

$('#monthly-total').text(annual_salary);


// console.log('append employee info to the DOM');
 $('.input').val('');
}

  // crerate a function to calculate employee annual salary
  function annual_salary() {
    salary = Number($('#submitAnnualSalary').val());
    totalSalary += salary;
    console.log(salary);
    let monthlyTotal = totalSalary/12;
    totalCost(monthlyTotal);
    return monthlyTotal;
    
  }
console.log('Total annual salary')


function totalCost(monthly) {


  if ( monthly > 20000) {
    $('#monthly-total').css( 'background-color', 'red');
  }else if (monthly > 20000) {

   $('#monthly-total').css( background-color, 'gray');
  }
}



// The delete function for the delete button.'
function removeInfo(){
    console.log('deleted')
    $(this).closest('tr').remove(); 
}

