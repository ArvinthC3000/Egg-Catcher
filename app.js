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
let dx=1;
console.log(strokeHeight);
animate();

function start(){
    createEgg1();
    createEgg2();
    createEgg3();
    eggMotion();
    c.drawImage(img,(canvas.width*.25)-30,10,60,60);
    c.drawImage(img,(canvas.width*.5)-30,10,60,60);
    c.drawImage(img,(canvas.width*.75)-30,10,60,60);
}
function createEgg1(){
    
    c.beginPath();
    c.ellipse((canvas.width*.25),startPosition,5,7,0,0,2*Math.PI);
    c.fillStyle='pink';
    c.fill();
    c.stroke();

}
function createEgg2(){
    c.beginPath();
    c.ellipse((canvas.width*.5),startPosition,5,7,0,0,2*Math.PI);
    c.fillStyle='pink';
    c.fill();
    c.stroke();

}
function createEgg3(){
    c.beginPath();
    c.ellipse((canvas.width*.75),startPosition,5,7,0,0,2*Math.PI);
    c.fillStyle='pink';
    c.fill();
    c.stroke();

}
function eggMotion(){
    if (startPosition<strokeHeight){
        startPosition+=dx;
        console.log(strokeHeight);
    }
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.moveTo(strokeHeight,basketPosition);
    start();
}
