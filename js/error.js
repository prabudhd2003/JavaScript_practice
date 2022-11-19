//Error Handling

try{
    console.log(c+d);
}catch(err){
    console.log(err);
// do something
}
console.log("this program now runs")

try{
    throw new Error();  //throw can be used outside the try block but then it wouldn't be possible to catch it.
}catch(err){
    console.log(err);
}
console.log("this program now runs")