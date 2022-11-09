"use strict";
const express = require("express");
const soap = require("soap");
const fs = require("fs");
const cors = require("cors");
const exphbs = require('express-handlebars');
const path = require('path');
const { request, gql } = require('graphql-request')

require('dotenv').config();

const url = process.env.URL || "http://localhost:5000/graphql";

function getActById(id) {
    const query = gql `{
        getAct(actId:${id}){
            message
        }
    }`
    return query
}

// the function, used by the service
function main(args, callback) {
    const id = args.id;
    request(url, getActById(id))
        .then((data) => {
            const act = data.getAct.message;
            callback({
                result: act
            });
        })
        .catch(error => {
            console.log(error)
    	})
}

// the service
var serviceObject = {
	MessageSplitterService: {
	    MessageSplitterServiceSoapPort: {
	        MessageSplitter: main
	    },
	    MessageSplitterServiceSoap12Port: {
	        MessageSplitter: main
	    }
	}
};

// conectar a routes
const xml = fs.readFileSync('service.wsdl', 'utf8');
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
app.use(cors());

// global variables

// routes
app.get('/', (req, res) => {
	res.send("Inicio de intreface_ms");
});

// static files
app.listen(app.get('port'), () => {
	const wsdl_path = "/wsdl";
    soap.listen(app, wsdl_path, serviceObject, xml);
	console.log(`http://localhost:${app.get('port')}`);
});