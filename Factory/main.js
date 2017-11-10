var Task = require('./task');
var RepoFactory = require('./repoFactory');

var task1 = new Task(RepoFactory.user.get(1));
var task2 = new Task(RepoFactory.task.save(2));


task1.save();
task2.save();