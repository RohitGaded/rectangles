function setup() {
  createCanvas(800,400);
 
  fixedRect=createSprite(200,300,50,50);
  fixedRect.shapeColor="red"

  movingRect=createSprite(500,200,100,50);
  movingRect.shapeColor="yellow";
  
}

function draw() {
  background("black");
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    &&movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2)
  {
  
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="red";
  }


  //console.log(movingRect.x-fixedRect.x)
  drawSprites();
}