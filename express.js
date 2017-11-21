const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let id = 1;

let todos = [{
  task: "Clothes",
  done: false,
  id: 0
},{
  task: "Laundry",
  done: true,
  id: 1
}];

app.use(bodyParser.json())

app.get('/todos', (req,res) =>{
  res.send(todos);
});

app.get('/todos/:id', (req,res) =>{
  console.log("GET Todo")
  res.send(todos[req.params.id]);
});

app.put('/todos/:id', (req,res) =>{
  req.body.id = parseInt(req.params.id);
  todos[req.params.id] = req.body
  res.send(todos[req.params.id]);
});

app.delete('/todos/:id', (req, res) => {
  console.log('DELETE todo')
  res.send(todo)
})


app.post('/todos', (req,res) => {
  todos.push(req.body);
  req.body.id = ++id;
  res.send(todos);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port);
