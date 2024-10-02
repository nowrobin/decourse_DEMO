const express = require('express')
// const router = express()
// router.listen(1234)
const router = express.Router()
router.use(express.json())
let db = new Map()
let id = 1 

//채널 개설
//채널 전체 조회
router.route('/')
  .get((req,res)=>{
    let {userId} = req.body
    let channels = []
    if(db.size && userId){
        db.forEach((value,key)=>{
          value.userId == userId && channels.push(value) 
        })
        channels.length === 0 ? notFoundChannel()
          : res.status(200).json(channels)
    }else{
      notFoundChannel()
    }
  })
  .post((req,res)=>{
    let {channelTitle , userId}= req.body
    if(channelTitle && userId){
      db.set(id++,req.body)
      res.status(201).json({
        message : `${userId}님의  ${db.get(id-1).channelTitle}채널 생성 완료`
      })
    }else{
      res.status(400).json({
        message : `Invalid input`
      })
    }
  })

//채널 개별 수정
//채널 개별 조회
//채널 개별 삭제
router.route('/:id')
  .get((req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    if(db.get(id)){
      res.status(200).json(db.get(id))
    }else{
      notFoundChannel()
    }
  })
  .put((req,res)=>{
    let {id} = req.params
    let {channelTitle} = req.body
    id = parseInt(id)
    if(db.get(id)){
      if(channelTitle){
        db.set(id,channelTitle)
        res.status(200).json({message: `${channelTitle}로 바뀌였습니다`}) 
      }
      else{
        res.status(400).json({message: "제대로된 값이 아닙니다"}) 
      }
    }else{
      notFoundChannel()
    }
  })
  .delete((req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    db.delete(id)
    res.json({message: "정상적으로 삭제되었습니다"})
  })

function notFoundChannel(){
  res.status(404).json({message: "찾을수없는 채널"})      
}
  module.exports = router