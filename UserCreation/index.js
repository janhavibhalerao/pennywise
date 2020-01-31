const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/database.config');
var cors = require('cors');
const path = require('path');
const passport = require ('passport');
var session = require('express-session');

// require('./passport')(passport)

// var index = require('./routes/index');
// var users = require('./routes/users');
// var auth = require('./routes/auth')(passport);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    res.json({'message':'Welcome'}); 
});

mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Error connecting to database");
});

require('./route/app.route')(app);

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

const port = 3000;
app.listen(port,() => {
    console.log("Server Running on port"+" "+port);
});