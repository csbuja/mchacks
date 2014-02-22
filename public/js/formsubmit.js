$(document).ready(function(){
 
   $('#position').on('change',formajax);
   $('#destination').('change',formajax)


});

//runs the ajax
function formajax(event)
{
 if($('#position').value && $('#destination').value)
  {
  event.preventDefault();
  $.ajax('/busform',{
    type: 'POST',
    data: $('#form').serialize(),
    success:function(response)
    {
    //temperary
    console.log('testthis');
    },
    error: function(){
      alert("There's an error in your function");
    }
  
  }
  
  }
}
