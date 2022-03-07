var backGround, loadBG
var runner;
var Obstacle, obs, ObsGroup
var inviGround
var gameOver,restart
var gameState=PLAY
var gameState=END

function preload(){

  runner=loadImage("New Piskel.png")
  loadBG=loadImage("land.jpg")

obs=loadImage("obstacle.png")


 


}

function setup() {
 createCanvas(600,600);

 backGround=createSprite(300,300,600,10)
 backGround.velocityX=-2;
backGround.addImage(loadBG)
backGround.scale=2;
 goku=createSprite(20, 450 ,10,10)
 goku.addImage(runner)
 goku.scale=2.5;
 goku.debug=true;
 goku.setCollider("circle",-6,-7,10)


 



inviGround=createSprite(20,500,50,10)
inviGround.visible=false


ObsGroup=new Group()
 



}

function draw() {
  background("white")
  if (backGround.x < 0){
    backGround.x = backGround.width/2
  }
console.log(goku.y)
  if(keyDown("space")&&goku.y>=450){

    goku.velocityY=-11
   
  

  }

  
goku.velocityY=goku.velocityY+0.8

goku.collide(inviGround)

SpawnObstacle()
 

 drawSprites();
 if(ObsGroup.isTouching(goku)){
  text("gameOver",300,300,30,20)
  Obstacle.velocityX=0
  backGround.velocityX=0
  gameState==OVER

}
}

function SpawnObstacle(){
  if(frameCount%60==0){
    Obstacle=createSprite(475,475,10,20)
    Obstacle.addImage(obs)
    Obstacle.scale=5
    Obstacle.velocityX=-4
    ObsGroup.add(Obstacle);
    
  }

}
function reset(){
if(ObsGroup.isTouching(goku)){
  text("gameOver",300,300,30,20)
  Obstacle.velocityX=0
  backGround.velocityX=0
  gameState==OVER
  reset();
}
}