"use strict";

//constructor function
var Task = function(task) {
    this.text = task;
};

//below two methods are added to the prototype object
Task.prototype.isValid = function() {
    if (this.text === "") {
        return false;
    } else {
        return true;
    }
};

Task.prototype.toString = function(){
    //capitalize the first letter of the task text
    return this.text.capitalize();
};