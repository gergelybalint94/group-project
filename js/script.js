/*LOADS THE NAVIGATION BAR*/
$("#main-header-bar-wrap").load("parts/navbar.html");

/*SAVE FLIGHT SEARCH INFOS TO LOCALSTORAGE*/
$(document).on("click", "#homepage-new-search-submit-button", function(){
	var startDestination = $("#start-destination").val();
	var finalDestination = $("#final-destination").val();
	var startDate = $("#start-date").val();
	var finalDate = $("#final-date").val();
	var passengers = $("#passengers").val();
	localStorage.setItem("startDestination", startDestination);
	localStorage.setItem("finalDestination", finalDestination);
	localStorage.setItem("startDate", startDate);
	localStorage.setItem("finalDate", finalDate);
	localStorage.setItem("passengers", passengers);
});
console.log(localStorage.getItem("startDestination"));
console.log(localStorage.getItem("passengers"));