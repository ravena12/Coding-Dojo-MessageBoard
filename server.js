//Going to use express
var express = require('express');
//Invoking express storing it in a variable called 'App'
var app = express();
//Path will tell oS which path to use to read the app
var path = require('path');
//Parser translates information from forms 
var bodyParser = require('body-parser');
//Invoking body-parser to be used
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static(path.join(__dirname, './clients/static')));
//Directing our server to the views folder where our front end will be created
app.set('views', path.join(__dirname, './clients/views'));



//Tells program to read ejs files within views folder
app.set('view engine', 'ejs');
// require that file  we need to tell the server that we are using this file
require('./server/config/mongoose.js');

//Telling app we want our routes.js file to be read and passed the app function
require('./server/config/routes.js')(app);

//Telling app to listen for localhost8000
app.listen(8000, function(){
	console.log("Listening on port 8000");
});