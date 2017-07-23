"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Akshar on 7/22/2017.
 */
var Person = (function () {
    function Person(name, username) {
        this.age = 42;
        this.name = name;
        this.username = username;
    }
    Person.prototype.agemethod = function () {
        console.log("old guy " + " " + "because you are " + " " + this.age + "years old ");
    };
    Person.prototype.printage = function () {
        console.log(this.age);
        console.log(this.agemethod());
    };
    return Person;
}());
var sandeep = (function (_super) {
    __extends(sandeep, _super);
    function sandeep() {
        var _this = _super.call(this, "Sandeep ghimire ", "sandy") || this;
        _this.age = 26;
        return _this;
    }
    sandeep.prototype.agemethod = function () {
        console.log("young guy " + " " + "because he is " + " " + this.age + " " + "years old ");
    };
    return sandeep;
}(Person));
var san = new sandeep();
console.log(san);
console.log(san.printage());
