const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const database = require('./database');

const app = express();
dotenv.config();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.static("public"));

// Routing
const transactions= require('./routes/transactions');
app.use('/transactions', transactions);
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// starting the application
const port = process.env.PORT || 5000;
database.connect(app, port);