const port=3000
const {db}= require('./lib/index')
const {models}=require('./lib/db')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()



app.use(bodyParser.json())
app.use(cors());


app.post('/signUp',async(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const pw=req.body.pw;
    const email=req.body.email;
    const sex=req.body.sex;
    let result

    try{
        result = await models['user'].create({
            id,//앞은 key값
            name,
            pw,
            email,
            sex,
        })
    }catch(err){
        console.log(err);
        res.send({message:"회원가입에 실패했습니다."})
    }

    res.send({message:"회원가입에 성공했습니다."})
})





const userData={
    id:'hi',
    pw:'gg'
}
//request response
app.post('/login',async(req,res)=>{
    // 입력값들
    const id=req.body.id;
    const pw=req.body.pw;
    // 디비에서 뽑아온 값을 임시로 저장할 공간
    let result;

    try{
        result = await models['user'].findOne({
            where:{
                id:id
            }
        })
    }catch(err){
        console.log(err)
    }
    // 아이디가 맞는지 체크하기
    if(result===null||result===undefined){
        return res.send({data:"idFailed"})
    }
    // 확인할려고
    console.log("서버측 데이터: "+result.dataValues.pw)
    console.log("입력한 데이터: "+pw)
    // 비밀번호가 맞는지 체크하기
    if(pw!==result.dataValues.pw){
        return res.send({data:"pwFailed"});
    }
    
    res.send({data:0})
})
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    await db.initialize()
  })


