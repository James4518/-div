let box = document.getElementById("box");
let speed = 10;
let dir = 0;
setInterval(function(){
    switch(dir){
        //左：37    上：38     右：39     下：40
        case 37:box.style.left = box.offsetLeft -speed +"px";break;
        case 39:box.style.left = box.offsetLeft +speed +"px";break;
        case 38:box.style.top = box.offsetTop -speed +"px";break;
        case 40:box.style.top = box.offsetTop +speed +"px";break;
    }
},50);
document.onkeydown = function(event){
    if(event.ctrlKey)speed = 50;
    dir = event.keyCode;
}
document.onkeyup = function(){
    dir = 0
}