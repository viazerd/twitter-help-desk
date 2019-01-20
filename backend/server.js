const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 8000;

const server = http.createServer(app);
const io = socketio(server);

app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/twitter-helpdesk',{useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("MongoDB connected!!");
});

//require('./tweets.js')(app,io);


server.listen(PORT,function () {
    console.log("listening on port number :" + PORT);
});