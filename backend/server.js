const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/twitter-helpdesk',{useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("MongoDB connected!!");
});


app.listen(PORT,function () {
    console.log("listening on port number :" + PORT);
});