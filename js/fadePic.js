$(document).ready(function() {

	$('#primaryPic #pic').fadeTo("fast", 1).fadeTo(2000, 0.15);
	
	// on hover
	// note: change this to use a variable storing this jQuery object
	$('#primaryPic #pic').hover(function() {
	
		// stop any currently running animation on this hovered over image
		// and then fade the image to full opacity
		$(this).stop(true, false).fadeTo("slow", 1);
	
	}, function() {
	
		// handle mouseout - by fading back to 15%
		$(this).stop(true, false).fadeTo("normal", 0.15);
	
	});

});


// can do the above like this as well as a shortcut
/*
$(function() {



});
*/