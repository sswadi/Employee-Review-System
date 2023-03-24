const mongoose = require('mongoose'); //require the lib
mongoose.connect('mongodb://localhost/employee_review_system'); //connect to db
const db = mongoose.connection; //acquire the connection to check if it was successful

db.on('error', console.error.bind(console, 'error connecting to the db'));

db.once('open', function(){
    console.log('Successfully connected to the DB');
});