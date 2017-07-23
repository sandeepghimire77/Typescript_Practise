/**
 * Created by Akshar on 7/16/2017.
 */
function sayhello(): void{
console.log(21 + "hello");
}
function multiply(number1 : number, number2 : number) : number
{
    return number1*number2;
}


// function types
let mymultiply;
mymultiply = sayhello;
mymultiply();
mymultiply = multiply;
console.log(mymultiply(5,3));

