const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8;
var box9, box10, box11, box12, box13, box14, box15, box16;
var stand1, stand2;
var polygon, slingshot, polyimg;
var score = 0;
var bg = '#342a38';
var response;

function preload(){
    polyimg = loadImage('polygon.png');
}

function setup(){
    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;


    stand1 = new Ground(350, 450, 230, 10);
    stand2 = new Ground(600, 300, 230, 10);
    box1 = new Box(275, 425, 4);
    box2 = new Box(300, 425, 4);
    box3 = new Box(325, 425, 4);
    box4 = new Box(350, 425, 4);
    box5 = new Box(375, 425, 4);
    box6 = new Box(400, 425, 4);
    box7 = new Box(425, 425, 4);

    box8 = new Box(300, 385, 3);
    box9 = new Box(325, 385, 3);
    box10 = new Box(350, 385, 3);
    box11 = new Box(375, 385, 3);
    box12 = new Box(400, 385, 3);

    box13 = new Box(325, 345, 2);
    box14 = new Box(350, 345, 2);
    box15 = new Box(375, 345, 2);

    box16 = new Box(350, 305, 1);

    box17 = new Box(550, 275, 4);
    box18 = new Box(575, 275, 4);
    box19 = new Box(600, 275, 4);
    box20 = new Box(625, 275, 4);
    box21 = new Box(650, 275, 4);

    box22 = new Box(575, 235, 2);
    box23 = new Box(600, 235, 2);
    box24 = new Box(625, 235, 2);

    box25 = new Box(600, 195, 3);


    polygon = new Hexagon(50, 200);

    slingshot = new SlingShot(polygon.body, {x: 100, y: 200});

}

function draw(){
    getTime();
    background(bg);
    Engine.update(engine);

    textSize(20);
    fill("white");
    text('Score: ' +score, 100, 50);

    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();

    polygon.display();

    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 100, y:200});
        slingshot.attach(polygon.body);
    }
}

async function getTime(){
    response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11, 13);
    if(hour >= 06 && hour <= 19){
        bg = '#ab99b2';
    }
    else{
        bg = '#342a38';
    }
    bg=bg;
}