$(document).ready(onReady);

// created an empty array to push new employee info in
let newEmployeeInfo = [];

function onReady() {
// Put in button clicks for the submit & delete also put in an event 
//for calculating  total monthly salary

  $('#submit-button').on('click', employeeInfo);
  $('tbody').on('click', '.deleteButton', removeInfo);
  //$('#totalMonthly').text(totalMonthlySalary);
}

function newEmployee() {
  let newEmployee = {
    firstName: $('#submitFirstname').val(),
    lastName: $('#submitLastname').val(),
    iD: $('#submitId').val(),
    jobTitle: $('#submitJobTitle').val(),
    annualSalary: $('#submitAnnualSalary').val()
  }
};
// Setting up to push employee info into the array
newEmployeeInfo.push(newEmployee);

//     event.preventDefault();
//     $('tbody').append(`
//       <tr>
//       <td>${submitFirstname}</td>
//       <td>${submitLastname}</td>
//       <td><button class="deleteButton">Delete</button></td>
//       </tr>
// `)
// }
function removeInfo() {
  console.log('remove info')
  $(this).parent().parent().remove();
}