function bounceOff(object1,object2){
    if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 ){
  
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)
      }
      
      if (object1.y - object2.y < object2.height/2 + object1.height/2 &&object2.y - object1.y < object2.height/2 + object1.height/2) {
        object1.velocityY=object1.velocityY*(-1)
        object2.velocityY=object2.velocityY*(-1)
      } 
  }
  function isTouching(m,f){
    if (m.x - f.x < f.width/2 + f.width/2 && f.x - m.x < f.width/2 + m.width/2 && m.y - f.y < f.height/2 + m.height/2 &&f.y - m.y < f.height/2 + m.height/2) {
     return true;}
     else {return false}
  }