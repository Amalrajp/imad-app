console.log('Loaded!');

var thavala=document.getElementById("thavala");
marginLeft=0;
function moveRight(){
    marginLeft+=marginLeft;
    thavala.style.marginLeft=marginLeft+"px";
}
thavala.onclick=function()
    {
        var slide=setIntervel(moveRight,1);
    };