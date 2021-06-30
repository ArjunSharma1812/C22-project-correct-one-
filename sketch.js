const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob1_options = {
		isStatic:false,
		restitution: 1,
		friction:0,
        density: 0.1,
	}

	
	

	roof = Bodies.rectangle(410,100,350,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(295, 390, 30, bob1_options);
	World.add(world, bob1);

    bob2 = Bodies.circle(355, 390, 30, bob1_options);
	World.add(world, bob2);

    bob3 = Bodies.circle(415, 390, 30, bob1_options);
	World.add(world, bob3);

	bob4 = Bodies.circle(475, 390, 30, bob1_options);
	World.add(world, bob4);

	bob5 = Bodies.circle(535, 390, 30, bob1_options);
	World.add(world, bob5);

	rope1 = new Rope(roof, bob1, -60*2, 0);

	rope2 = new Rope(roof, bob5, 60*2, 0);

	rope3 = new Rope(roof, bob2, -30*2, 0);
	
	rope4 = new Rope(roof, bob4, 30*2, 0);

	rope5 = new Rope(roof, bob3, 0, 0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,350,20);

  //call display() to show ropes here
   rope1.display();  
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x, bob1.position.y, 30, 30);
  ellipse(bob2.position.x, bob2.position.y, 30, 30);
  ellipse(bob3.position.x, bob3.position.y, 30, 30);
  ellipse(bob4.position.x, bob4.position.y, 30, 30);
  ellipse(bob5.position.x, bob5.position.y, 30, 30);
}

function drawLine (constraint) {
	bobBodyPosition = constraint.bodyA.position;    
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX= roofBodyPositiion.x + roofBodyOffset.x;
	roofBodyY= roofBodyPosition.y + roofBodyOffset.y; 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);           
}
//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode == UP_ARROW){
	Matter.Body.applyForce(bob1, {x:0, y:0}, {x: -10,y: 0 });
	}
}