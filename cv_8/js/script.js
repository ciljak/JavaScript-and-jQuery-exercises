/**
 * JQuery  - event handling and DOM manipulation
 */


$(document).ready(function(){ // waiting to document to by fully loaded - best practise to eliminate inconsistency in display 

  // onload part of page code  ... can be separated into init funtion loaded on document ready state - as in Java entry main function

  $("#Nadpis_headline").text("Exercise nr. 8 - simple animations with jQuery");

  // hide fireworks victory picture displeyed after sucesful guess/ examination of number
  $("#fireworks_image").hide();


 

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

      /* II.- generate binary number function */
      function generate_binary_octet() {
        var binary_number = new Array;
        var max = 1;
        for (var i = 0; i <=7 ; i++) {
              binary_number[i] = Math.floor(Math.random() * (max + 1));  
        }
        
        return binary_number;
      }

      function prepare_binary_number_for_display(number) {
        var displayable_binary_number_MSB_to_LSB = "MSB-";
        for (var i = 7; i >=0 ; i--) {
          displayable_binary_number_MSB_to_LSB = displayable_binary_number_MSB_to_LSB + number[i].toString(); 
         }

         return displayable_binary_number_MSB_to_LSB + "-LSB";

      }

      function calculate_decimal_representation (number) {
         var decimal=0;
         for (var i = 0; i <=7 ; i++) {
          decimal = decimal + number[i] * Math.pow(2, i); 
         }

         return decimal;

      }


      /* III. - display binary number function*/

      examined_binary_number = generate_binary_octet(); // generate new number
      expected_decimal_representation = calculate_decimal_representation (examined_binary_number); // prepare expected decimal representation
      examined_binary_number_MSB_to_LSB = prepare_binary_number_for_display(examined_binary_number);
      $('#binary_number').text(examined_binary_number_MSB_to_LSB); // display new number

     
      console.log(examined_binary_number + "(B) ==" + expected_decimal_representation + "(D)" ); // for debuging purpouse generate binary and decimal value on console


      /* IV. - animate on click button */
      $('#next_image').click(function(){
            $('#next_image').animate({
              left: '250px',
              opacity: '0.5',
              width: '40px'
            }, 500);
            $('#next_image').animate({
              left: '-250px',
              opacity: '1',
              width: '35px'
            }, 500);
            console.log("click")
      });

      $('#next_image').mouseenter(function(){ /* hover = mouseenter + mouseleave */
        $('#next_image').animate({
          up: '250px',
          opacity: '0.7',
          width: '40px'
        }, 1);
        console.log("hover")
      });

      $('#next_image').mouseleave(function(){
        $('#next_image').animate({
          down: '-250px',
          opacity: '1',
          width: '35px'
        }, 1);
        console.log("hover")
      });



      /* V. - verify writen number as on click by check button or on binary number */
      $('#check').click(verify_written_decimal_number);  // Warning - $('#check').click(verify_written_decimal_number()); does not work - please read https://stackoverflow.com/questions/948198/why-are-non-anonymous-functions-being-executed-when-using-click-event-handler

      $('#binary_number').click(function() { verify_written_decimal_number(); }); // we previously named function and now we can call it by name without duplicating code */

      function verify_written_decimal_number() {  // now we can reuse this code and asociate them to other event listener liestening to different page element
        // obtain value from input field with id decimal
        var passed_decimal = $('#decimal').val();

        // calculate expected decimal representation of generated binary number
        expected_decimal_representation = calculate_decimal_representation (examined_binary_number); // prepare expected decimal representation
        
        // compare expected and passed values
        if (passed_decimal == expected_decimal_representation) {
          console.log("Number read from a input fieled with id decimal was: " + passed_decimal);
          $('#hidden_decimal_result').text("Corect it is " + expected_decimal_representation);

          // display fireworks for winner
          $("#fireworks_image").show();
          $('#fireworks_image').animate({
            up: '-250px',
            opacity: '1',
            width: '100px'
          }, 2000);
        } else {
          $('#hidden_decimal_result').text("Wrong you will write number " + expected_decimal_representation);
        }

        console.log("Function for examination number invoked");

      };
      
      


      /* VI - generate new number for guessing/ examination */
      $('#next_image').click(function(){

        examined_binary_number = generate_binary_octet(); // generate new number
        expected_decimal_representation = calculate_decimal_representation (examined_binary_number); // prepare expected decimal representation
        examined_binary_number_MSB_to_LSB = prepare_binary_number_for_display(examined_binary_number);
        $('#binary_number').text(examined_binary_number_MSB_to_LSB); // display new number

        // hide wictory image
        $("#fireworks_image").hide(); // hide them
        $("#fireworks_image").css("width","10px"); // make it small for recreating efect of blowing them up at next examination
  
       
        console.log(examined_binary_number + "(B) ==" + expected_decimal_representation + "(D)" ); // for debuging purpouse generate binary and decimal value on console
      });


      /* -------  Auxiliary function for input checking ----------- */

       // validate entering correct number between 0 and 255
       $('#decimal').change(function() { 
        // obtain value from input field with id decimal
        var passed_decimal = $('#decimal').val();

        

        // compare expected and passed values
        if ((passed_decimal >= 0) && (passed_decimal <=255)) {
          console.log("Passed correct number between <0; 255>: " + passed_decimal);
         
          $('#decimal').animate({
           
            opacity: '0.5',
            
          }, 200);

          $('#decimal').animate({
           
            opacity: '1',
            
          }, 200);
          
        
        } else { // wrong number is outside of the expected interval 10 bling with red color and alert message
          console.log("Passed wrong number outside <0; 255>: " + passed_decimal);
          alert("Wrong value, please enter number between 0 up to 255!")


          $('#decimal').css("background","red"); // recolorize but does not work as expected
          for ( i = 0; i<=5; i++) { 
         
                $('#decimal').animate({
                
                  opacity: '0.1',
                  
                }, 200);

                $('#decimal').animate({
                
                  opacity: '1',
                  
                }, 200);

                if (i>=4) { // this solution does not work as expected, recolorize after final blink
                  $('#decimal').css("background","deepskyblue")
                };
          };

          $('#decimal').val(""); // clear entered text
          //$('#decimal').css("background","deepskyblue");

          }

          

      }); 
      
      



    
  
  			
		
		
		
		
			
		


});













