const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/admin');

//authetication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },

    function(email, password, done){
        //find a user and establish identity
        User.findOne({email: email}, function(err,user){
            if(err){
                console.log('Error in finding user in DB! ---> Passport');
                return done(err);
            }

            //if user is found but incorrect username/password entered
            if(!user || user.password != password){
                console.log('Invalid username or password!');
                return done(null, false); // this indicates there is no error but authetication not done due to invalid credentials
            }

            return done(null, user); //this indicates user was found and authetication done successfully
        });
    }
));

//serializing the user to decide which key(info like hash key/user id) to be kept in the cookies; this encrytption is done by the express session middleware
passport.serializeUser(function(user, done){ //serializeUser is an inbuilt function
    done(null, user.id);
}); 

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user in DB! ---> Passport Deserialize');
            return done(err);
        }

        return done(null, user); 
    });
});

//check if the user is autheticated so that we can send the user data to ejs to display information; this function will be used as a middleware
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }

    //if the user is not signed in
    return res.redirect('/users/sign-in');
}


passport.setAuthenticatedUser = function(req, res, next){
    
}

module.exports = passport;