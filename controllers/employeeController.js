module.exports.signIn = function(req, res){

    var email = req.body.email;

    res.render('sign_in', {
        title: "Employee Review System | Sign In"
    });
};

module.exports.signUp = function(req, res){

    var email = req.body.email;

    res.render('sign_up', {
        title: "Employee Review System | Sign Up"
    });
};