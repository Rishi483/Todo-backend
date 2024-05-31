const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
const getTodosRouter=require('./routers/getTodosRouter')
const addTodoRouter=require('./routers/addTodoRouter');
const deleteTodoRouter=require('./routers/deleteTodoRouter');
const updateTodoRouter=require('./routers/updateTodoRouter');

const app=express();
dotenv.config('./.env');

var corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200
}

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//routes
app.get('/',(req,res)=>{
    res.status(200).send("Server running ok");
});

app.use('/getTodos',getTodosRouter);
app.use('/addTodo',addTodoRouter);
app.use('/deleteTodo',deleteTodoRouter);
app.use('/updateTodo',updateTodoRouter);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})
