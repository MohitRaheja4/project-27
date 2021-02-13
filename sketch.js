
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope,rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob3 = new Bob(400,380,40,400,0);
	bob2 = new Bob(350,380,40,350,380);
	bob1 = new Bob(300,380,40,300,380);
	bob4 = new Bob(450,380,40,450,380);
	bob5 = new Bob(500,380,40,500,380);
	roof = new Roof(400,180,260,10);
	rope=new Chain(bob1.body,roof.body,-50*2,0);
	rope1=new Chain(bob2.body,roof.body,-50,0);
	rope2=new Chain(bob3.body,roof.body,0,0);
	rope3=new Chain(bob4.body,roof.body,50*1,0);
	rope4=new Chain(bob5.body,roof.body,50*2,0);
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  if(keyDown(UP_ARROW))
 {
	 bob1.body.position.y=bob1.body.position.y-2;
	 bob1.body.position.x=bob1.body.position.x-2;
 } 

  

  drawSprites();
 Engine.update(engine);
}



