var
var monkey , monkey_running
var banana,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  

  score=0
}


function draw() {
  background(255);
  
            
  text("Survival Time: "+ score, 200,50);
  
  
    
    
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  score = score + Math.round(getFrameRate()/60);
    if(keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground)
  food();
  
 obstacles();
  
drawSprites();
  
}

function food(){
  if (frameCount % 80 == 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=120
   
  }
  
}

function obstacles(){
  if (frameCount % 300 == 0) {
  var obstacle=createSprite(400,340,40,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.089;
    obstacle.velocityX= -3;
    obstacle.lifetime=130
  
  
  }
}



