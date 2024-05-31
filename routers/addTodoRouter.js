const express=require('express');
const router=express.Router();
const addTodoController=require('../controllers/addTodoController')

router.post('/',addTodoController);

module.exports=router;
