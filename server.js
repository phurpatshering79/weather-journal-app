//**********SETUP AN EXPRESS SERVER*********//

//express to run server and routes
const express = require('express');

//Initiate an instance of express called app
app = express()

//Dependencies
//const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize the main project folder. Basically get the broswer side files.
app.use(express.static(__dirname+'/website'));

//set the port number
const port = process.env.PORT || 8080

//create a new varible that is the server, using the .listen() method on the app instance.
//It accepts two arguments, one is the port and the other is a callback functioin that initiates the action once the server is 
//created

//spin up the server
const server = app.listen(port, listening)

const projectData = []

function listening(){
    console.log('The server is running on port ' + port)
}
app.get('/',(req,res)=>{
    res.render("index")
})
app.post('/post',(req,res)=>{
    projectData.push(req.body)
    res.send(projectData)
})

app.get('/all',(req,res) =>{
    res.send(projectData)
})

