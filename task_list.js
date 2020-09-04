"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var addToTaskList = function() {
    var taskTextBox = $("task");
    // var newTask = new Task(taskTextBox.value);
    var newTask = getTask(taskTextBox.value);
    if(newTask.isValid()) {
        taskList.add(newTask).save().display();
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
    taskList.delete(this.title).save().display() // this = clicked link
    $("task").focus();
};

var editTaskListItem = function() {
    var newText = prompt("Please enter new text", taskList.tasks[this.title]);
    // var editedTask = new Task(newText);
    var editedTask = getTask(newText);
    if(editedTask.isValid()) {
        taskList.edit(this.title, editedTask).save().display();
        $("task").focus();
    } else {
        alert("Please enter a valid task");
    }
};

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    taskList.deleteClickHandler = deleteFromTaskList;
    taskList.editClickHandler = editTaskListItem;
    taskList.displayDiv = $("tasks");

    taskList.load().display();
    $("task").focus();
}
