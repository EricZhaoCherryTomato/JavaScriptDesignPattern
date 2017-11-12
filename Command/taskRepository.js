var repo = {
    tasks : {},
    commands: [],

     get: function(task){
        console.log("Getting task: " + task.id);
        return {
            name : "new task from db" + id
        }
    },

     save: function(task){
        repo.tasks[task.id] = task;
        console.log("Saving task: " + task.id);
    },

    replay: function(){
        repo.commands.forEach(function(command){
            repo.executeNoLog(command.name, command.obj);
        });
    }
}

repo.executeNoLog = function(name, obj){
    var args = Array.prototype.slice.call(arguments,1);
    if(repo[name]){
        return repo[name].apply(repo, args)
    }
    return false;
};

repo.execute = function(name, obj){
    //console.log(arguments);
    //console.log(name);
    //console.log(obj);
    var args = Array.prototype.slice.call(arguments,1);

    repo.commands.push({
        name: name,
        obj : obj
        
    });

    if(repo[name]){
        return repo[name].apply(repo, args)
    }
    console.log(repo);
    return false;
};


repo.execute('save', {
    id: 1,
    name: 'Task 1',
    completed: false
});

repo.execute('save', {
    id: 2,
    name: 'Task 2',
    completed: false
});

repo.execute('save', {
    id: 3,
    name: 'Task 3',
    completed: false
});

repo.execute('save', {
    id: 4,
    name: 'Task 4',
    completed: false
});

console.log(repo.tasks);

repo.tasks = {};

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);
