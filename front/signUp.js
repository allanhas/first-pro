//회원가입기능

function clickEvent(){
  const id=document.getElementById('id').value;
  const pw=document.getElementById('pw').value;
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

























  