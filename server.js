//
var express = require("express");
var PORT = process.env.PORT || 3000;

var app = express();

//all static content starts here
app.use(express.static("public"));

//parse req body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
var routes = require("./controllers/burgers_controller.js")
app.use(routes);


app.listen(PORT, function(){
    console.log("App now listening at localhost:" + PORT);
})