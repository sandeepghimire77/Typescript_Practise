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
/* abstract classes may never be instantiated
* https://hackernoon.com/abstract-classes-in-typescript-text-video-cda9a4e6a56a */
var Project = (function () {
    function Project() {
        this.projectName = "default";
    }
    Project.prototype.calculatebudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITproject = (function (_super) {
    __extends(ITproject, _super);
    function ITproject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITproject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITproject;
}(project));
var project = new ITproject();
console.log(project);
