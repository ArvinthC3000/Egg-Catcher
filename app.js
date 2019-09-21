let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height  = 0.9 * (window.innerHeight);

let c = canvas.getContext('2d');

let img = document.createElement('img');
img.src = 'koli2.0.png';

let initialPosition=50;
let startPosition = initialPosition;
let strokeHeight = (canvas.height) - 100;
let basketPosition = 0;

// animate();

function start(){
    requestAnimationFrame(start);
    c.clearRect(0,0,canvas.width,canvas.height);
    // eggMotion();

    for(let i=0;i<eggs.length;i++){
        eggs[i].draw();
    }
    c.drawImage(img,(canvas.width*.25)-30,10,60,60);
    c.drawImage(img,(canvas.width*.5)-30,10,60,60);
    c.drawImage(img,(canvas.width*.75)-30,10,60,60);
    
}

let y = startPosition;
let majR = 5;
let minR = 7;
let angle= 0;
let deg1 = 0;
let deg2 = 2*Math.PI;

let eggs =[];
let egg1 = eggs.push(new CreateEgg((canvas.width*.25),y,majR,minR,angle,deg1,deg2));
let egg2 = eggs.push(new CreateEgg((canvas.width*.5),y,majR,minR,angle,deg1,deg2));
let egg3 = eggs.push(new CreateEgg((canvas.width*.75),y,majR,minR,angle,deg1,deg2));


start();
function CreateEgg(x,y,majR,minR,angle,deg1,deg2){
    this.x=x;
    this.y=y;
    this.majorAngle=majR;
    this.minorAngle=minR;
    this.rotation=angle;
    this.startAngle=deg1;
    this.endAngle=deg2;
    let dx =Math.floor((Math.random()*3)+1);

    this.draw = function(){
        c.beginPath();
        c.ellipse(this.x,this.y,this.majorAngle,this.minorAngle,this.rotation,this.startAngle,this.endAngle);
        c.fillStyle='pink';
        c.fill();
        c.stroke();
        this.flow();
    }

    this.flow = function(){
        if(this.y<canvas.height-150){
            this.y = this.y + dx;
        }
        else if(this.y===canvas.height-150){
            this.y = startPosition;
        }
    }

}
// function eggMotion(){
//     if (startPosition<strokeHeight){
//         startPosition+=dx;
//         console.log(strokeHeight);
//     }
// }
function EggMotion(){

}
function animate(){
    requestAnimationFrame(animate);
    c.beginPath();
    c.moveTo(strokeHeight,basketPosition);
    
}
