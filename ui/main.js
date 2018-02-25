

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
    };



    request.open('GET','http://amalrajp83.imad.hasura-app.io/counter');
    request.send(null);
};
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    var nameInput=document.getElementById("name");
    var name1=nameInput.value;
    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if (request.readyState==XMLHttpRequest.DONE){
            if(request.status==200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(i=0;i<names.length;i++){
                    list=list+'<li>'+names[i]+'</li>';
                }
                var namelist=document.getElementById("namelist");
                namelist.innerHTML=list;
            }
        }
    };
   

    request.open('GET','http://amalrajp83.imad.hasura-app.io/submit-name?name='+name1);
    request.send(null);
    

};
