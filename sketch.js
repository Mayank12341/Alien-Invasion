//create the  astronaut and give behaviour.
//create the obstacles.
//create aliens and give behaviour.
//create animations and images.
//create the scoring system.
//make the lazer.
//make gamestates.

var alien1,alien2,alien3;
var obstacle1,obstacle2,obstacle3,obstacle4;
var ground;
var player;
var laserAlien1;
var bullet=[];
var score;


function preload(){
  Astro = loadImage("PlayerMan.gif");
  Pla2 = loadImage("Player_Left.gif");
}

function setup() {

  createCanvas(1200,800);
  
  score=0;

  obstacle1= createSprite(200,500,200,30);
  ground= createSprite(600,790,1200,50);
  obstacle2 = createSprite(800,600,200,30);
  obstacle3=createSprite(600,200,200,30);
  obstacle4=createSprite(500,400,200,30);
  obstacle5=createSprite(970,430,200,30);
  alien1=createSprite(200,460,50,50);
  alien2=createSprite(600,160,50,50);
  alien3=createSprite(500,360,50,50);
  player= createSprite(600,700,50,50);
  laserAlien1=createSprite(alien1.x,alien1.y,90,10);
  bullet=createSprite(0,0,90,10)

  player.shapeColor="green";
  alien1.shapeColor="brown";
  alien2.shapeColor="brown";
  alien3.shapeColor="brown";
  laserAlien1.shapeColor="Green"
  bullet.shapeColor="red";
  alien1.Visiblity=255;
  alien2.Visiblity=255;
  alien3.Visiblity=255;
  player.addImage("PlayerMan",Astro);
  player.addImage("Player_Left",Pla2);
  laserAlien1.visible=false;
}
function draw() {
  background("cyan"); 
  player.debug=false;
  player.setCollider("rectangle",-1,5,60,80);
  score=score+Math.round(getFrameRate()/60);    
  text("Score: " +score,500,50);
  

 // player.addImage("PlayerRight",Astro2);
  //player.addImage("PlayerMan",Astro);

  if(player.x>600){
    //too make the player teleport
    //man is not teleporting 
    player.changeImage("PlayerMan",Astro);
  }
  
  if(player.x<600){
    player.changeImage("Player_Left",Pla2)
    console.log(player.x);
  }

  bullet.height=10
  bullet.visbility=false;  
  player.velocityY = player.velocityY + 0.8;   
    
    if(player.x>1170){
      player.x=1169
    }
    if(player.x<30){  
      player.x=31;
    }
    if(player.y<30){
      player.y=31;
    }
    if(player.y<500 && player.y>410 && player.x>alien1.x){
      laserAlien1.visible=true;
      laserAlien1.velocityX=17;
      console.log(player.y)
    }
    if(player.y<500 && player.y>410 && player.x<alien1.x){
      laserAlien1.visible=true;
      laserAlien1.velocityX=-17;
    }
    if(keyDown("w") && bullet.velocityX===0){
     fire();   
    }
    if(keyDown("w") && bullet.velocityX===0){
      fireRight();
     }
     if(bullet.x<30){
      bullet.x=0;
      bullet.y=0;
      bullet.velocityX=0;
     }
     if(laserAlien1.x<30){
      laserAlien1.x=alien1.x;
      laserAlien1.y=alien1.y;
      laserAlien1.visible=false;
      laserAlien1.velocityX=0;
     }
     if(laserAlien1.x>1170){
      laserAlien1.x=alien1.x;
      laserAlien1.y=alien1.y;
      laserAlien1.visible=false;
      laserAlien1.velocityX=0;
     }

     if(bullet.x>1170){
      bullet.x=0;
      bullet.y=0;
      bullet.velocityX=0;
     }
    
    if(keyDown("space")  ) {
    player.velocityY = -15;
    }
    if(keyDown("RIGHT_ARROW")  ) {  
      player.x =player.x+7;
    }
    if(keyDown("LEFT_ARROW")  ) {
      player.x =player.x-7;
    }
    
    if(bullet.velocityX===-17 || bullet.velocityX===17 ){
      text("RELOADING LASER.....", 900,50);
      textSize(60);
    }
    player.collide(ground);
    player.collide(obstacle1);
    player.collide(obstacle2);
    player.collide(obstacle4);
    player.collide(obstacle3);
    player.collide(obstacle5);
    //bullet.collide(alien1);
    
    //bullet.collide(alien2);
    //bullet.collide(alien3);
   
    if(bullet.isTouching(alien1)){
      alien1.Visible=false;
    }
    if(bullet.isTouching(alien2)){  
      alien2.Visiblity=alien2.Visiblity-5;
    }
    if(bullet.isTouching(alien3)){
      alien3.Visiblity=alien3.Visiblity-5;
    } 
    drawSprites();

}


function fire(){
  if(player.x>600){
bullet.velocityX=-17;
bullet.y=player.y;
bullet.x=player.x;
  }
}


function fireRight(){
  if(player.x<600){
bullet.velocityX=17;
bullet.y=player.y;
bullet.x=player.x;
  }
  
}

