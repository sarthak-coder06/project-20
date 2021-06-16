var gd,garden
function preload() {
    //load the images here
   gd=loadImage("images/garden.png")
   ct=loadAnimation("images/cat1.png")
   ms=loadAnimation("images/mouse1.png")
   ct2=loadAnimation("images/cat2.png","images/cat3.png")
   ms2=loadAnimation("images/mouse2.png","images/mouse3.png")
   ct3=loadAnimation("images/cat4.png")
   ms3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400)
    garden.addImage(gd)
   mouse=createSprite(200,500)
   mouse.addAnimation("mouse1.png",ms)
   mouse.scale=0.2
   cat=createSprite(700,500)
   cat.addAnimation("cat1.png",ct)
   cat.scale=0.2
    
}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x>(cat.width-mouse.width)/2){
        cat.addAnimation(ct3,"cat4.png")
        cat.changeAnimation("cat4.png")
        mouse.addAnimation(ms3,"mouse4.png")
        mouse.changeAnimation(ms3,"mouse4.png")
    }
    keyPressed();
    drawSprites();



function keyPressed(){

  //For moving and changing animation write code here
 
  if (keyDown("left")) {
    cat.x = cat.x-5;
    mouse.addAnimation(ms2,"images/mouse2.png","images/mouse3.png")
    mouse.changeAnimation(ms2,"images/mouse2.png","images/mouse3.png")
cat.addAnimation(ct2,"images/cat2.png","images/cat3.png")
cat.changeAnimation(ct2,"images/cat2.png","images/cat3.png")
}
}
}
