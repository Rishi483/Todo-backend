const express=require('express');
const router=express.Router();
const deleteTodoController=require('../controllers/deleteTodoController');

router.post('/',deleteTodoController);

module.exports=router;
