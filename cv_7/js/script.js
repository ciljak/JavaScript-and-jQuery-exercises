/**
 * JQuery  - event handling and DOM manipulation
 */


$(document).ready(function(){ // waiting to document to by fully loaded - best practise to eliminate inconsistency in display 

  $("#Nadpis_headline").text("Exercise nr. 7 - client JavaScript scripts as form prevalidators");

    /* Main logic - example how to handle events with JQuery */
    
    /* I. colorize input fields if mouse is hover */
          // recolorize input element if mous is hover
          $('input').hover(function(){ // on mouse hover recolorize paragraph text marked with class .events
            $(this).css('background', '#fde879');
            $(this).css('border-color', 'darkgray');
            $(this).css('border-style', 'solid');
            $(this).css('border-width', '1px');
          });

          $('input').mouseleave(function(){ // on mouse leave reset color to default #eeeeee
            $(this).css('background', 'deepskyblue');
          });


    //on button events
    $('#event_example_button').click(function(){
      //alert('Button Clicked!');
      $("#play_with_button").text("Button - clicked!");
    });

    

    //passing button event
    $('#button_1').click(function(e){
      alert('1 - ID: '+ e.currentTarget.id);
      alert('2 - innerHTML is: '+e.currentTarget.innerHTML);
      alert('3 - outerHTML is: '+e.currentTarget.outerHTML);
      alert('4 - className is: '+e.currentTarget.className);
    });

    // obtaining moving mouse coordinates
    $(document).on('mousemove', function(e){
      $('#mouse_position').html('Mouse cursor pointing to  X: '+e.clientX+" Y: "+e.clientY);
    });
  
  			
		
		
		
		
			
		


});













