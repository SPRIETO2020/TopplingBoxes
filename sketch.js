const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //fill("orange");
    box1 = new Box(200,300,50,50);
    //fill("yellow");
    box2 = new Box(240,100,50,100);
    //fill("purple");
    box3 = new Box(180,300,50,50);
    //fill("blue");
    box4 = new Box(280,300,50,70);
    //fill("green");
    box5 = new Box(310,300,60,50);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
}