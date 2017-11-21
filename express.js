const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let students = ['Simon', 'Scott'];

app.use(bodyParser.json())

app.get('/students', (req,res) =>{
  res.send(students);
});

app.post('/students', (req,res) => {
  students.push(req.body.name);
  res.send(students);
});

app.listen(port);
