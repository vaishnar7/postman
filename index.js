const express = require('express');
const bodyParser = require('body-parser')
const todo=require('./todo');
todo.addTodo("todo");
const app = express();
app.use(bodyParser.json());

const port = 3000;
/*app.get('/', function(req,res){
    const todos = [
        {name:"todo1",description:"todo1 desc"},
        {name:"todo2",description:"todo2 desc"},
        {name:"todo3",description:"todo3 desc"},

    ]*/
    /*app.get('/', function(req,res){
        const todos = todo.getTodo();
        res.send(todos);
    //res.send(JSON.stringify(todos));
})*/
app.post('/create', function(req,res){
    console.log(req.body);
    res.json([]);
})
app.get('/add', function(req,res){
    const todos = todo.addTodo();
    res.json(todos);
})
app.get('/delete', function(req,res){
    console.log(req.query.id,"id");
    const todos = todo.deleteTodo(req.query.id);
    res.json(todos);
})
app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
})