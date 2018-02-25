var counter=0;

var btn=document.getElementById("btn");

btn.onclick=function()
{  counter=counter+1;

    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};