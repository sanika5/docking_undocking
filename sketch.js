var iss, spacecraft, scImg, bg;
var hasDocked, hasDocked=false;


function preload(){
bg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
scImg = loadImage("spacecraft1.png");
scImg1 = loadImage("spacecraft2.png");
scImg2 = loadImage("spacecraft3.png");
scImg3 = loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(600,350);
  
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scImg);
  spacecraft.scale=0.16;

  iss = createSprite(300,150);
  iss.addImage(issImg);
  iss.scale=0.35;

}

function draw() {
  background(bg); 
  spacecraft.addImage(scImg);
  if(!hasDocked)
  {
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW"))
    {
      spacecraft.y=spacecraft.y-2;
    }
    if(keyDown("LEFT_ARROW"))
    {
      spacecraft.addImage(scImg3)
      spacecraft.x=spacecraft.x-2;
    }
    if(keyDown("RIGHT_ARROW"))
    {
      spacecraft.addImage(scImg2)
      spacecraft.x=spacecraft.x+2;
    }
    if(keyDown("DOWN_ARROW"))
    {
      spacecraft.addImage(scImg1)
     
    }


  }

  if(spacecraft.y===(iss.y+30)&&spacecraft.x<=iss.x)
  {
    
    hasDocked=true
    textSize(23);
    fill("white");
    text("!Docking successful!",200,300);

   
  }

  drawSprites();
}