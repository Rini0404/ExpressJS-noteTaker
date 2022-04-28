const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// TODO: add routes for our api/html

// initialize app and create port 
const app = express();
const PORT = 3001;

// set up body parsing, and route ,middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);



app.listen(PORT, () => console.log(`This port is listening at http://localhost:${PORT}`));