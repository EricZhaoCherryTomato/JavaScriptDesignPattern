var projectRepo = function(){

    var Get = function(id){
        console.log("Getting project: " + id);
        return {
            name : "new project from db" + id
        }
    };

    var Save = function(id){
        console.log("Saving project: " + id);
        return {
            name : "saving new project from db" + id
        }
    };

    return {
        get : Get,
        save : Save
    }
}

module.exports = projectRepo();