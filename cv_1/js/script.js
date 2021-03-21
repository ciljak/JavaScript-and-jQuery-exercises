/**
 * DOM manipulaton - first by id select element for manipulation and then chang its value
 */
var headline_change =  document.getElementById('Nadpis_headline');
headline_change.textContent = 'Exercise nr. 1 -  Example of inserting JavaScript, basic variables, date/ time and simple DOM manipulatioon';


var today_is = new Date (); // creating new Date class object
var curentTime = today_is.getHours(); // obtaining current time from date object
var cuentMinute = today_is.getUTCMinutes();


var curentDay = today_is.getDate();
var curentMonth = today_is.getMonth() + 1; // month is displayed from 0 to 11, correcion is +1
var curentYear = today_is.getUTCFullYear();
var our_greeting;


/* logic for appropriate adaptive greeting text creation */
if  ((curentTime >= 6) && (curentTime < 9)) {
    our_greeting = 'Good morning!';
} else if ((curentTime >= 9) && (curentTime < 14)) {
    our_greeting = 'Good day!';
} else if ((curentTime >= 14) && (curentTime < 18)) {
    our_greeting = 'Good afternoon!';
} else if ((curentTime >= 18) && (curentTime < 21)) {
    our_greeting = 'Good evening!';
} else  {
    our_greeting = 'Good night!';
}

/* part manipulating DOM contentent of the page elements */
var element_time =  document.getElementById('customized_time_by_javascript');
element_time.textContent = 'Today is '+ curentDay + '.' + curentMonth + '.' + curentYear + ' and current time is ' + curentTime + 'h ' + cuentMinute + 'm.';

var element_greeting =  document.getElementById('customized_greeting_by_javascript');
element_greeting.textContent = our_greeting;

document.write('This is a place where document.write method output the text. Current hour is: ' + curentTime + 'h. And it is at the end of HTML content ...');

