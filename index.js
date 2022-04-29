
let username=document.getElementById("username");
let usermsg=document.getElementById('usermsg')
let pwd=document.getElementById("pwd");
let pwdmsg=document.getElementById('pwdmsg');
username.addEventListener("input",userValidate);
pwd.addEventListener("input",pwdValidate);

// alert('Username : admin and Password : 12345')

function userValidate(){
    usermsg.innerHTML='username: admin'
    usermsg.style.color='green'
    if(username.value=="admin"){
        
        console.log("username");
        return true;
    }
    else{
        return false;
    }
}
function pwdValidate(){
    pwdmsg.innerHTML='password: 12345'
    pwdmsg.style.color='green'
    if(pwd.value=="12345"){
        return true;
    }
    else{
        return false;
    }
}

function Validate(user,pwd){
        if(user()&&pwd()){
        return true;
    }
    else{
        alert("Invalid Credentials");
        return false;
    }
}

