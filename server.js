//**********SETUP AN EXPRESS SERVER*********//

//express to run server and routes
const express = require('express');

//Initiate an instance of express called app
app = express()

//Dependencies
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//set the port number
const port = 8000

//create a new varible that is the server, using the .listen() method on the app instance.
//It accepts two arguments, one is the port and the other is a callback functioin that initiates the action once the server is 
//created

const server = app.listen(port, listening)