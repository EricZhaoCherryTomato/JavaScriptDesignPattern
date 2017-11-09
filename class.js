'use strict'

class Task {
    constructor(name){
        this.name = name;
        this.complete = false;
    };

    save() {
        console.log("saving task: " + this.name);
    };
}

module.exports = Task;