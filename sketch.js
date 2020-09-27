
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone;
var ground;
var boy;
var tree;

function preload()
{
	
}

function setup() {
	createCanvas(800, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(100,200,5,5);
	stone.scale  =0.05;
	
	ground = new Ground(400,650,1200,20);
 
	//tree = new Tree(800,600,20,50);
	
    

	Engine.run(engine);
  
}


function draw() {
	background(255);
  //rectMode(CENTER);
  
  stone.display();
  ground.display();

 // tree.display();
  
  drawSprites();
 
}



