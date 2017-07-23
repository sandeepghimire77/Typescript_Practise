"use strict";
/**
 * Created by Akshar on 7/20/2017.
 */
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.circumference = function (diameter) {
        return "the circumference is " + " " + this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
/* var helpers = new Helpers();
console.log(helpers.circumference(2)); */
console.log(Helpers.PI);
console.log(Helpers.circumference(2));
