

var btn=document.getElementById("btn");
   
btn.onclick=function()
{  
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if (request.readyState==XMLHttpRequest.DONE){
            if(request.status==200){
               console.log("y");
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter;

            }
        }
    }



    request.open('GET','http://amalrajp83.imad.hasura-app.io/counter')
    request.send(null);
};