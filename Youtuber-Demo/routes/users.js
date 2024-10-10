
const express = require('express')
const router = express.Router()

const conn = require('../mariadb')
router.use(express.json())

router.route('/users').get(
    function(req,res){
      let { email } = req.body
      conn.query(
        `SELECT * FROM users Where email = ?`,email,
        function (err, results, fields) {
            if(results.length){res.status(200).json(results)}
            else{res.status(404).json({message:' Something went wrong input is wrong'})
          }
        }
      );
    }
  )
  .delete(
    (req,res)=>{
      let {email} = req.body
      conn.query(
        `DELETE FROM users Where email = ?`,email,
        function (err, results, fields) {
            res.status(200).json(results)
        }
      );
    }
  )

router.post('/login',(req,res)=>{
  const {email,passwrd} = req.body
  conn.query(
    `SELECT * FROM users Where email = ?`,email,
    function (err, results, fields) {
      let loginUser = results[0]
      if(loginUser &&loginUser.passwrd == passwrd){
          res.status(200).json({
            message: `${loginUser.name} 로그인 성공`
          })
      }
        else{
          res.status(400).json({
            message: "비밀번호가 틀렸습니다"
          })
        }
    }
  );
})


//회원가입 로직 
router.post('/join',(req,res)=>{
  if(req.body.size != 0 ){
    const {email, name, passwrd, contact} = req.body
    conn.query(
      `INSERT INTO users (email, name, passwrd, contact) VALUES (?,?,?,?)`,[email, name, passwrd, contact],
      function(err,results, fields){
        res.status(201).json({
          message : `${name}님 환영합니다`
        })
      }
    )
  }
})

module.exports = router