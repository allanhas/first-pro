//로그인기능

function clickEvent(){
    const id=document.getElementById('id').value;
    const pw=document.getElementById('pw').value;
    
    axios.post("http://localhost:3000/login",{
      id:id,
      pw:pw
    }).then((res)=>{
      if(res.data.message){
        return console.log(err.data.message)
      }
      const token  = res.data.data
      localStorage.setItem("accessToken",token)
    }).catch((err)=>{
      console.log(err)
    })
  }
  


