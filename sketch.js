
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	holder = new holder(width/2+100,80,100,20)
	bob1 = new bob(300,10)
	sling1 = new rope(bob1.body,{x:200,y:80})
	bob2 = new bob(250,10)
	sling2 = new rope(bob2.body,{x:200,y:80})
	bob3 = new bob(200,10)
	sling3 = new rope(bob3.body,{x:200,y:80})
	bob4 = new bob(150,10)
	sling4 = new rope(bob4.body,{x:200,y:80})
	bob5 = new bob(100,10)
	sling5 = new rope(bob5.body,{x:200,y:80});
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  holder.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  if(keyDown("up")){
	bob1.x = bob1.x+3;
	}
  drawSprites();
}