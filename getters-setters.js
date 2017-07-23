"use strict";
/**
 * Created by Akshar on 7/20/2017.
 */
var Plant = (function () {
    function Plant() {
        this._species = "Defaut";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length >= 3) {
                this._species = value;
            }
            else {
                this._species = "DEFUALT";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "ab";
console.log(plant.species);
plant.species = "Pednas ";
console.log(plant.species);
