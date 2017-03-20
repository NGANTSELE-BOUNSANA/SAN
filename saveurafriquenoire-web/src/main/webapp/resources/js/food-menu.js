"use strict";
$(document).ready(function() {
	$.validate(); // form validate
	$('#date_picker').datepicker(); // date picker 
	$('#time_picker').timepicker(); // time picker
	
	// dishe slider 
	var owl2 = $('#dishes_slider');
	  owl2.owlCarousel({
		margin: 30,
		loop: true,
		nav: true,
		navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
		dots: false,
		 responsive: {
		  0: {
			items: 1
		  },
		  768: {
			items: 2
		  },
		  992: {
			items: 3
		  }
		}
	});
});