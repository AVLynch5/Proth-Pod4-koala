console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      ready_to_transfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

// IDEA DELETE FUNCTION

function deleteKoala() {
  const koalaID = $(this).data('id')
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


// idea end delete function

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
}

function appendToDOM() {
  $('#viewKoalas').empty();
  for (let koala of response) {
    $('#viewKoalas').append(`
      <tr>
        <td>${koala.name}</td>
        <td>${koala.gender}</td>
        <td>${koala.age}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td><button data-id="${koala.id}" class="deleteButton">Delete</button></td>
      </tr>
    `);
  };
};