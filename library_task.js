"use strict";

//constructor function
// var Task = function(task) {
//     this.text = task;
// };

//below two methods are added to the prototype object
// Task.prototype.isValid = function() {
//     if (this.text === "") {
//         return false;
//     } else {
//         return true;
//     }
// };

// Task.prototype.toString = function(){
//     //capitalize the first letter of the task text
//     return this.text.capitalize();
// };

var taskPrototype = {
    isValid: function() {
        if(this.text === "") {
            return false;
        } else {
            return true;
        }
    },
    toString: function() {
        return this.text.capitalize();
    }
};

var getTask = function(taskText) {
    var task = Object.create(taskPrototype);
    task.text = taskText;
    return task;
}
