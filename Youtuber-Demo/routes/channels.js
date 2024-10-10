const express = require('express')
const router = express.Router()
const conn = require('../mariadb')

router.use(express.json())


//채널 개설
//채널 전체 조회
router.route('/')
  .get((req,res)=>{
    let {userId} = req.body
    if(userId){
      conn.query(
      `SELECT * FROM channels WHERE user_id = ?`,userId,
      function (err, results, fields) {
          if(results.length){
            res.status(200).json(results)
            res.end()
          }
          else{notFoundChannel(res)}
        }
      )
      }
      else res.status(400).end()
    }
  )
  .post((req,res)=>{
    if(req.body.name && req.body.userId){
      let {name,userId} =req.body
      conn.query(
        `INSERT INTO channels (name,user_id) VALUES (?,?)`,[name,userId],
        function(err,results, fields){
          res.status(201).json({
            message : `${userId}님의  ${name}채널 생성 완료`
          })
          if(error){
              res.status(400).json({
                message : `Invalid input`
              })
          }
        }
      ) 
    }
  })

//채널 개별 수정
//채널 개별 조회
//채널 개별 삭제
router.route('/:id')
  .get((req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    conn.query(
      `SELECT * FROM channels Where id = ?`,id,
      function (err, results, fields) {
          if(results.length){res.status(200).json(results)}
          else{notFoundChannel()}
        }
    )}
  )
  // .put((req,res)=>{
  //   let {id} = req.params
  //   let {channelTitle} = req.body
  //   id = parseInt(id)
  //   if(db.get(id)){
  //     if(channelTitle){
  //       db.set(id,channelTitle)
  //       res.status(200).json({message: `${channelTitle}로 바뀌였습니다`}) 
  //     }
  //     else{
  //       res.status(400).json({message: "제대로된 값이 아닙니다"}) 
  //     }
  //   }else{
  //     notFoundChannel()
  //   }
  // })
  // .delete((req,res)=>{
  //   let {id} = req.params
  //   id = parseInt(id)
  //   db.delete(id)
  //   res.json({message: "정상적으로 삭제되었습니다"})
  // })

function notFoundChannel(res){
  res.status(404).json({message: "찾을수없는 채널"})      
}
  module.exports = router 