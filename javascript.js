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