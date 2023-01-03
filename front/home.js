function clickEvent(){
  const id=document.getElementById('id').value;
  const pw=document.getElementById('pw').value;
  
  axios.post("http://localhost:3000/signUp",{
    id:id,
    pw:pw,
    name:"한상결",
    sex:"1",
    email:"spdlqj7014@naver.com"
  }).then((res)=>{
    console.log(res.data)
    alert(res.data.message)
    // if(res.data.data==='idFailed'){
    //     console.log('아이디 실패')
    //     return;
    // }
    // if(res.data.data==='pwFailed'){
    //     console.log('비밀번호 실패')
    //     return;
    // }
    // else{
    //     console.log('성공')
    //     return;
    // }
    
  }).catch((err)=>{
    console.log(err)
  })
}



