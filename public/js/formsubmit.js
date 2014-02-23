$(document).ready(function(){
 
   $('#position').on('change',formajax);
   $('#destination').on('change',formajax);


});

//runs the ajax

function formajax(event)
{
 if($('#position').value && $('#destination').value)
  {
  event.preventDefault();
  $.ajax('/views/busform.html',{
    type: 'POST',
    data: $('#form').serialize(),
    success:function(response)
    {
    //temperary
    console.log(response);
    },
    error: function(){
      alert("There's an error in your function");
    }
  
  });
  }
 else{
  clearOverlays();
 }
 }
}

function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}
