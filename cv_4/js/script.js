/**
 * DOM manipulaton - first by id select element for manipulation and then chang its value
 */

var headline_change =  document.getElementById('Nadpis_headline');
headline_change.textContent = 'Exercise nr. 4 -  JavaScript DOM - document object model manipulation examples';

/* logic created by javascript -  DOM manipulation example */

// addding items in list a elements
var ul_list = document.getElementsByTagName('ul')[0];

// add new elelemnt at the end of list
var newLastItem = document.createElement('li'); // Create li element
var newLastText = document.createTextNode('querySelectorAll() - also added by JavaScript at the end.'); // Create text for that element
newLastItem.appendChild(newLastText);
ul_list.appendChild(newLastItem);
   console.log('Debug - element inserted at the last position of the list.'); // example of debug output to console - where is output from the console displayed?

// add new item at the beginning of list
var newFirstItem = document.createElement('li'); // Create li element
var newFirstText = document.createTextNode('This is inserted by JavaScript at the beginning ...'); // Create text for that element
newFirstItem.appendChild(newFirstText);
ul_list.insertBefore(newFirstItem, ul_list.firstChild);
   console.log('Debug - element inserted at the first position of the list.'); // console.log as a debug command for outputting messages into a console avilable in browser inspector dialog

/* example of inserting class name to all elelemnts li */
var listItems = document.querySelectorAll('li'); // selection of all <li> elements

// add class of color to all list item
var i;
for(i = 0; i < listItems.length; i++) {
  //listItems[i].className = 'my_color';
  listItems[i].id = 'my_color';
}
console.log('Class name color to li was asigned succesfully');

//


// function for change text color to red - inwoked by onclick event of the button 
function toRed () {
 
 
 document.getElementById('text_echo_p').style.color = 'white';
 document.getElementById('text_echo').style.backgroundColor = 'red';

 document.getElementById('text_echo_p').textContent = 'For reset to default state, please clik into this area by mouse';
 
      console.log('Button click event activated - RED');

  return 0;    

}

function toBlue () {
 
  document.getElementById('text_echo_p').style.color = 'white';
  document.getElementById('text_echo').style.backgroundColor = 'blue';
  document.getElementById('text_echo_p').textContent = 'For reset to default state, please clik into this area by mouse';
       console.log('Button click event activated - BLUE');
 
   return 0;    
 
 }

 function toGreen () {
 
  document.getElementById('text_echo_p').style.color = 'white';
  document.getElementById('text_echo').style.backgroundColor = 'green';
  document.getElementById('text_echo_p').textContent = 'For reset to default state, please clik into this area by mouse';

  text_echo_p
       console.log('Button click event activated - GREEN');
 
   return 0;    
 
 }

 function resetColor () {
 
  document.getElementById('text_echo_p').style.color = '#7c7c7c';
  document.getElementById('text_echo').style.backgroundColor = 'transparent';
  document.getElementById('text_echo_p').textContent = 'Color change area - for a colorchange use buttons';
       console.log('Button click event activated - Reset');
 
   return 0;    
 
 }

/* part writing outuput to the end of the document about exercise in this chapter.*/
document.write('In this exercise we JavaScript Document Object Model or shortly DOM. This model enable select HTML elelemnt and change them by javaScrit directly or as a response of event.');











