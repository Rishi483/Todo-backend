const fs=require('fs');

const addTodoController=(req,res)=>{
    const todoToAdd=req.body.todo;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        let prevTodos = JSON.parse(data);
        
        prevTodos.push(todoToAdd);
    
        const newTodos = JSON.stringify(prevTodos, null, 2);
    
        fs.writeFile('data.json', newTodos, (err) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(201).send("New todo added");
        });
    });
}

module.exports=addTodoController;