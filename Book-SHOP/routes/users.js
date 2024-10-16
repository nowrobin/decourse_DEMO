const express = require('express');
const router = express.Router();


router.use(express.json());

router.post('/join',(req,res)=>{
  res.json('join')
});
router.post('/login',(req,res)=>{
  res.json('login')
});
router.post('/reset',(req,res)=>{
  res.json('reset pwd')
});
router.put('/reset',(req,res)=>{
  res.json('reset pwd')
});

module.exports =router