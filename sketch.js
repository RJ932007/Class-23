const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine,ground,box1,box2;

function setup(){
  
    createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

    ground= new Ground(400,590,800,10);

    box1 = new Box(500,300,50,70);
    box2 = new Box(520,230,30,40);
}

function draw(){

    background("white");

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();

    

    

}


































