var express = require('express'),
    app = express(),
    port = process.env.PORT  || 3000,
    mongoose = require('mongoose'),
    bodyparser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nutrihit');

app.use(bodyparser.urlencoded({ extend: true }));
app.use(bodyparser.json());

var routes = require('./api/routes/profileRoutes');
routes(app);

app.listen(port);

console.log('Nutrihit list RESTful API server started on: ' + port);