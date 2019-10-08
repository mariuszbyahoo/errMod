'use strict';

var Task = require('./task.js');
var Repo = require('./taskRepository.js');

console.log('Debug proceed');

var task1 = new Task(Repo.get(1));

var task2 = new Task({name:'create a demo for modules'}); // returns udefined
var task3 = new Task({name:'create a demo for singletons'}); // returns udefined
var task4 = new Task({name:'create a demo for prototypes'}); // returns udefined

task1.complete();
task2.save();
task3.save();
task4.save();