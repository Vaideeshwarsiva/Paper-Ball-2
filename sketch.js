
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, side1, ground;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(50, 650, 20, 20);
	side1 = new Dustbin(655, 590, 70, 70);
	ground = new Ground(200, 670, 2800, 20);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);
	ground.display();
	side1.display();
	paperObject.display();

	paperObject.x += 2;

	if (paperObject.x >= 300) {
		paperObject.isStatic = false;
	}

	keyPressed();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		paperObject.x += 2;
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });
		paperObject.y -= 2;
	}

	if (keyCode === DOWN_ARROW) {
		paperObject.x += 2;
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: 85 });
		paperObject.y += 2;
	}
}




