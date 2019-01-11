$(document).ready(function() {

	// get a reference to the element whose id is "loginForm_wrap"
	//
	// note: preceding a variable with a $ is a convention to say
	//       that the variable contains a jQuery object
	var $loginPanel = $('#loginForm_wrap');  // $loginPanel is a jQuery object
	
	// hide the login panel
	$loginPanel.hide();
	// same as $loginPanel.css('display', 'none');
	
	// set up clickability of our login button and toggle sliding 
	// open/closed of our login panel
	$('a#loginHook').click(function() {
	
		// toggle the login panel open/closed based on its current state
		$loginPanel.slideToggle();
		
		return false;  // prevent default action of clicking link
	
	});

});