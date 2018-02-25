

var btn=document.getElementById("btn");
   
btn.onclick=function()
{  
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if (request.resdyState==XMLHttpRequest.DONE){
            if(request.state==200){
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter;

            }
        }
    }
    counter=counter+1;


    request.open('GET','http://amalrajp83.imad.hasura-app.io/counter')
    request.send(null);
};