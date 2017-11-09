var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.save = function() {
     console.log("saving task: " + this.name);
};


module.exports = Task;