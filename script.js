function document (onReady) {

}


function employeeInfo (event) {
    let affirmationInput=$('#affirmationInput').val();
    let authorInput=$('#authorInput').val();
    
    event.preventDefault();
    $('tbody').append(`
      <tr>
      <td>${affirmationInput}</td>
      <td>${authorInput}</td>
      <td><button class="deleteMe">❌</button></td>
      </tr>