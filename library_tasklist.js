"use strict";

var taskList = {
    tasks: [], //array to hold Task objects
    storage: getTaskStorage("tasks_11"), //storage object
    displayDiv: null, // div that displays tasks
    deleteClickHandler: null, // delete click event handler
    load: function() {
        if (this.tasks.length === 0) {
            taskList.tasks = this.storage.get();
        }
    },
    save: function() {
        this.storage.set(this.tasks);
    },
    sort: function() {
        this.tasks.sort();
    },
    add: function(task) {
        this.tasks.push(task.toString());  // calls the custom toString method of the task object
    },
    delete: function(i) {
        this.sort();
        this.tasks.splice(i, 1);
    },
    clear: function() {
        this.tasks.length = 0;
        this.storage.clear();
        this.displayDiv.innerHTML = "";
    },
    display: function() {
        var html = "";
        this.sort();

        //create and load html string from sorted array
        for (var i in this.tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' title='", i, "'>Delete</a>");
            html = html.concat(this.tasks[i]);
            html = html.concat("</p>");
        }
        this.displayDiv.innerHTML = html;

        //get links and add click event handlers
        var links = this.displayDiv.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = this.deleteClickHandler;
        }
    }

};