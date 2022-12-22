const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.use(cors());
const userData={
    id:'hi',
    pw:'gg'
}

app.post('/login',(req,res)=>{
    console.log(req.body)
    if(req.body.id!==userData.id){
        res.send({
            data:'idFailed'
        })
    }
    if(req.body.pw!==userData.pw){
        res.send({
            data:'pwFailed'
        })
    }
    res.send({
        data:'success'
    })

})
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)