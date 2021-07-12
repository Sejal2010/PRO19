var star,starImg,stars,rocket,rocketImg,space,spaceImg;
var distance=0;
var gameState = "play"

function preload(){
starImg=loadImage("star.png");
spaceImg=loadImage("space.png");
rocketImg=loadImage("rocket.png");
}

function setup() {
 createCanvas(300,300);


 stars=new Group();
 space = createSprite(150,150);
 space.addImage(spaceImg);
 space.scale=3
 

 rocket=createSprite(150,200);
 rocket.addImage(rocketImg);
 rocket.scale=0.35

}

function draw() {

    
    background(200);
     drawSprites();
     textSize(15);
    fill("white")
    text("Distance: "+ distance,5,15);
    if(gameState==="play"){
    distance = distance + Math.round(getFrameRate()/50);  
   space.velocityY=2
if(space.y>200){
  space.y=150;
}
 
 spawnStars();

 if(stars.isTouching(rocket)){
    rocket.destroy();
    gameState="end"
    }
  if (keyDown(LEFT_ARROW)){
    rocket.x-=3;
  }
  if (keyDown(RIGHT_ARROW)){
    rocket.x+=3;
  }
}
  if(gameState==="end"){
    
    text("Game Over",95,150);
  }
}

function spawnStars(){
   
    if(frameCount%200===0){
        star=createSprite(random(5,300),-50)
        star.addImage(starImg);
        stars.add(star);
        star.scale=0.1
        star.velocityY=1
        star.lifetime=400
    }
}