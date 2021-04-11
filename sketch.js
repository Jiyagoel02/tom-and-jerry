var ground , groundImg;
var jerry,jerry_run;
var tom, tom_run;

function preload(){
    groundImg = loadImage("ground.png");
    jerryImg = loadAnimation("mouse1.png");
    jerryImg4 = loadAnimation("mouse4.png");
    jerry_run = loadAnimation("mouse2.png");
    tomImg1 = loadAnimation("cat1.png");
    tomImg4 = loadAnimation("cat4.png");
    tom_run = loadAnimation("cat2.png");
}

function setup(){
createCanvas(680,400);
ground = createSprite(340,200);
ground.addImage("groundImg",groundImg);
ground.scale = 0.7;

tom = createSprite(500,340,20,100);
tom.addAnimation("tomImg1",tomImg1);
tom.scale = 0.1;

jerry = createSprite(200,340,10,40);
jerry.addAnimation("jerryImg",jerryImg);
jerry.scale = 0.1;

}

function draw(){
console.log (tom.x - jerry.x);
backgroung(rbs())

}