var box
function setup() {
  createCanvas(400,400);
  box = createSprite(300,300,25,25)
}

function draw() 
{
  background("white");
  drawSprites()
  if(keyDown("1")){
  background("green")
  }
  if(keyDown("2")){
    background("yellow")
  }
  if(keyDown("3")){
    background("blue")
  }
}




