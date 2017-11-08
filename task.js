var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.save = function() {
     console.log("saving task: " + this.name);
};

var task1 = new Task("task 1");
task1.save();