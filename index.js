var soap = require("soap");
var express = require("express");
var fs = require("fs");
var cors = require("cors");

const axios_ = require("axios");
const apiUrl = require("./constants").apiUrl;
const queries = require("./constants").queries;

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

var xml = fs.readFileSync("service.wsdl", "utf8");
var app = express();

app.use(function (req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors())


app.listen(3002, function () {
  var wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log("Check http://localhost:3002" + wsdl_path + "?wsdl");
});
console.log("Running on 3002");
