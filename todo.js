
//function addTodo(todo){
/*const todos = [
    { name:"todo1",description:"todo1 desc"},
    { name:"todo2",description:"todo2 desc"},
    {name:"todo3",description:"todo3 desc"},

]*/
let todos = [
    {id:0, name:"todo1",discription:"todo1 desc"},
    {id:1, name:"todo2",discription:"todo2 desc"},
    {id:2, name:"todo3",discription:"todo3 desc"},

]

//return todos;

function addTodo(todo){
    console.log(todo);
   // todos.push({name:"todo1", description:"todo1 desc"});
   todos.push(todo);
    return todos;
}
function editTodo(id,name,discription){
    let todo = todos.find(function(todo){
        return todo.id==id;
    });
    todo.name= name;
    todo.discription=discription;
    return todos;
}
function deleteTodo(id){
    todos=todos.filter(function(todo){
        return todo.id!=id;
    
});
return todos;
}

function getTodo(){
    return todos;
}
/*function getTodo(todo){
    const todos = [
        {name:"todo1",description:"todo1 desc"},
        {name:"todo2",description:"todo2 desc"},
    ]
    return todos;
}*/
var name="todo"
exports.addTodo=addTodo;
exports.getTodo=getTodo;
exports.name=name;
exports.deleteTodo=deleteTodo;
exports.editTodo=editTodo;
