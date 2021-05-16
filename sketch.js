var fixedRect, movingRect;
var r1,r2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);
  r1 = createSprite(200, 50, 50, 80);
  r2 = createSprite(200, 350, 50, 80);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  fixedRect.debug = true;
  movingRect.debug = true;

  r1.velocityY = 5;
  r2.velocityY = -5;
  go1 = createSprite(500, 200, 50, 80);
  go1.shapeColor="green";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, fixedRect)
    ){
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }
  else if(isTouching(movingRect,go1)){
    go1.shapeColor="red";
  movingRect.shapeColor="red";

  }
  else{
    fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  go1.shapeColor="green";
  }
  bounceOff(r1,r2);
  
  

  drawSprites();
}


