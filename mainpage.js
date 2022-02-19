
function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            completed="";
            for(var i=0;i<response.length;i++){
                completed=response[i].completed
                if(completed==true){
                    output+=`<input type="checkbox" class="checking" checked disabled="disabled">${response[i].title}<br>`;    
                }
               else{
                    output+=`<input type="checkbox" class="checking" id="checkbox"  >${response[i].title}<br>`;
               }
            }  
        document.getElementById("todo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

var checkedcount=""
$("#todo").on('change','.checking',function(e){
    
    if($(this).prop('checked')===true){
        // console.log('checked');
        checkedcount++;
        // console.log(checkedcount);
    }
    else{
        checkedcount--;
        // console.log('unchecked')
        // console.log(checkedcount);
    }
    countcheck();
})


function countcheck(){
    console.log("Function working properly");
    promisecheck().then(()=>{
        alert("Congrats. 5 Tasks have been Successfully Completed");
    })
    .catch(function(e){
        console.log(e);
    })
}

function promisecheck(){
    return new Promise(function(resolve,reject){
                if(checkedcount===5){
                    resolve()
                }
                else{
                    reject('Target not achieved');
                }
            })
}

function logout(){
    location.href='index.html';
}