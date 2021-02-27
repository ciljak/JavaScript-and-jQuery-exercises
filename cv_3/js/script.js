/**
 * DOM manipulaton - first by id select element for manipulation and then chang its value
 */

var headline_change =  document.getElementById('Nadpis_headline');
headline_change.textContent = 'Exercise nr. 3 -  Functions, decision with if and switch statement and loops.';

/* logic for appropriate adaptive greeting text creation */

function calculateRainStat () { // function for calculating results
    var year = new Array();
    var cumulated_results = new Array(); // Array () - array constructor
    // for further reading please visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array, 27.2.21

    year.push(document.getElementById('jan').value); // read values form edit fields in to a array
    year.push(document.getElementById('feb').value);
    year.push(document.getElementById('mar').value);
    year.push(document.getElementById('apr').value);
    year.push(document.getElementById('may').value);
    year.push(document.getElementById('jun').value);
    year.push(document.getElementById('jul').value);
    year.push(document.getElementById('aug').value);
    year.push(document.getElementById('sep').value);
    year.push(document.getElementById('oct').value);
    year.push(document.getElementById('nov').value);
    year.push(document.getElementById('dec').value);

    var sum = 0;
    var N = year.length; // length of a array
    
    // accumulating total rainfall
    for(var i = 0; i<N; i++) {
       sum = sum +  parseFloat(year[i]);
       console.log(' year a month ' + year[i] + ' sum ' + sum + ' ');
              
    }
   

    var average;
    
    console.log(' N =' + N + ' ');
    average = sum / N;
    

    // finding minimal value
    max = myMaximum (year); // call function myMaximum(), return multiple values by using array as return type

    console.log(' max' + max[0] + ' and position is ' + max[1] + ' that mean a month' + obtainMonthFromIndex (max[1]));

    //const average = year => year.reduce((a,b) => a + b, 0) / year.length;
    console.log(' average' + average + ' ');

    
    // display output on page, all previous messages with console.log(); generated output into a debug console
    var element_result =  document.getElementById('result');
    element_result.textContent = 'Calculate raining statistics are: Average rainfall  =' + average.toFixed(2) + 'mm ' + ' maximum rainfalls has been observed at ' + obtainMonthFromIndex (max[1])+ ' with total rainfall ' + max[0].toFixed(2) + 'mm. '; 


    return cumulated_results;
}

function myMaximum(x) {
    var max = parseFloat(x[0]); // first element is suposed to be max
    var indexOfMaximum = 0;

    // solution with for
    /*for(var i = 0; i<x.length; i++) {

        if (max < parseFloat(x[i])) {
            max = parseFloat(x[i]);
            indexOfMaximum = i;
        }
        
        console.log(' from within myMaximum  Max= ' + max + ' at index ' + indexOfMaximum + ' ');
               
     } */

    // solution with while 
    var pom = 0;
    while(pom < x.length) {

        if (max < parseFloat(x[pom])) {
            max = parseFloat(x[pom]);
            indexOfMaximum = pom;
        }

        pom++;
        
        console.log(' from within myMaximum  Max= ' + max + ' at index ' + indexOfMaximum + ' ');
               
     }

    var maximum = new Array();
    maximum[0]= max; // at index 0 is value of maximum
    maximum[1]= indexOfMaximum;  // at index of 1 is position in array meesaured from 0 position
    // way how to return more as two value is use array

    return maximum;
}

function obtainMonthFromIndex (index) {
    var month;

    switch (index) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
          month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
          month = "November";
          break;
        case 11:
          month = "December";
          break;
             
        }  


     

    return month;
}


/* part writing outuput to the end of the document about exercise in this chapter.*/
document.write('In this exercise we introduced onchange event asociated with a input elements. After change in input element function calculateResult() is inwoked. ');
document.write('In body of our first function we obtain total rainfalls per month and asign them into a array. ');
document.write('New method in our exercise are - parseFloat() or parseInt(variable ,base) for conversion from string to appropriate numeric value - this is common for all oop languges obtaining data from text input fileds, please be avare.');
document.write(' variable.toFixed(number) is a method available for all variables - they are wraped as objects and that is why we have some prebuild methods for handling them.');










