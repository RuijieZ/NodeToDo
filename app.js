var express = require('express');
var mongoose = require('mongoose');
var app = express();
var config = require('./config');
var setupController = require('./controllers/setupController');
var port = process.env.PORT || 3000;

app.use('/asset', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
mongoose.connect(config.getConnectionString());

setupController(app);



app.listen(port);