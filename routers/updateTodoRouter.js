const express=require('express');
const router=express.Router();
const updateTodoController=require('../controllers/updateTodoController');

router.patch('/',updateTodoController);

module.exports=router;
