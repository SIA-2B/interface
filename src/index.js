const express = require("express");
const soap = require("soap");
const fs = require("fs");
const cors = require("cors");
const path = require('path');

require('dotenv').config();

// conectar a routes
const serviceRouter = require("./routes/service.js");

// Initiliazations
const app = express();
const port = process.env.PORT || 4200;

// settings
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.json());
app.use('/wsdl', serviceRouter);

// global variables

// routes
app.get('/', (req, res) => {
	res.send("Inicio de intreface_ms");
});

// static files
app.listen(app.get('port'), () => {
	console.log(`http://localhost:${app.get('port')}`);
});