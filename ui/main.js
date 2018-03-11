


var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if (request.readyState==XMLHttpRequest.DONE){
            if(request.status==200) alert("logged in successfully");
            
            else if(request.status===403) alert("username/password is invalid");
            
            else if(request.status===403) alert("something went wrong");
        }
    };
   

    request.open('POST','http://amalrajp83.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({usernme:username,password:password}));
    

};
