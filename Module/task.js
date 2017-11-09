var Task = function(data){
    this.name = data.name;
    this.completed = false;
}

Task.prototype.save = function() {
     console.log("saving task: " + this.name);
};


module.exports = Task;