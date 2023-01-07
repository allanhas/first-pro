//로그인기능

function clickEvent(){
    const id=document.getElementById('id').value;
    const pw=document.getElementById('pw').value;
    
    axios.post("http://localhost:3000/login",{
      id:id,
      pw:pw
    }).then((res)=>{
      
    }).catch((err)=>{
      console.log(err)
    })
  }
  


