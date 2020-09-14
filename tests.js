'use strict';



let d =  new Date ();
let e = d.toString();
let clock = e.substr(16,5);


let currentHour = d.getHours();
let currentMin = d.getMinutes();

//converts time to a single number
let g = Number(currentHour.toString() +currentHour.toString());

//displays greeting based on time
let greeting = (g < 1200 ) ? 'Good Morning':
    ( g < 1701 ) ? 'Good afternoon':
    'Good Evening' ;

//shows image based on time
let sunOrMoon =   (g > 600 && g < 1801) ? 'sun' :
     'moon' ;

 
document.getElementById("root").innerHTML = (clock);
document.getElementById("content").innerHTML = (greeting);




