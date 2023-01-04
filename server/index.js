const port=3000
const {db}= require('./lib/index')
const {models}=require('./lib/db')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();




app.use(bodyParser.json())
app.use(cors());

//누군가가 /회원가입으로 방문을 하면 
// 회원가입 관련된 안내문을띄워주자...
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
//누군가가 /로그인으로 방문을 하면 
// 로그인 관련된 안내문을띄워주자...
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

//지금 port 번째 포트를 듣고 있다 즉, 받아들일 준비가 되어 있다 이런뜻임 대충 ㅇㅋ? 
//콘솔.log부분은 그냥 출력하는거라서기능적인 의미는 없음!
app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    await db.initialize()
  })




app.get('/', function (req, res) {
    res.sendFile(__dirname +'/index.html')
})








//코딩애플 숙제임 굿! >> 누군가/뷰티 로 들어오면 xx를 보내주세요~
app.get('/beauty',function(req,res){
    res.send('뷰티용품을 골라보십숑')
});


//조코딩 백엔드 기초실습
//피글렛모듈 이용해서 아스키코드 찍기
var figlet = require('figlet');

figlet('eksd', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

//로컬호스트 3000기본형 들어가면 헬로월드 있는거
//const express = require('express')
//const app = express()  <<  예네들은 기본형인데 위에 이미있어서 주석처리함

app.get('/', function (req, res) {
  res.send('Hello World')
})



