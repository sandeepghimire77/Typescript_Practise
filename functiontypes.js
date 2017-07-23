"use strict";
/**
 * Created by Akshar on 7/16/2017.
 */
function sayhello() {
    console.log(21 + "hello");
}
function multiply(number1, number2) {
    return number1 * number2;
}
// function types
var mymultiply;
mymultiply = sayhello;
mymultiply();
mymultiply = multiply;
console.log(mymultiply(5, 3));
