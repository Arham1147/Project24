var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var options={
		isStatic:false,
	    restitution :0.3, 
		friction:0.5,		
		density:1.2
		
		}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = createSprite(300,620,20,100,{isStatic:true});
	box1.shapeColor = color("red");
	
	box2 = createSprite(500,620,20,100,{isStatic:true});
	box2.shapeColor = color("red");
	
	box3 = createSprite(width/2,660,200,20);
	box3.shapeColor = color("red");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	ground.shapeColor = color("brown");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Matter.Bodies.circle()

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW)
	{
	Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-35});

	
	}
}