"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        console.log(this.name + " is " + this.age + " years old");
    };
    return Person;
}());
exports.Person = Person;
