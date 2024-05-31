const fs=require('fs');

const getTodosController=(req,res)=>{
    fs.readFile('data.json','utf-8',(err,data)=>{
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        const todosList=JSON.parse(data);
        res.status(200).send(todosList);
    })
}

module.exports=getTodosController