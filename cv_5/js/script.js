/**
 * JQuery and JavaScript - side by side and simple introduction
 */


var headline_change =  document.getElementById('Nadpis_headline');
headline_change.textContent = 'Exercise nr. 4 -  JavaScript DOM - document object model manipulation examples'; // old version will be revrited by JQuery

$("#Nadpis_headline").text("Exercise nr. 5 - JQuery introduction - same things in short way");

/* comparison JavaScript vs adequate JQuery */

// select ordered list for change a style - example with javascript and jquery

//by javascript
var ordered_list =  document.getElementById('ordered_list');
ordered_list.style.fontFamily = "verdana";

$(document).ready(function(){ // waiting to document to by fully loaded - best practise to eliminate inconsistency in display 
    //with JQuery
    $('#ordered_list').css('color', 'gray');  // # select by id, apply CSS manipulation with pair atribute and value

    //way how to select elements of dom for further manipulation
        // 1 - selection by atribute of tag
        $('[href]').css('color', 'red');
        $('a[href="https://jquery.com/"]').css('color', '#0168ae');

        // 2 - selection of ol list and styling them
        
            $('ol#ordered_list li:first').css('color', '#0168ae');
            $('ol#ordered_list li:last').css('color', 'black');
            $('ol#ordered_list li:even').css('background-color', 'lightgray');
            $('ol#ordered_list li:odd').css('background-color', '#ffffff');
            $('ol#ordered_list li:nth-child(4n)').css('list-style', 'none');
      


        $('span.jquery_blue').css('color', '#0168ae');

	
		
		

    // onclick handling with javascript and JQuery

    // by javascript
      // add new elelemnt at the end of list
      function toJavascript() {
        // addding items in list a elements
        var ol_list = document.getElementsByTagName('ol')[0];

        var newLastItem = document.createElement('li'); // Create li element
        var newLastText = document.createTextNode('After invoking function toJavascript() - also added by JavaScript at the end.'); // Create text for that element
        newLastItem.appendChild(newLastText);
        ol_list.appendChild(newLastItem);
        console.log('Debug - element inserted at the last position of the list.'); // example of debug output to console - where is output from the console displayed?

        // add new item at the beginning of list
        var newFirstItem = document.createElement('li'); // Create li element
        var newFirstText = document.createTextNode('This is inserted by JavaScript at the beginning by function asociated to button onclick event...'); // Create text for that element
        newFirstItem.appendChild(newFirstText);
        ol_list.insertBefore(newFirstItem, ol_list.firstChild);
        console.log('Debug - element inserted at the first position of the list.'); // console.log as a debug command for outputting messages into a console avilable in browser inspector dialog
        return 0;    
    
      }


    // by JQuery
    $('#button_2').click(function(){ // do the same as javaScript
          $('ol').append('<li>Append List Item by JQuery</li>');
          $('ol').prepend('<li>Prepend List Item by JQuery</li>'); // nice comparison how less code we needed for this operation
    });


    $('#hide_list').click(function(){
    //$('ol').hide(); // hide elements or .show()
    $('ol').toggle();  // toggling selected elements
    });


});

/* part writing outuput to the end of the document about exercise in this chapter.*/
document.write('In this exercise we  will make comparison between adequate JavaScript and JQuery codes.');











