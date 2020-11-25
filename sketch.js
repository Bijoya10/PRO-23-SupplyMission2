var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 ,45,45, {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = Bodies.rectangle(width/2, 655,200 , 10 , {isStatic:true} );
 	World.add(world, box1);
	box2 = Bodies.rectangle(width/2+100, 610, 10, 100 , {isStatic:true} );
	World.add(world, box2);
	box3 = Bodies.rectangle(width/2-100, 610, 10, 100 , {isStatic:true} );
	World.add(world, box3);
	

	box1Sprite=createSprite(box1.position.x, box1.position.y, 200,10);
	box1Sprite.shapeColor=color(255,0,0)
	box2Sprite=createSprite(box2.position.x, box2.position.y, 10,100);
	box2Sprite.shapeColor=color(255,0,0)
	box3Sprite=createSprite(box3.position.x, box3.position.y, 10,100);
	box3Sprite.shapeColor=color(255,0,0)
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
    
  }
}



