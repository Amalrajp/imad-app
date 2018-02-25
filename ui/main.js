var counter=0;

var btn=document.getElementById("btn");

btn.onclick=function()
{
    var span=document.getElementById("count");
  span.innerHtml=counter.toString();
  counter+=1;
};