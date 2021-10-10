var runner,run_Img,path,path_Img;
var bond1,bond2;

function preload(){
  run_Img = loadAnimation("Runner-1.png","Runner-2.png");
  path_Img = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("path",path_Img);
  path.scale = 1;

  runner = createSprite(200,350);
  runner.addAnimation("Running",run_Img);
  runner.scale = 0.05

  bond1 = createSprite(50,200,20,400);
  bond1.visible = false;

  bond2 = createSprite(350,200,20,400);
  bond2.visible = false;
}

function draw() {
  background(0);

  runner.collide(bond1);
  runner.collide(bond2);

  runner.x = mouseX;

  path.velocityY = 4;

  if(path.y >= 400){
    path.y = 200;
  }

  drawSprites()
}
