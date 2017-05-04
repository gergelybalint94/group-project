/*LOADS THE NAVIGATION BAR*/
$('#main-header-bar-wrap').load('parts/navbar.html');

// Save flight search infos to local storage:
$(document).on('click', '#homepage-new-search-submit-button', function(){
	var startDestination = $('#start-destination').val();
	var finalDestination = $('#final-destination').val();
	var startDate = $('#start-date').val();
	var finalDate = $('#final-date').val();
	var passengers = $('#passengers').val();
	localStorage.setItem('startDestination', startDestination);
	localStorage.setItem('finalDestination', finalDestination);
	localStorage.setItem('startDate', startDate);
	localStorage.setItem('finalDate', finalDate);
	localStorage.setItem('passengers', passengers);
});
console.log(localStorage.getItem('startDestination'));
console.log(localStorage.getItem('passengers'));

// Redirect to certain pages when clicking on elements with 'data-href' attribute:
$(document).on('click', '[data-href]', function(){
	window.location.href = $( this ).attr('data-href');
})