const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path'); //inbuilt 
const port = 8000; //port number
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session'); //used for session cookie
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const app = express(); //creating express server

app.use(express.urlencoded());//middleware which is required to process that req data coming in(which is usally in form of a string) into for ex. key-value pair
app.use(cookieParser());

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



app.set('view engine', 'ejs'); //setting ejs as the template engine
app.set('views', path.join(__dirname, 'views')); //setting up path for views

app.use(session({
    name: 'employee_review_system',
    //TODO change the secret before deployement in production mode
    secret: 'blaaah',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('error in connecting to the server');
        return;
    }
    console.log(`Successfully connected to the server: ${port}`);
});