const fs=require('fs');

const deleteTodoController=(req,res)=>{
    const idToDelete=(req.body.id);
    fs.readFile('data.json','utf-8',(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        let prevTodos=JSON.parse(data);
        prevTodos=prevTodos.filter(todo=>todo.id!=idToDelete);
        const newTodos=JSON.stringify(prevTodos,null,2);

        fs.writeFile('data.json',newTodos,(err)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).send('Deleted Successfully');
        })
    })
}

module.exports=deleteTodoController;