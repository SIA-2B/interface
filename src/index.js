"use strict";
const express = require("express");
const soap = require("soap");
const fs = require("fs");
const cors = require("cors");
const exphbs = require('express-handlebars');
const path = require('path');
const { request, gql } = require('graphql-request')
const axios_ = require("axios");
const { apiUrl, queries } = require("./controller/constants.js")

require('dotenv').config();

const url = process.env.URL || "http://localhost:5000/graphql";

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
app.use('/api', serviceRouter);

// routes
app.get('/', (req, res) => {
	res.send("Inicio de intreface_ms");
});

// static files
app.listen(app.get('port'), () => {
	console.log(`http://localhost:${app.get('port')}`);
});

const getSongByName = async (args) => {
  
  const response = await axios_.post(apiUrl, {
    query: queries.getSongByName,
    //variables: { id: args.id },
  });
  return response.data.data;
};

var serviceObject = {
  DocumentsService: {
    DocumentsServiceSoapPort: {
      Documents: getSongByName,
    },
   DocumentsServiceSoap12Port: {
    Documents: getSongByName,
    },
  },
};

const xml = fs.readFileSync("service.wsdl", "utf8");
const app2 = express();

const port2 = process.env.PORT2 || 4300;

app2.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app2.use(cors());

app2.listen(port2, function () {
  var wsdl_path = "/wsdl";
  soap.listen(app2, wsdl_path, serviceObject, xml);
  console.log("Check http://localhost:3002" + wsdl_path + "?wsdl");
});