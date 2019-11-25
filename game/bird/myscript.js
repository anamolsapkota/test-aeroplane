var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var plane = new Image();
var bg = new Image();
var fg = new Image();
var northHill = new Image();
var southHill = new Image();

plane.src = "images/plane.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
northHill.src = "images/northHill.png";
southHill.src = "images/southHill.png";


// some variables

var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;
    fly.play();
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){
    
    ctx.drawImage(bg,0,0,2000,1000);
    
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = northHill.height+gap;
        ctx.drawImage(southHill,pipe[i].x,pipe[i].y,200,200);
        ctx.drawImage(northHill,pipe[i].x,pipe[i].y+constant+100,300,400);
        // ctx.drawImage(northHill,pipe[i].x,pipe[i].y);
        // ctx.drawImage(southHill,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*northHill.height)-northHill.height
            }); 
        }

        // detect collision
        
        if( bX + plane.width >= pipe[i].x && bX <= pipe[i].x + northHill.width && (bY <= pipe[i].y + northHill.height || bY+plane.height >= pipe[i].y+constant+100) || bY + plane.height >=  cvs.height - fg.height){
            alert("Game Over!\n\nYour Score: " + score)
            location.reload(); // reload the page
            sleep(1000);
        }
        
        if(pipe[i].x == 1){
            score++;
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(plane,bX,bY,48,48);
    
    bY += gravity;
    
    ctx.fillStyle = "#000";
    ctx.font = "20px 'Comic Sans MS'";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();