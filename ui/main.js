var counter=0;

var btn=document.getElementById("btn");
    var span=document.getElementById("count");

btn.onclick=function()
{  counter=counter+1;


    span.innerHTML=counter;
};