/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('demo'));

const port = 4000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };
 
const fakeAnimal = {
  animal : 'lion',
  fact : 'lions are funny',
}

app.get('/fakeAnimal', (req ,res)=>{res.send(fakeAnimal)})


let addAnimal = []

app.post('/addAnimal', (req,res)=>{
  newEntry={
    animal : req.body.animal,
    fact : req.body.fact,
    fav : req.body.fav,
    
  } 
  addAnimal.push(newEntry);
  console.log(addAnimal)
})

app.get('/all', (req,res)=>{res.send(addAnimal)})


