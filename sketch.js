const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;  
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25; 

var ground;

var slingshot;

var pent, pentImg;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");

  pentImg = loadImage("sprites/Penta.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);

  
  
  
  
  slingshot = new SlingShot(pent.body,{x:205, y:40});

}

function draw() {
  background(backgroundImg);
    Engine.update(engine);
 
    ground.display();
    slingshot.display();

    drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}