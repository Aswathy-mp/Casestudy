
let username=document.getElementById("username");
let pwd=document.getElementById("pwd");
username.addEventListener("input",userValidate);
pwd.addEventListener("input",pwdValidate);
function userValidate(){
    if(username.value=="admin"){
        console.log("username");
        return true;
    }
    else{
        return false;
    }
}
function pwdValidate(){
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

