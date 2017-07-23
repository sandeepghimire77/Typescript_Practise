"use strict";
/**
 * Created by Akshar on 7/22/2017.
 */
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person._firstName);
person._firstName = "Ma";
console.log(person._firstName);
person._firstName = "Maximilian";
console.log(person._firstName);
