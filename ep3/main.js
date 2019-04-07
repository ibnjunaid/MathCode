window.onload = function(){
    driver();
}

function driver(){
    let canvas = document.querySelector('canvas'),
        context = canvas.getContext("2d") ,
        width = canvas.width = window.innerWidth ,
        height = canvas.height = window.innerHeight ;
        
    let centerY = height * 0.5,
        centerX = width * 0.5,
        offset = height * .4
        speed = 0.04,
        angle = 0,
        fillColor =`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
        dRadius = 0.1,
        Radius = 2;

    render();

    function render(){
        let y = centerY + Math.sin(angle) * offset;
        let x = centerX + Math.sin(angle) * offset;
       Radius = (Radius < 80) ? Radius+dRadius : 0;
       context.clearRect(0,0,width,height);
       context.beginPath();
       context.arc(x,y,Radius,0,Math.PI *2,false);
       context.fill();
       context.fillStyle = fillColor;
       angle += speed;
       requestAnimationFrame(render);
    }

}