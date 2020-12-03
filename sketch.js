var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxSide1, boxSide2, boxSide3;
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
//create the canvas and set it's x and y to the center
	createCanvas(800, 700);
	//rectMode(CENTER);

//create red box sides
	boxSide1Sprite=createSprite(width-35,height-25,20,100);
	boxbottomSprite = createSprite(width-35,height-25,200 ,20);
	boxSide2Sprite=createSprite(width-35,height-25,20,100);

	
//create package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

//create helicopter sprite 
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

//create ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

//create engine and world
	engine = Engine.create();
	world = engine.world;

//make boxSide sprite a body and add it to world 
	boxSide1Body = Bodies.rectangle(width/2 - 100 , 610 , 20 ,100, {isStatic:true});
	World.add(world, boxSide1Body);

//make boxSide sprite a body and add it to world 
	boxSide2Body = Bodies.rectangle(width/2 + 100 , 610 , 20 ,100, {isStatic:true});
	World.add(world, boxSide2Body);

//make boxbottom sprite a body and add it to world 
	boxbottomBody = Bodies.rectangle(width/2, 650 , 200 ,20, {isStatic:true});
	World.add(world, boxbottomBody);

//make package sprite a body and add it to world 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

//make ground sprite into a body and add it to world
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

//run the engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxSide1Sprite.x = boxSide1Body.position.x 
  boxSide1Sprite.y = boxSide1Body.position.y
  boxSide2Sprite.x = boxSide2Body.position.x 
  boxSide2Sprite.y = boxSide2Body.position.y 
  boxbottomSprite.x = boxbottomBody.position.x 
  boxbottomSprite.y = boxbottomBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false);
	packageBody.restitution = -1;
	packageBody.velocityY = -3;    
  }
}



