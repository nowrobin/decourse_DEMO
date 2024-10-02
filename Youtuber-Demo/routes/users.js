//Express setting
const express = require('express')
const router = express.Router()


let db = new Map()

router.route('/users').get(
    (req,res)=>{
      let {userId} = req.body
      const user =db.get(userId)
      if(user){
        res.status(200).json({
          userId: user.userId,
          name: user.name
        })
      }
      else{
        res.status(404).json({message:' Something went wrong input is wrong'})
      }
    }
  ).delete(
    (req,res)=>{
      let {userId} = req.body
      const user =db.get(userId)
      if(user){
        db.delete(user.userId)
        res.status(200).json({
          message: `${user.name} 삭제 완료`
        })
      }
      else{
        res.status(404).json({message:'User cannot be found'})
      }
    }
  )

//login 로직
router.use(express.json())
router.post('/login',(req,res)=>{
  const {userId,password} = req.body
  if(userId && password){
    db.forEach((value, index)=>{
      value.userId === userId  ?  value.password === password ? 
      res.status(200).json({message: `${value.name} Login Success`}) : res.status(400).json({message: "Login Failed Check Password"}) : 
      res.status(400).json({message: "Login Failed Check UserID"}) 
    })
  }else{
    res.status(400).json({message: "Login Failed Check Empty Input"})
  }
})


//회원가입 로직 
router.post('/join',(req,res)=>{
  if(req.body.size != 0 ){
    const {userId} = req.body
    db.set(userId, req.body)
    res.status(201).json({
      message : `${db.get(userId).name}님 환영합니다`
    })
  }else{
    req.status(400).json({
      message: `Something went Wrong input is wrong`
    })
  }
})

module.exports = router