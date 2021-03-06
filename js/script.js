/*DECIDE IF ITS A LOGIN OR A LOGOUT*/
if (localStorage.getItem("loggedIn") == "yes"){
	// Load navigation bar:
	$('#main-header-bar-wrap').load('parts/navbar2.html');
}else{
	console.log("bye");
	$('#main-header-bar-wrap').load('parts/navbar.html');
};

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

// use the saved search details to generate matching flights

if (localStorage.getItem("startDestination") !== null) {
	var i;
	
	$("#start-destination").append(localStorage.getItem("startDestination"));
	$("#final-destination").append(localStorage.getItem("finalDestination"));
	for (i=0; i < 5; i++) {
		
		$("#search-results").append(
  "<div>\
				<div class='tr'>\
	            	<div class='td'>	Russian</div>\
	            	<div class='td'>	#RUS14478</div>\
	            	<div class='td'>	"+localStorage.getItem('startDate')+"</div>\
	            	<div class='td'>	"+localStorage.getItem('finalDate')+"</div>\
	            	<div class='td'>	8:16</div>\
	                <div class='td'>No</div>\
	                <div class='td'>Economy</div>\
	                <div class='td'>299kr</div>\
	            </div>\
				<div class='tr-after'>\
					<div class='highlighted-buttons' data-href='payment.html'>Book now</div>\
				</div>\
			</div>"

		);
	};
};

// Redirect to certain pages when clicking on elements with 'data-href' attribute:
$(document).on('click', '[data-href]', function(){
	window.location.href = $( this ).attr('data-href');
});

// Save the registration information in the localstorage for later usage:
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

// Login functionality:
$("#loginpage-content").on('submit', function(e){
	var loginUsername = $("#login-username").val();
	var loginPassword = $("#login-password").val();
	var registrationUsername = localStorage.getItem("registrationUsername");
	var registrationPassword = localStorage.getItem("registrationPassword");
	if(loginUsername == registrationUsername && loginPassword == registrationPassword){
		console.log("bravo");
		localStorage.setItem("loggedIn", "yes");
	}else{
		e.preventDefault();	
		console.log("sajnalom");
		console.log("haha wtf lol");
	};
});
//LOGOUT
$(document).on("click", "#logout-button", function(){
	localStorage.setItem("loggedIn", "no");
});

// Open "book now" button container on results page:
$(document).on('click', '#search-results .tr', function(){
	$( '.tr-after' ).slideUp();
	$( this ).parent().find('.tr-after').stop().slideDown();
});

// Navigation among steps on payment page:
$(document).on('click', '#paymentpage .normal-buttons', function(){

	
	var iActualStepNo	= $( this ).parent().attr('data-step-no');
		iActualStepNo	= parseInt(iActualStepNo);

	( $(this).hasClass('next-buttons') ) ? iNextStepNo = iActualStepNo + 1 : iNextStepNo = iActualStepNo - 1;
		
		console.log('iActualStepNo: ' + iActualStepNo);
		console.log('iNextStepNo: ' + iNextStepNo);

	// Mark actual step in breadcrumb:
	$('#paymentpage #breadcrumb .steps').removeClass('active');
	$('#paymentpage #breadcrumb [data-step-no="' + iNextStepNo + '"]').addClass('active');

	// Show actual step content:
	$('#paymentpage .main-content-of-payment-steps').hide();
	$('#paymentpage .main-content-of-payment-steps[data-step-no="' + iNextStepNo + '"]').show();
});


