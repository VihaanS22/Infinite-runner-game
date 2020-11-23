var gameState = "play"
var man, man_running
var road, roadImg
var police, policeImg
var cars, car1, car2, car3
var vehicle1, bike
var vehicle2, bus
var score = 0;
var line1, line2

function preload(){
 man_running = loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png");
 roadImg = loadImage("road.png")
policeImg = loadImage("police.png")


 car1 = loadImage("car1.png")
 car2 = loadImage("car2.png")
 car3 = loadImage("car3.png")
 bike = loadImage("bike.png")
 bus  =loadImage("bus.png")
}



function setup() {
  createCanvas(1000, 400);
 road = createSprite(200, 155, 400, 400)
  road.addAnimation("road_traffic", roadImg); 
   road.x = road.width /2;
   road.velocityX = -(3+3*score/20)
  
   man = createSprite(250, 300, 10, 10)
   man.addAnimation("running", man_running); 
   man.scale  = 0.7
  // line1 = createSprite(200, 240, 800, 10)
  line2 = createSprite(200, 405, 800, 10)
  
   police = createSprite(40, 350, 10, 10)
police.addAnimation("police_car", policeImg)
police.scale = 1.2
  cars = new Group();

  //vehicle2 = new Group();
 
}



function draw() {
  background(100);

if (road.x<450) {
  road.x = road.width/2;
}
line2.visible = false
 if(gameState === "play"){  
  
 
  if(keyDown("space")){
   
 man.velocityY = -4;

man.velocityY = man.velocityY + 0.01   
} 
  
   if(cars.isTouching(man)){
      man.x = man.x - 20
     
      cars.destroyEach()
   }
  if(man.isTouching(police)){
man.velocityX = 0
   man.velocityY = 0
road.velocityX = 0
man.visible = false
fill("white")
text("YOU HAVE BEEN CAUGHT. BETTER LUCK NEXT TIME!", 400, 350) 
}
   
 

  man.velocityY = man.velocityY + 0.1 
  
  road.display()
  man.display()
  //man.collide(line1)
  man.collide(line2)
  police.display()
  //line1.display()
  line2.display()
  carGroup()
  
  drawSprites();


    
  
  }

function carGroup(){
 
  if (frameCount % 200 === 0) {
    var car = createSprite(420,120,40,10);
    car.y = random(270,320);
  
    car.addImage(policeImg);
car.scale = 1.2
   
    car.velocityX = -(2+3*score/10)
   
  car.depth = man.depth;
    man.depth = car.depth + 1;

     car.setLifetime = 600;
  cars.add(car);
    
  }
}

}

