// app.js
const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

app.use(express.json());
app.use('/contacts', contactRoutes);

module.exports = app;
