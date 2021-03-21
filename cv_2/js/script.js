/**
 * DOM manipulaton - first by id select element for manipulation and then chang its value
 */

var headline_change =  document.getElementById('Nadpis_headline');
headline_change.textContent = 'Exercise nr. 2 -  Example of array, basic calculus with Math class, function and onchange event';

/* logic for appropriate adaptive greeting text creation */

function calculateResult () { // function for calculating results
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var D = Math.pow(b, 2) - 4*a*c;
    var x = new Array();
    x[0] = (-b + Math.sqrt (D))/(2*a);
    x[1] = (-b - Math.sqrt (D))/(2*a);
    
    var element_result=  document.getElementById('result');
    element_result.textContent ='Roots of quadratic equation are: x1 =' + x[0] + ' X2 = ' + x[1];

    // debug into a console
    console.log('Roots of quadratic equation are: x1 =' + x[0] + ' X2 = ' + x[1]);
    
    return x;
}


/* part writing outuput to the end of the document about exercise in this chapter.*/
document.write('In this exercise we introduced onchange event asociated with a input elements. After change in input element function calculateResult() is inwoked.');
document.write('In body of our first function we obtain values from a, b and c input element, make calculation and display result by change content of result marked element.');










