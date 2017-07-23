"use strict";
/**
 * Created by Akshar on 7/23/2017.
 */
var Mymath;
(function (Mymath) {
    var PI = 3.41;
    function circumference(radius) {
        return PI * radius * radius;
    }
    Mymath.circumference = circumference;
})(Mymath || (Mymath = {}));
