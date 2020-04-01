var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(150,200,50,50);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(250,200,50,50);
  fixedRect.shapeColor="blue";
}

function draw() {
  background(0,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
      && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
        movingRect.shapeColor="red";
        fixedRect.shapeColor="red";
      }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}