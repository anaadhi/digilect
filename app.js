const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');
const blockchain = require("./blockchain/blockchain");



// middle ware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// redirect
app.get('/', (req,res) => {
    res.redirect('/home');
});

// imports
const home = require('./routes/home');
app.use('/home', home);

const vote = require('./routes/vote');
app.use('/vote', vote);

const result = require('./routes/result');
app.use('/results', result);


// get port
const port = process.env.PORT || 3000;

// serveer
app.listen(port,() => {console.log('listening on port ' + port)})