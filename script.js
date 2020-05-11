// Lecture: Date Object


/*
var date = new Date();

var year = date.getFullYear();

var month = date.getMonth();

date.setFullYear(2021);
date.setMonth(0);
var x = date.setFullYear(1990);


console.log(date);
console.log(year);
console.log(month);
console.log(x);


*/


/*
// **** Digital Clock ****

function digitalClock() {

var date = new Date();

// becausu lenght can count simbols in string, we need convert number to string by adding ''
var hours = date.getHours() + ''; 

var minutes = date.getMinutes() + '';

var seconds = date.getSeconds() + '';

var day = date.getDay();

if(hours.length < 2) {

    hours = '0' + hours;

}

if(minutes.length < 2) {

    minutes = '0' + minutes;

}

if(seconds.length < 2) {

    seconds = '0' + seconds;

}

//array to display days
var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

//display clock in DOM
document.getElementById('clock').innerHTML = clock;

//console.log(clock);

}

digitalClock();

setInterval(digitalClock, 1000);

*/

// Second atempt
/*

function digitalClock(){

var date = new Date();

var hours = date.getHours() + '';

var minutes = date.getMinutes() + '';

var seconds = date.getSeconds() + '';

var day = date.getDay();

if(hours.length < 2) {

    hours = '0' + hours;

}

if(minutes.length < 2) {

    minutes = '0' + minutes;

}

if(seconds.length < 2) {

    seconds = '0' + seconds;

}

var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var clockkk = weekDays[day] + ', ' + hours + ':' + minutes + ':' + seconds;

document.getElementById('clock').innerHTML = clockkk;

}

digitalClock();

setInterval(digitalClock, 1000);

*/

function digitalClock() {

    var date = new Date();

    var hours = date.getHours() + '';

    var minutes = date.getMinutes() + '';

    var seconds = date.getSeconds() + '';

    var day = date.getDay();


    if(hours.length < 2) {

        hours = '0' + hours;

    }
    if(minutes.length < 2) {

        minutes = '0' + minutes;

    }
    if(seconds.length < 2) {

        seconds = '0' + seconds;
    }
    
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

};

digitalClock();

setInterval(digitalClock, 1000);