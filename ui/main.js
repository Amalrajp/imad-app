

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
var names=['name1','name2','name3'];
var list='';
for(i=0;i<names.length;i++){
    list=list+'<li>'+names[i]+'</li>';
}
var namelist=document.getElementById("namelist");
namelist.innerHTML=list;
