/*
* Variables and data types


var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var function = 23;
*/

/*
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;


console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
/*

/*
* Basic operation
*/

/*
var now, yearJohn, yearMark;
now = 2019
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Do');
var x;
console.log(typeof x);

*/

/*
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);


// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);

x++
console.log(x);

x--
console.log(x);


*/

/*
var markMass = 100;
var johnMass = 90;

var markHeight = 1.9;
var johnHeight = 1.73;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

var isBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's?" + ' ' + isBMI);

*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will marry soon');
}


var isMarried = true ;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will marry soon');
}



var markMass = 2100;
var johnMass = 90;

var markHeight = 1.9;
var johnHeight = 1.73;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);


if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}


*/

/*

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');          
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');          
}else {
    console.log(firstName + ' is a man.');
}

*/
// ternary statement
/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// switch statement
/*
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/
/*

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');          
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');          
}else {
    console.log(firstName + ' is a man.');
}

*/

// falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values

/*
var height;

height = 0;

if (height || height === 0) {
    console.log('Variable is defined');

} else {
    console.log('Variable is not defiened');
}

*/

/*
var firstJohn = 110;
var secondJohn = 120;
var thirdJohn = 103;

var firstMike = 116;
var secondMike = 94;
var thirdMike = 123;

var averageJohn = (firstJohn + secondJohn + thirdJohn) / 3;
var averageMike = (firstMike + secondMike + thirdMike) / 3;

console.log('John\'s team average score : ' + averageJohn + ' Mike\'s tema average score : ' + averageMike);

switch(true) {
    case averageJohn > averageMike :
        console.log('John\'s team wins : '  + averageJohn);
        break;
    case averageJohn === averageMike :
        console.log('Their team tied : '  + averageJohn);
        break;
    default :
        console.log('Mike\'s team wins : '  + averageMike);
}

var firstMary = 94;
var secondMary = 134;
var thirdMary = 105;

var averageMary = (firstMary + secondMary + thirdMary) / 3;

console.log('Mary\'s team average score : ' + averageMary);

switch(true) {
    case averageJohn > averageMike && averageMike > averageMary:
        console.log('John\'s team wins : '  + averageJohn);
        break;
    case averageJohn === averageMike && averageJohn === averageMary:
        console.log('Their team tied : '  + averageJohn);
        break;
    case averageJohn < averageMary && averageMike < averageMary:
        console.log('Mary\'s team wins : '  + averageMary);
        break;
    default :
        console.log('Mike\'s team wins : '  + averageMike);
}

*/

function caculateAge(birthYear){
    return 2020 - birthYear;
}


var ageJohn = caculateAge(1993);
var ageDo = caculateAge(1994);
var ageAn = caculateAge(1989);
console.log(ageJohn, ageDo, ageAn);

function





