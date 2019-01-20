const Twitter = require('twitter');

module.exports = (app,io)=>{
    let twitter = new Twitter({
        consumer_key: 'CQ9V3rPJPsAgF1JNfU3enJJ4S',
        consumer_secret: 'lIUGVBRafvU8tJDNNmWoqNgeH3Ak9NorS2TYziAGwfwK6L1SDA',
        access_token_key: '4606112658-rRFgrTLdhtAtQmbBoETBn1dSx0APXkxNQEoPSoj',
        access_token_secret: 'CGXgZLsBQrnoMPE8mJz4jHX7PkOq4q9e16wWhzMQhwJnW'
    });

    

    io.on("connection",socket=>{
       socketConnection = socket;
       stream();
       socket.on("connection",()=>console.log("Client connected"));
       socket.on("disconnect",()=>console.log("Client disconnected"));
    });



};