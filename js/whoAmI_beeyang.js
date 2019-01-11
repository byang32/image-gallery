$(document).ready(function () { //jQuery's ready() method
  
      // When the silhouette image at the bottom of the page is 
      // hovered over (jQuery's hover() method) fade it and the 
      // accompanying text to full opacity (100%)
      // when it is hovered off, fade the image and text back to 40%
      // be sure any running animation is stopped use jQuery stop() method
      var $whoAmI = $('#whoAmI');
      var $whoAmIText = $('#whoAmIText');
      var $mysteryPanel = $('#mysteryPanel');
      
     $whoAmI.hover(function () {
       
          $(this).stop(true, true).fadeTo(1000, 1);  
          
          $whoAmIText.fadeTo(1000, 1);
          
     }, function() {
       
          $(this).stop(true, true).fadeTo(1000, .4);
          
          $whoAmIText.fadeTo(1000, .4);
       
     });
  
      // When "Who am I" silhouette image on page is clicked(select img#whoamI)
      // and use jQuery click() method toggle open/closed div# mysteryPanel
      // depending on its current state check out jQuery's toggle() method for 
      // this on api.jquery.com
      
      $whoAmI.click(function() {
        
          $mysteryPanel.toggle('fast');
      });
      
      var $mysteryPanelH3 = $('#mysteryPanel > h3');
      var $silhouette = $('#silhouette');
      var $revealed = $('revealed');
      
      // When the "Who am I?" h3 text is clicked, fade out the silhouette image
      // and reveal the actual image underneath it by fading it in after a 
      //delay.  
      $mysteryPanelH3.click(function () {
        
           $silhouette.fadeOut(5000);
           
           $revealed.delay(3000).fadeIn(1000, function() {
             
                $mysteryPanelH3.text('Marechal Patrice MacMahon').css('cursor', 'default');
                
             
           });
        
      });
  
});

