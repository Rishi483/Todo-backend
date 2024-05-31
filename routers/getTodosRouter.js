const express=require('express');
const router=express.Router();
const getTodosController=require('../controllers/getTodosController');

router.get('/',getTodosController);

module.exports=router;
