var player,playerIMG;
var playerSwordHB;
var swordAnimation;

var enemy,enemyIMG,enemyGRP;

var combat=1;
var rest=0;

function setup() {
  createCanvas(800,400);
  var player=createSprite(400, 200, 20, 20);
}

function draw() {
  background(255,255,255);  
  if(keyDown("w")){
    player.velocityY+-10; 
    player.velocityX+0;
  }
  if(keyDown("s")){
    player.velocityY=10;
    player.velocityX=0;
  }
  if(keyDown("a")){
    player.velocityX=-10;
    player.velocityY=0;
  }
  if(keyDown("d")){
    player.velocityX=10;
    player.VelocityY=0;
  }
  drawSprites();
}