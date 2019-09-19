let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
c.fillStyle = "#ecf5ff";
c.fillRect(0,0,innerWidth,innerHeight)