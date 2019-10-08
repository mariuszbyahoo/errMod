'use strict';

var Repo = function () {

    var get = function(id) {
        console.log('Getting task ' + id);
        return {
        name: 'new task from db ID: ' + id
        }
    }

    var save = function(task){
        console.log('Saving ' + task.name + ' to the db');
    }

        return {
            get: get,
            save : save
        }
    }

module.exports = Repo(); // Tu muszą być nawiasy bo bez nich apk nie działa