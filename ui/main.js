var counter=0;

var btn=document.getElementById("btn");

btn.onclick=function()
{
    var span=document.getElementById("count");
  span.innerHTML=counter.toString();
  counter=counter+1;
};