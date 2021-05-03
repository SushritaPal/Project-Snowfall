const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var bg;
var snow = [];
function preload(){
  bg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  for(var j=0; j<100; j++){
    snow.push(new Snow(random(0,800),random(0,400)));
  }
}

function draw() {
  background(bg);  
  Engine.update(engine);
  for(var j=0;j<100; j++){
    snow[j].display();
    snow[j].update();
  }

}