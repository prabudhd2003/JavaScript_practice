//infinite function
/*
function example(){
    console.log("Line one");
    console.log("Line Two");
    example();
}
example();
*/
//this is called a recurssion function this makes the function repeat without the use of loops
var counter = 3;
function example(){
    console.log(counter);
    counter -= 1;
    if(counter===0) return;
    example();
}
example();