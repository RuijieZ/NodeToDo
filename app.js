var express = require('express');
var mongoose = require('mongoose');
var app = express();
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var port = process.env.PORT || 3000;

app.use('/asset', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
mongoose.connect(config.getConnectionString());

setupController(app);
apiController(app);


app.listen(port);