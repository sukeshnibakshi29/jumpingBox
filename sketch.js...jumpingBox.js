var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(445,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(625,580,200,30);
    block4.shapeColor ="green";



    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "black";

    ball.velocityX=5
    ball.velocityY=-5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

if(ball.x<0){
    music.stop();
    ball.velocityX=-5;

   if(ball.x>800) {
      music.stop();
   ball.velocityX=-5;   
  } 
}
//write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
    music.stop();
    ball.bounceOff(block2);
    }

if(block3.isTouching(ball)){
    ball.shapeColor="red";
    music.stop();
    ball.bounceOff(block3);
}
if(block4.isTouching(ball)){
    ball.shapeColor="green";
    music.stop();
    ball.bounceOff(block4);
}

    drawSprites();
}
