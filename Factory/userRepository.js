var userRepo = function(){

    var Get = function(id){
        console.log("Getting user: " + id);
        return {
            name : "new user from db" + id
        }
    };

    var Save = function(id){
        console.log("Saving user: " + id);
        return {
            name : "saving user task from db" + id
        }
    };

    return {
        get : Get,
        save : Save
    }
}

module.exports = userRepo();