window.onload = function(){
    driver();
}

function driver(){
    let canvas = document.querySelector('canvas'),
        context = canvas.getContext("2d") ,
        width = canvas.width = window.innerWidth ,
        height = canvas.height = window.innerHeight ;
    
    context.translate(0,height/2);
    context.scale(1,-1);
    
    for (let angle = 0; angle <= Math.PI * 2; angle +=0.01) {
        var x = angle *200 ;
        var y = Math.sin(angle) *200;
        //context.fillStyle = `rgb(${Math.random()*100},${Math.random()*100},${Math.random()*100})`;
        context.fillRect(x,y,4,4);
    }

}