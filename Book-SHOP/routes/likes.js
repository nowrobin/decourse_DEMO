const express = require('express');
const router = express.Router();


router.use(express.json());

router.post('/',(req,res)=>{
  res.json('join')
});
router.delete('/:id',(req,res)=>{
  res.json('join')
});

module.exports =router