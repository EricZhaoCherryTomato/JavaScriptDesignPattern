var repo = function(){

    var Get = function(id){
        console.log("Getting task: " + id);
        return {
            name : "new task from db" + id
        }
    };

    var Save = function(id){
        console.log("Saving task: " + id);
        return {
            name : "saving new task from db" + id
        }
    };

    return {
        get : Get,
        save : Save
    }
}

module.exports = repo();