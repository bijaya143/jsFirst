//log to console
console.log('hello monseour Dracula');

//console error
console.error('This is an error');

//console to table
console.table({a:1, b:2});

//var to declare variable

//naming conventions
//Dont use any reserved JS keywords (console)
//shouldn't start variable with number (0-9)
//always start variable with letter or _ 
//case sensitive
//use camelCase

//declaring variables with var, let & const
var name = 'bijaya';

console.log(name);

name = 'dary';
console.log(name);

var job;
console.log(job);

job = 'Manager';
console.log(job);

//let
let fName = 'Pugu';
console.log(fName);

//const
const car = 'mercedes';
console.log(car);

//have to assign it to a value in const
// const animal;
// console.log(animal);

const person = 
    {
        name: 'Bijaya',
        age: 22,
        phone: '+9779862712972'
    };
    person.name = 'Bijaya Majhi';

console.log(person);

//data type
//boolean =true/false
//undefined 
//number 
//null = null
//string
//symbol  = Symbol()

let gName = 'Sweta';
console.log(gName);
console.log(typeof gName);

//reference types
const animals = ['pug', 'lab', 'german'];
//const animals = new Array('pug', 'lab', 'german');

console.log(animals);

//object literal
var myInfo = 
{
    name: 'bijaya Majhi',
    age: 22,
    Academic: 'undergraduate',
    city: 'Lalitpur'
};
console.log(myInfo);

//date
const today = new Date();
console.log(today);

//type conversion
let val;

//num to string
val = String(3);
console.log(val);
console.log(typeof val);

//date to string
let pugu;
pugu = String(new Date());
console.log(pugu);
console.log(pugu.length);
console.log(typeof pugu);

//toString method
let fal;
fal = (10).toString();
console.log(fal);
console.log(typeof fal);

//string to number
let kal;
kal  = Number('10');

//array to number
kal = Number([1,2,3,4]);

//parseInt
kal = parseInt(50.60);

//parseFloat
kal = parseFloat(50.70);
console.log(kal);
console.log(typeof kal);
console.log(kal.toFixed(2));

//arithmetic operaters
const num1 = 21;
const num2 = 10;
 let arithmetic;
  arithmetic = num1 + num2;
    
    //modulus
    arithmetic = num1 % num2;

    //increment
    arithmetic = 1;
    ++arithmetic;

 console.log(arithmetic);

    
//MATH OBJECTS
var ath;
ath = Math.PI;

    //specify round number
    ath = Math.ceil(2.3);
    ath = Math.floor(2.8);

    //round number
    ath = Math.round(3.6);

    //square
    ath = Math.sqrt(64);

    //absolute value
    ath = Math.abs(-10);

    //power of a number
    ath = Math.pow(2, 2);
console.log(ath);

//CONCATENATION & APPENDING
const fname1 = 'Bijaya';
const lname1 = 'Majhi';
const age1 = 22;
let val1;
val1 = fname1 + ' ' + lname1 + ' ' + age1;

//Interpoliation
val1 = `My name is ${fname1} ${lname1} and my age is ${age1}`;

console.log(val1);

//comparison operatres
const x = 20;
const y = 20;
// (equal ==) & (strictly equal ===)
console.log(x == y);
//!= is not equal
console.log(x != y );
// smaller or greater < >
console.log(x>y);

//logical operaters 
const a = 11;
const b = 21;
// && = (and)
// || (or)
// ! (not)

    if(a>12 && b>19)
    {
        console.log('true');
    }
    else
    {
        console.log('false');
    }

//assignment operators
const p = 10;
const q = 10;
let r = 15;
// += add and then assign
r += 5;
console.log(r);

//ARRAY and ARRAY METHODS
const actors = ['johnny', 'tom', 'brad', 'ice'];

//array constructor
const age = new Array(1,2,3,4,7);

//mix array
const mixed = ['Bijaya', 'Majhi', undefined, false];

//get specific value
let jal;
jal = actors[0];

//add value to an array
actors.push('Rajesh');

//delete value to an array
actors.pop();

//delete first value of an array
jal = actors.shift();

//adding value at front of an array
jal = actors.unshift('johnny'); 

//create a complete string
jal = actors.join('|');

//reverse 
jal = actors.reverse();

//sort
jal = actors.sort();
jal = age.sort();

console.log(mixed);
console.log(age);
console.log(actors);
console.log(jal);

//DATE  
const now = new Date();
let value = now.toString();
const birthday = new Date(1999, 10, 09);
console.log(birthday);
console.log(now);
console.log(typeof value);