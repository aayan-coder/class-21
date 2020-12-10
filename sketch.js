var mb,fb
var b1,b2



function setup() {
  createCanvas(800,400);
  fb=createSprite(400, 300, 50, 50);
  mb=createSprite(300, 300, 50, 50);
mb.debug=true
fb.debug=true
  fb.shapeColor=("yellow")
  mb.shapeColor=("yellow")
  //f.velocityX=-1
  //m.velocityX=+1
  b1=createSprite(400, 100, 50, 50);
  b2=createSprite(300, 100, 50, 50);
}

function draw() {
  background(0);
 // bounceOff()
  mb.x=mouseX
  mb.y=mouseY
  
  if(isTouching(b1,mb)){
    b1.shapeColor=("grey")
    mb.shapeColor=("grey")
  }

else{
  b1.shapeColor=("yellow")
  mb.shapeColor=("yellow")

}


  drawSprites();

}
