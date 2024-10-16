const express = require('express');
const router = express.Router();


router.use(express.json());

router.get('/',(req,res)=>{
  res.json('join')
});

router.get('/:id',(req,res)=>{
  res.json('join')
});
//카테고리
router.get('/',(req,res)=>{
  res.json('join')
});

module.exports =router