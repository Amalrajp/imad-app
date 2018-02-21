console.log('Loaded!');

var thavala=document.getElementById("thavala");
var marginLeft=1;
function moveRight(){
    marginLeft=marginLeft*1.01;
    thavala.style.marginLeft=marginLeft+"px";
}
thavala.onclick=function()
    {
        var slide=setInterval(moveRight,1);
    };