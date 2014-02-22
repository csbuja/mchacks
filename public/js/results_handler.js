$(document).ready(function () {


	// FROM should automatically be set to current location (or a location chosen by user)
	// DESTINATION triggers a search and loads results into the results_pg.
	// on search, fill the results_pg with results.
	$('#destination').change( function(){

		console.log('perform search');
		
		$('.result').remove();

		performSearch(function(){
			//$('.results_pg #'+$('.results_pg').children().length).append( $('.result') );
		});

	});


	// when a result is clicked, expand to show hidden information.
	$('.result').click( function(){




	});

});