//conditional statements
let bool = false;
if(bool)
    {
        console.log("This statement is true");
    }
    else
    [
        console.log("This statement is false")
    ]

let x = 10;
let y = 12;
if(x == 3 && y == 2)
    {
        console.log("True!");
    }
    else if (x==9 || y ==5)
    {
        console.log("Both true");
    }
    else
    {
        console.log("The statement is wrong!");
    }

//SWITCH 
let a = 5;

switch (a){
    case 1:
    console.log("the num is 1");
    break;

    case 2:
    console.log("num is 2");
    break;

    case 5:
    console.log("num is 5");

    default: "no found";
}

//LOOPS and ITERATION
//while
//do while
let b = 1;
while(b < 10)
{
    console.log("Number is " +b);
    b++;
    // b += 2
}

//for loop
for(c=0; c<5; c++)
{
    console.log("Number is " + c);
}

//FUNCTION
function showMessage()
{
    console.log("First Message");
}
showMessage();

//adding parameters
function printName(fname)
{
    console.log("My name is " + fname);
}
printName('bijaya');

function showName(num1, num2)
{
    return num1 + num2;
}

console.log(showName(1, 4));


//window object (IMPORTANT)

//alert
//window.alert('hello');

//prompt
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Do You like this?'))
// {
//     console.log('yes');
// }
// else{
//     console.log('No');
// }

//height & width
let q;
q = window.outerHeight;
q = window.outerWidth;

//inner height & width
q = window.innerHeight;

//location object
q  = window.location;

q = window.location.search;

//redirect
//q = window.location.href = 'https://apple.com';

//reload
//q = window.location.reload();

//navigator
q = window.navigator;
console.log(q);

