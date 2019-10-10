
let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height  = 0.75 * (window.innerHeight);

let c = canvas.getContext('2d');

let img = document.createElement('img');
img.src = 'koli2.0.png';
let egg = document.createElement('img');
egg.src = 'brokenEgg.png';
egg.style.backgroundColor = 'none';

let flag = 0;
let initialPosition=50;
let startPosition = initialPosition;
let strokeHeight = (canvas.height) - 100;
let basketPosition = 0;
let basketX = 0;
let basketY = 0;
let ruins = 0;
let score = 0;
let eggMissFlag = 0;
let halfBoilLocation = 0;


function coords(event) {
    this.mx = event.clientX;
    this.my = event.clientY;
    return basketX = this.mx, basketY = this.my;
  }


function start(){
    
    
    startID = requestAnimationFrame(start);
    c.clearRect(0,0,canvas.width,canvas.height);
    c.fillStyle='#835535';
    c.fillRect(0,65,canvas.width,10);
    c.fillStyle = "#835535";
    c.fillRect(0,canvas.height-100,canvas.width,150);


    for(let i=0;i<eggs.length;i++){
        eggs[i].draw();
        eggs[i].flow();
    }
    
    c.drawImage(img,(canvas.width*.25)-30,10,60,60);
    c.drawImage(img,(canvas.width*.5)-30,10,60,60);
    c.drawImage(img,(canvas.width*.75)-30,10,60,60);
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

let eggs =[];
let egg1 = eggs.push(new CreateEgg((canvas.width*.25),y,majR,minR,angle,deg1,deg2));
let egg2 = eggs.push(new CreateEgg((canvas.width*.5),y,majR,minR,angle,deg1,deg2));
let egg3 = eggs.push(new CreateEgg((canvas.width*.75),y,majR,minR,angle,deg1,deg2));

let startGame = setTimeout(start,10000)



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
    }

    this.flow = function(){

        if(this.y<canvas.height-100){
            this.y = this.y + dy;
        }
        else if(this.y=canvas.height-100){
            ruins++;
            document.getElementById('ruins').innerText= ruins;
            eggMissFlag = 1;
            halfBoilLocation = this.x;
            this.resetSpeed();
        }
     
        this.crashWith = function() {
            let myleft = this.x;
            let myright = this.x + this.majorAngle;
            let mytop = this.y;
            let mybottom = this.y + this.minorAngle;
            let otherleft = basketX - 50;
            let otherright = basketX + 50;
            let othertop = canvas.height-120;
            let otherbottom = basketY+ 25;
            let crash = false;
            if ((mybottom > othertop) && (myright < otherright) && (myleft > otherleft)) {
                crash = true;
                this.resetSpeed();
            }
            return crash;
        }

    }
   
    
    this.resetSpeed =function (){
        this.y = startPosition;
        dy = ((Math.random()*2)+1);
    }
}
function hint1(){
    document.getElementById("hint").innerText = "Look who's doing a good job";
}
function hint2(){
    document.getElementById("hint").innerText = "You are doing your best";
}
function hint4(){
    document.getElementById("hint").innerText = "Keep the pace on. You've completed 75%";
}

function stopTheGame(){
    cancelAnimationFrame(startID);
    document.getElementById("hint").innerText = "Game Over";
    alert('Game over.\nYou did a great work\nYour score is '+score)
}
function dHint(){
    document.getElementById("hint").innerText = "Save all Eggs";
}
let dfult = setTimeout(dHint,10000);
let h1 = setTimeout(hint1,20000);
let h2 = setTimeout(hint2,30000);
let h4 = setTimeout(hint4,45000);
let t = setTimeout(stopTheGame,60000);