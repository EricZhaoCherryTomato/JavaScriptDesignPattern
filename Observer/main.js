var Task = require('./task');

var notificationService = function(){
    var message = 'Notification ';
    this.update = function(task){
        console.log(message = task.user + ' for task' + task.name);
    }
};

var loggingService = function(){
    var message = 'Logging ';
    this.update = function(task){
        console.log(message = task.user + ' for task' + task.name);
    }
};

var auditingService = function(){
    var message = 'Auditing ';
    this.update = function(task){
        console.log(message = task.user + ' for task' + task.name);
    }
};

function ObserverList(){
     this.observerList = [];
};

ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj);
}

ObserverList.prototype.get = function(index){
    return this.observerList[index];
}

var ObserverableTask = function(data){
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObserverableTask.prototype.addObserver = function(observer){
    //console.log(observer);
    this.observers.add(observer);
}

ObserverableTask.prototype.notify = function(context){
    //console.log(this.observers);
    for (var i = 0; i < this.observers.length; i++) {
        this.observers.get(i)(context);
    }
}

ObserverableTask.prototype.save = function(){
    this.notify(this);

    Task.prototype.save.call(this);
}



var task1 = new ObserverableTask({name:'create a demo for constrcutors', user:'Jon'});

var not = new notificationService();
var ls = new loggingService();
var aduit = new auditingService();

task1.addObserver(not);
task1.addObserver(ls);
task1.addObserver(aduit);


task1.save();