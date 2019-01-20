const providers = ['twitter'];

const callbacks = providers.map(provider => {
    return process.env.NODE_ENV === 'production'
        ? `https://react-auth-twitter.herokuapp.com/${provider}/callback`
        : `https://localhost:8080/${provider}/callback`
})

const [twitterURL] = callbacks;

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
    ? 'https://react-auth-twitter.netlify.com'
    : ['https://127.0.0.1:3000', 'https://localhost:3000']

exports.TWITTER_CONFIG = {
    consumerKey: 'CQ9V3rPJPsAgF1JNfU3enJJ4S',
    consumerSecret: 'lIUGVBRafvU8tJDNNmWoqNgeH3Ak9NorS2TYziAGwfwK6L1SDA',
    callbackURL: twitterURL,
};
