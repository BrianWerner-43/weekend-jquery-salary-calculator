$(document).ready(onReady);

// created an empty array to push new employee info in
let newEmployeeInfo = [];

function onReady() {
// Put in button clicks for the submit & delete also put in an event 
//for calculating  total monthly salary

  $('#submit-button').on('click', newEmployee);
  $('tbody').on('click', '.deleteButton', removeInfo);
 // $('#monthlyCost').text(annualSalary);
}

function newEmployee(event) {
  console.log('it clicked!');
  let newEmployee = {
   firstName: $('#submitFirstname').val(),
    lastName: $('#submitLastname').val(),
    iD: $('#submitId').val(),
    jobTitle: $('#submitJobtitle').val(),
    annualSalary: $('#submitAnnualSalary').val()
  }
  console.log(newEmployee);

// pushed employee info into the array

newEmployeeInfo.push(newEmployee);
// My preventDefault won't append anything to the DOM
console.log('New employee info');
    event.preventDefault() //Console says it can't read prperties
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
console.log('append employee info to the DOM');
$('input').val('');
  }

  // crerate a function to calculate monthly cost


  
  function removeInfo(){
    console.log('deleted')
    $(this).parent().parent().remove();

}
function newEmployee1() {
  console.log('working?')
  $(this).parent().parent().remove();
}