'use strict';
var Repo = require('./taskRepository.js');

var Task = function (data) {
        this.name = data.name;
        this.completed = false;
}

//Exctending a Task Prototype, by adding a new function to it:

Task.prototype.complete = function () {
    console.log('copleting task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function(){
        console.log('saving Task: ' + this.name);
        Repo.save(this);
};

module.exports = Task; // W tym przypadku nie można tu wstawiać przecinków tylko eksportować jak variable bo kompilator będzie protestować.