//회원가입기능

function clickEvent(){
  const id=document.getElementById('id').value;
  const pw=document.getElementById('pw').value;
  const pw2=document.getElementById('pw2').value;
  const name=document.getElementById('name').value;
  const sex=document.getElementById('sex').value;
  const email=document.getElementById('email').value;
  
  let sex_code
  if (sex==="남자"){
    sex_code = 1
  }
  if (sex==="여자"){
    sex_code = 2
  }
  if(pw!==pw2){
    return alert("비밀번호가 다릅니다.")
  }
  axios.post("http://localhost:3000/signUp",{
    id:id,
    pw:pw,
    name:name,
    sex:sex_code,
    email:email,
  }).then((res)=>{
    console.log(res.data)
    alert(res.data.message)
    
    
  }).catch((err)=>{
    console.log(err)
  })
}

























  