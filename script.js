var boxes = document.querySelectorAll(".box");


window.addEventListener("scroll",function(){
    var triggerBottom = window.innerHeight / 5*4;

    for(var i = 0; i < boxes.length; i++){
        var boxTop = boxes[i].getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            boxes[i].classList.add("show");
        }
        else{
            boxes[i].classList.remove("show");
        }
    }
});