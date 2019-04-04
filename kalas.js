$( "#ok" ).click(function() {
  var svar = $('#kod').val();
  if(svar.toUpperCase() == "SPEGELBILD") {
    $("#rattModal").modal()
  }
  else {
    $("#felModal").modal()
  }

});
