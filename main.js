let box = document.getElementById("box");
document.onkeydown = function(event){
    event = event || windows.event;
    let speed=10;
    if(event.ctrlKey)speed =30;
    switch(event.keyCode){
        //左：37    上：38     右：39     下：40
        case 37:box.style.left = box.offsetLeft -speed +"px";break;
        case 39:box.style.left = box.offsetLeft +speed +"px";break;
        case 38:box.style.top = box.offsetTop -speed +"px";break;
        case 40:box.style.top = box.offsetTop +speed +"px";break;
    }
}