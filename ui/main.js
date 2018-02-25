var counter=0;
var span=document.getElementById("count");
var btn=document.getElementById("btn");

btn.onclick=function()
{
  span.innerHtml=counter.toString();
  counter+=1;
};