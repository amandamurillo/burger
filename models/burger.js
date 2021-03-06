//import orm.js into burger.js

//Also inside burger.js, create the code that will
// call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.
// model is a reflection of a table in the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
    
};

//export the database functions for the controller (burgersController.js)
module.exports = burger;