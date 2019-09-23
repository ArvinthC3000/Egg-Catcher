

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height  = 0.75 * (window.innerHeight);

let c = canvas.getContext('2d');

let img = document.createElement('img');
img.src = 'koli2.0.png';
let egg = document.createElement('img');
egg.src = 'halfboil.png';

let flag = 0;
let initialPosition=50;
let startPosition = initialPosition;
let strokeHeight = (canvas.height) - 100;
let basketPosition = 0;
let basketX = 0;
let basketY = 0;
let ruins = 0;
let score = 0;


function coords(event) {
    this.mx = event.clientX;
    this.my = event.clientY;
    return basketX = this.mx, basketY = this.my;
    // var coord = mx + "," + my;
    // console.log(coord)
  }


function start(){
    
    requestAnimationFrame(start);
    c.clearRect(0,0,canvas.width,canvas.height);
    c.fillStyle='pink';
    c.fillRect(0,65,canvas.width,10);
    c.fillStyle = "#badfdb";
    c.fillRect(0,canvas.height-100,canvas.width,150);


    for(let i=0;i<eggs.length;i++){
        eggs[i].draw();
        eggs[i].flow();
    }
    
    c.drawImage(img,(canvas.width*.25)-30,10,60,60);
    c.drawImage(img,(canvas.width*.5)-30,10,60,60);
    c.drawImage(img,(canvas.width*.75)-30,10,60,60);
    // c.drawImage(egg,(canvas.width*.75)-30,500,60,60)
    c.fillStyle="black";
    c.beginPath();

    let basket = c.ellipse(this.mx,canvas.height-120,50,25,0,0,Math.PI);
    c.fill();
    c.stroke();

        if (eggs[0].crashWith()||
        eggs[1].crashWith()||
        eggs[2].crashWith()){
            flag = flag+1;
                if (flag === 1){
                    score = score+1;
                    document.getElementById("score").innerText = score;
                    ruins--;
                    console.log(score);
                }
        }
        else{
            flag = 0;
        }
    
}

let y = startPosition;
let majR = 5;
let minR = 7;
let angle= 0;
let deg1 = 0;
let deg2 = 2*Math.PI;
// let dy =((Math.random()*2)+1);

let eggs =[];
let egg1 = eggs.push(new CreateEgg((canvas.width*.25),y,majR,minR,angle,deg1,deg2));
let egg2 = eggs.push(new CreateEgg((canvas.width*.5),y,majR,minR,angle,deg1,deg2));
let egg3 = eggs.push(new CreateEgg((canvas.width*.75),y,majR,minR,angle,deg1,deg2));
// console.log(eggs );
//Floor
start();
function CreateEgg(x,y,majR,minR,angle,deg1,deg2){
    this.x=x;
    this.y=y;
    this.majorAngle=majR;
    this.minorAngle=minR;
    this.rotation=angle;
    this.startAngle=deg1;
    this.endAngle=deg2;
    let dy =((Math.random()*1)+0.5);

    this.draw = function(){
        c.beginPath();
        c.ellipse(this.x,this.y,this.majorAngle,this.minorAngle,this.rotation,this.startAngle,this.endAngle);
        c.fillStyle='pink';
        c.fill();
        c.stroke();
        // this.flow();
    }

    this.flow = function(){

        if(this.y<canvas.height-100){
            this.y = this.y + dy;
        }
        else if(this.y=canvas.height-100){
            ruins++;
            document.getElementById('ruins').innerText= ruins;
            this.resetSpeed();
        }
     
        this.crashWith = function() {
            var myleft = this.x;
            // console.log(myleft);
            var myright = this.x + this.majorAngle;
            var mytop = this.y;
            var mybottom = this.y + this.minorAngle;
            var otherleft = basketX;
            var otherright = basketX + 50;
            var othertop = canvas.height-120;
            var otherbottom = basketY+ 25;
            var crash = false;
            if ((mybottom > othertop) && (myright < otherright) && (myleft > otherleft)) {
                crash = true;
                // console.log(mybottom, othertop)
            }
            return crash;
        }

    }
   
    // if(this.y=canvas.height-120 && (this.mx=this.mx)){
    //     score +=1;
    //     console.log(score);
    // }
    
    this.resetSpeed =function (){
        this.y = startPosition;
        dy = ((Math.random()*2)+1);
    }
}