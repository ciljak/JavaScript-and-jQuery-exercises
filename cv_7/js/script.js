/**
 * JQuery  - prevalidation with JavaScript or jQuery
 */


$(document).ready(function(){ // waiting to document to by fully loaded - best practise to eliminate inconsistency in display 
     initialize(); // after document fully loaded, first initialization take their place
});

/* Main initialization script */
function initialize() {
  $("#Nadpis_headline").text("Exercise nr. 7 - client JavaScript scripts as form prevalidators");
  hide_all_hiden_elements ();
}

 

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

    /* II. checking data inserted into a filed */

    $('#age').change(function() { // obtain value from input field with id decimal
      var passed_age = $('#age').val();

     
      
      // compare expected and passed values
      if ((passed_age >0) && (passed_age <120)) {
        console.log("Age is ok: " + passed_age);
        // template of function for use animate_success_value (passed_element_with_ok_value)
        animate_success_value ('#age');
              
      } else {
        $('#warning_age').text("* wrong age");
        animate_wrong_value ('#age', "* Only between 1 and 120 allowed!"); // auxiliary function for showing warning
        
      }

      console.log("Function for examination number invoked");
     }); 


     $('#e-mail').change(function() { // obtain value from input field with id decimal
      var passed_email = $('#e-mail').val();

     
      
      // compare expected and passed values
      if (validateEmail(passed_email)) {
        console.log("E-mail is ok: " + passed_email);
        // template of function for use animate_success_value (passed_element_with_ok_value)
        animate_success_value ('#e-mail');
              
      } else {
        $('#warning_email').text("* wrong e-mail");
        animate_wrong_value ('#e-mail', "* Provide valid email in form xxx@xxx.xxx!"); // auxiliary function for showing warning
        
      }

      console.log("Function for examination of e-mail address");
     }); 

   




    /* III. Before submitt check */ // more read https://www.yourhtmlsource.com/javascript/formvalidation.html, 28.3.21
    // for further reading about how to stop submiting form after validation fail on client side please visit 
    // https://stackoverflow.com/questions/3350247/how-to-prevent-form-from-being-submitted, 28.3.21
    // final working solution - for validation and control of submiting form only after successful validation
    /* this part of code add event listener, if validation script return false submission of form is blocked  by event.preventDefault()
       if validation function checkform_onSubmit() return true nothing prevent form from sucesfull submision post data on to evaluate.php page */
    const element = document.querySelector('#example_form');
    element.addEventListener('submit', event => {

      if(checkform_onSubmit()) { // invoke validation function
         // all is ok form can be submited
         // actual logic, e.g. validate the form
        console.log('All fileds seams to be ok. Submiting form ...');
      } else {
        event.preventDefault();
       // actual logic, e.g. validate the form
        console.log('Form submission cancelled.');
      }
      
    });


    function checkform_onSubmit() {
        // get required values
        var passed_nick = $('#nick').val();
        var passed_age = $('#age').val();
        var passed_email = $('#e-mail').val();
        // test provided values and return true or false, if returned false on submit event ends with rejecting of form submitt

        if (passed_nick == "")
        {
          $('#warning_nick').text("* empty nick");
        animate_wrong_value ('#nick', "* Nick can not be empty!"); // auxiliary function for showing warning

          // something is wrong
          alert('There is a problem with provided nick. It can not be empty!');
          
          return false;
        }
        else if ((passed_age <=0) || (passed_age >=120))
        {
          $('#warning_age').text("* wrong age");
        animate_wrong_value ('#age', "* Only between 1 and 120 allowed!"); // auxiliary function for showing warning

          // something is wrong
          alert('There is a problem with the age field');
          
          return false;
        }
        else if (!validateEmail(passed_email))
        {
          $('#warning_email').text("* wrong e-mail");
          animate_wrong_value ('#e-mail', "* Provide valid email in form xxx@xxx.xxx!"); // auxiliary function for showing warning
          // something else is wrong
          alert('There is a problem with e-mail');
         
          return false;
        }
        // If the script gets this far through all of your fields
        // without problems, it's ok and you can submit the form

        return true;
      }




    /* All auxiliary function for script support */

    function  hide_all_hiden_elements() { // hide all warning displaying fileds in form area
      $("#warning_nick").hide();
      $("#warning_age").hide();
      $("#warning_email").hide();
      $("#warning_message").hide();
    }
 
    function animate_success_value (passed_element_with_ok_value) { // short blink after entering correct value
     //$("#warning_message").hide(); // hide if warning displayed previously, because value is correct
      hide_all_hiden_elements(); // must work forr all previous errors
      $(passed_element_with_ok_value).animate({
           
        opacity: '0.5',
        
      }, 200);

      $(passed_element_with_ok_value).animate({
       
        opacity: '1',
        
      }, 200);

      
    }
   
    function animate_wrong_value (passed_element_with_wrong_value, message) { // 5 blink and delete value
      $(passed_element_with_wrong_value).css("background","red"); // recolorize but does not work as expected
      $("#warning_message").show();
      $("#warning_message").text(message);
          for ( i = 0; i<=5; i++) { 
         
                $(passed_element_with_wrong_value).animate({
                
                  opacity: '0.1',
                  
                }, 200);

                $(passed_element_with_wrong_value).animate({
                
                  opacity: '1',
                  
                }, 200);

                if (i>=4) { // this solution does not work as expected, recolorize after final blink
                  $(passed_element_with_wrong_value).css("background","deepskyblue")
                };
          };

          $(passed_element_with_wrong_value).val(""); // clear entered text
         


    }

    function validateEmail($email) { // test passed e-mail adress against regular expression and return true or false
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test( $email );
    }



    
  			
		
		
		
		
			
		
















