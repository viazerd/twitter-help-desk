const express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express(),
    passport = require('passport'),
    TwitterStrategy = require('passport-twitter');
var session = require('express-session');
const PORT = 4000;
const twitterRouter = express.Router();


passport.use(new TwitterStrategy({
      consumerKey: 'FGbZIG28PKDXS1TD6zQt0RFOM',
      consumerSecret: '1S9yXBy9rxNBOoKkiw88qxM2LbbEqh741vFudau9Spq7cSQWng',
      callbackURL: "http://127.0.0.1:3000/auth/twitter/return"
    },
    function(token, tokenSecret, profile, cb) {
      User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
));

passport.serializeUser(function (usr,cb) {
  cb(null,user)
});
passport.deserializeUser(function (obj,cb) {
  cb(null,user)
});


app.set('views',path.join(__dirname,'views'));
app.set('views engine','jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret:'whatever',
  resave:true,
  saveUninitialized:true
}));

/*twitterRouter.route('/').get(function(req,res){
  // res.render('../src/app.js');
  console.log("reached");
  res.render('index.jade');
});*/

app.get('/',function (req,res) {
    res.render('index.jade')
});

app.get('/twitter/login',passport.authenticate('twitter'));
app.get('/twitter/return',passport.authenticate('twitter',{
  failureRedirect:'/'
}),function (req,res) {

});



module.exports = app;

