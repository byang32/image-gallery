$(document).ready(function() {
/*
	var ie = false;
	
	if ($.browser.msie) {
		ie = true;
	}
	*/
	// hide any existing text and polaroid div's
	$('.tabDesc').hide();
	
	$('.tabDesc:first').show();
	/*
	if (!ie) {
		$('.tabDesc').transform({rotate: '3deg'});
	}
	*/
	
	$('.tabDesc > h3, .tabDesc > p').transform({rotate: '3deg'});
	
	
	// on hover - look up more about .hover() on api.jquery.com
	$('ul#nav li').hover(function() {
	
		// code to handle onmouseover
		$('.tabDesc').hide();  // hide all visible tab divs
		
		// 
		var activeTab = $(this).find("a").attr("id") + "Tab";
		
		// show the correct tab <div>
		$('#' + activeTab).stop(true, true).fadeIn("slow");
	
	}, function() {
	
		// code to handle onmouseout
		$('.tabDesc').hide();  // hide all visible tab divs
		
		$('.tabDesc:first').stop(true, true).fadeIn(2000);
	
	});

});