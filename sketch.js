
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var bob1,bob2,bob3,bob4,bob5,bob6;
	var rope1,rope2,rope3,rope4,rope5,rope6;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0)
  rope2 = new Rope(bobObject2.body,roofObject.body,bobDiameter*2,0)
  rope3 = new Rope(bobObject3.body,roofObject.body,bobDiameter*2,0)
  rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*2,0)
  rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0)

  bob1 = new Bob(100,100,20,20)
  bob2 = new Bob(200,100,20,20)
  bob3 = new Bob(300,100,20,20)
  bob4 = new Bob(400,100,20,20)
  bob5 = new Bob(500,100,20,20)
  
  drawSprites();
 
}



