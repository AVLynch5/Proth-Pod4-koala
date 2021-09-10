console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

// Function to update transfer status of koalas
function readyToTransfer() {
  const koalaId = $(this).data('id');
  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaId}`,
  }).then(function(response) {
    console.log('Koala marked ready to transfer!');
    getKoalas();
  }).catch(function(error) {
    alert('Something went wrong!');
    console.log('Error in PUT, error: ', error);
  });
} // end readyToTransfer

function setupClickListeners() {
  $( '#viewKoalas').on('click', '.deleteButton', deleteKoala); // added delete click handler
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      ready_to_transfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

// IDEA DELETE FUNCTION BELOW ↓↓ 

function deleteKoala() {
  const koalaID = $(this).data('id');
  $.ajax({
    method: 'Delete',
    url: `/koalas/${koalaID}`
  }).then(function(response) {
    console.log('Koala deleted on client!');
    getKoalas()         //fix refreshing GET list - is this the function name? Check with Ahmed (delete this comment)
  }).catch(function(error) {
    alert('Sorry - something went wrong!');
    console.log('Error in client DELETE', error);
  });
};

// idea end delete function complete ↑↑

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas',
  }).then(appendToDOM).catch(function (error) {
    console.log('error in get', error);
  });
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to POST koalas
  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: newKoala,
  }).then(function(response) {
    console.log('Response from server', response);
    getKoalas();
  }).catch(function(error) {
    console.log('Error in POST', error);
    alert('Unable to add new koala');
  });
}

function appendToDOM(response) {
  $('#viewKoalas').empty();
  for (let koala of response) {
    $('#viewKoalas').append(`
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td><button data-id="${koala.id}" class="deleteButton">Delete</button></td>
      </tr>
    `);
  };
};