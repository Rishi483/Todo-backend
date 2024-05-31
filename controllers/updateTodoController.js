const fs=require('fs');

const updateTodoController=(req,res)=>{
    const updatedTodo=req.body.todo;
    const idToUpdate=updatedTodo.id;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        let prevTodos = JSON.parse(data);
        
        prevTodos=prevTodos.map(todo=>{
            if(todo.id==idToUpdate) return updatedTodo;
            else return todo;
        });
        const newTodos=JSON.stringify(prevTodos,null,2);

        fs.writeFile('data.json', newTodos, (err) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send("Todo updated");
        });
    });
}

module.exports=updateTodoController;