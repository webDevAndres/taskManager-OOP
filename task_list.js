"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var addToTaskList = function() {
    var taskTextBox = $("task");
    var newTask = new Task(taskTextBox.value);
    if(newTask.isValid()) {
        taskList.add(newTask);
        taskList.save();
        taskList.display();
        taskTextBox.value = "";
    } else {
        alert("Please enter a task.");
    }
    taskTextBox.focus();
};

var clearTaskList = function() {
    taskList.clear();
    $("task").focus();
};

var deleteFromTaskList = function() {
    taskList.delete(this.title) // this = clicked link
    taskList.save();
    taskList.display();
    $("task").focus();
};

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    taskList.deleteClickHandler = deleteFromTaskList;
    taskList.displayDiv = $("tasks");

    taskList.load();
    taskList.display();
    $("task").focus();
}
