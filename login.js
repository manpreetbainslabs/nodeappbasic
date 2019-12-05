var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodelogin'
});
var app = express();
//defined connection variable
app.set('connection', connection);

app.set('view engine', 'ejs');

app.use( express.static( "public" ) );

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var auth = function (request, response, next) {
  // var loggedin = request.session.loggedin;  
  // var username = request.session.username;
  // console.log('auth');
  //var user = [{name:username}];
  next();
}

app.use(auth);

require('./routes')(app);

app.listen(3000);
