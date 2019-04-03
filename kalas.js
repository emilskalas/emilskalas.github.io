$( "#ok" ).click(function() {
  var svar = $('#kod').val();
  if(svar == "RÄTT") {
    $("#rattModal").modal()
  }
  else {
    $("#felModal").modal()
  }

});
