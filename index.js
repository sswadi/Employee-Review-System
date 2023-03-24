const express = require('express');
const path = require('path'); //inbuilt 
const port = 8000; //port number

const app = express(); //creating express server

app.set('view engine', 'ejs'); //setting ejs as the template engine
app.set('views', path.join(__dirname, 'views')); //setting up path for views
app.use(express.urlencoded());//middleware which is required to process that req data coming in(which is usally in form of a string) into for ex. key-value pair





















app.listen(port, function(err){
    if(err){
        console.log('error in connecting to the server');
        return;
    }
    console.log(`Successfully connected to the server: ${port}`);
});