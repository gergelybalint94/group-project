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
// Redirect to certain pages when clicking on elements with 'data-href' attribute:
$(document).on('click', '[data-href]', function(){
<<<<<<< HEAD
	window.location.href = $( this ).attr('data-href');
})
=======
	alert();
})
// Save the registration information in the localstorage for later usage
$(document).on('click', '#registration-button', function(){
	var registrationUsername = $('#registration-username').val();
	var registrationPassword = $('#registration-password').val();
	var registrationFirstName = $('#registration-first-name').val();
	var registrationLastName = $('#registration-last-name').val();
	var registrationCountry = $('#registration-country').val();
	var registrationEmail = $('#registration-email').val();
	var registrationPhone = $('#registration-phone').val();
	localStorage.setItem('registrationUsername', registrationUsername);
	localStorage.setItem('registrationPassword', registrationPassword);
	localStorage.setItem('registrationFirstName', registrationFirstName);
	localStorage.setItem('registrationLastName', registrationLastName);
	localStorage.setItem('registrationCountry', registrationCountry);
	localStorage.setItem('registrationEmail', registrationEmail);
	localStorage.setItem('registrationPhone', registrationPhone);
});
console.log(localStorage.getItem("registrationEmail"));

//LOGIN FUNCTIONALITY
$("#loginpage-content").on('submit', function(e){
	var loginUsername = $("#login-username").val();
	var loginPassword = $("#login-password").val();
	var registrationUsername = localStorage.getItem("registrationUsername");
	var registrationPassword = localStorage.getItem("registrationPassword");
	if(loginUsername == registrationUsername && loginPassword == registrationPassword){
		console.log("bravo");
	}else{
		e.preventDefault();	
		console.log("sajnalom");
	};

});
>>>>>>> master
