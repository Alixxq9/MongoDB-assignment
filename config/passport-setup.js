const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/User')

// saving user object in the session

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(user => done(null, user))
        .catch(err => done(err));
  });

// register user
passport.use('local.signup', new localStrategy({
    usernameField : 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req,username,password, done)=> {
    if (req.body.password != req.body.confirm_password) {
        return done(null, false, req.flash('error', 'Passwords do not match'))
    } else {
        User.findOne({email: username})
            .then(user => {
                if(user) {
                    return done(null, false, req.flash('error', 'Email already used'))
                }

                //create user
                let newUser = new User()
                newUser.email = req.body.email
                newUser.password = newUser.hashPassword(req.body.password),
                newUser.avatar = "profile.png"
                return newUser.save()
            })
            .then(user => {
                if (user) {
                    return done(null, user, req.flash('success', 'User Added'))
                }
            })
            .catch(err => {
                return done(err)
            })
    }
}))

//login strategy

passport.use('local.login', new localStrategy({
    usernameField : 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req,username,password, done)=> {

    //find user
    User.findOne({email: username})
        .then(user => {
            if(!user) {
                return done(null, false, req.flash('error', 'user was not found'))
            }
            
            if (user.comparePasswords(password, user.password)) {
                return done(null,user, req.flash('success', ' welcome back'))
            } else {
                return done(null,false, req.flash('error', ' password is wrong'))
            }
        })
        .catch(err => {
            return done(null, false, req.flash('error', 'Something wrong happened'))
        })
}))
