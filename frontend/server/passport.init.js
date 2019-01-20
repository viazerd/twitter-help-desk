const passport = require('passport');
const { Strategy: TwitterStrategy } = require('passport-twitter');
const {
    TWITTER_CONFIG
} = require('./config');

module.exports = () => {

    // Allowing passport to serialize and deserialize users into sessions
    passport.serializeUser((user, cb) => cb(null, user));
    passport.deserializeUser((obj, cb) => cb(null, obj));

    // The callback that is invoked when an OAuth provider sends back user
    // information. Normally, you would save the user to the database
    // in this callback and it would be customized for each provider.
    const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile);

    // Adding each OAuth provider's strategy to passport
    passport.use(new TwitterStrategy(TWITTER_CONFIG, callback));

};