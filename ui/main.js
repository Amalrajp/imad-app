console.log('Loaded!');

var thavala=document.getElementById("thavala");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    thavala.style.marginLeft=marginLeft+"px";
}
thavala.onclick=function()
    {
        var slide=setInterval(moveRight,1);
    };