/**
 * JQuery  - event handling and DOM manipulation
 */


$("#Nadpis_headline").text("Exercise nr. 6 - JQuery event handling - practical examples");

/* Main logic - example how to handle events with JQuery */




$(document).ready(function(){ // waiting to document to by fully loaded - best practise to eliminate inconsistency in display 
    // recolorize event paragraph if mous is hover
    $('.events').hover(function(){ // on mouse hover recolorize paragraph text marked with class .events
      $(this).css('background', '#fde879');
    });

    $('.events').mouseleave(function(){ // on mouse leave reset color to default #eeeeee
      $(this).css('background', '#eeeeee');
    });


    //on button events
    $('#event_example_button').click(function(){
      //alert('Button Clicked!');
      $("#play_with_button").text("Button - clicked!");
      console.log("Button - clicked!");
    });

    $('#play_with_button').on('click', function(){
      $("#play_with_button").text("Button - clicked alternate way with .on() method!");
      console.log("Button - clicked alternate way with .on() method!");
      
    });

    $('#play_with_button').dblclick(function(){
      $("#play_with_button").text("Button - doubleclicked!");
      console.log("Button - doubleclicked!");
      
    });

    $('#play_with_button').hover(function(){
      $("#play_with_button").text("Button - hover!");
      console.log("Button - hover!");
    });

    $('#play_with_button').on('mouseenter', function(){
      $("#play_with_button").text("Button - mouseenter!");
      console.log("Button - mouseenter!");
    });

    $('#play_with_button').on('mouseleave', function(){
      $("#play_with_button").text("Button - mouseleave!");
      console.log("Button - mouseleave!");
    });

    $('#play_with_button').on('mousemove', function(){
      $("#play_with_button").text("Button - mousemove!");
      console.log("Button - mousemove!");
    });

    $('#play_with_button').on('mousedown', function(){
      ("#play_with_button").text("Button - mousedown!");
      console.log("Button - mousedown!");
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

    //button 2 click - alternate colors for page loaded
    $('#button_2').click(function(){
      $('body').css('background-color', 'white');
      $('.articles').css('background-image', 'none');
      $('.footer').css('background-color', '#3ca6d1');
      
    }); // Way how to improve recolorization? Toogling with auxiliary variable and swich ... .
 


});

/* part writing outuput to the end of the document about exercise in this chapter.*/
document.write('In this exercise we introduce way how to handle most common events with JQuery.');











