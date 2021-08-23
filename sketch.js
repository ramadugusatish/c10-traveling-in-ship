var shipImg,ship,ocean,oceanImg;

function preload(){
  //adding image of sea
oceanImg = loadImage("sea.png");
//loading animation of ship
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
createCanvas(400,400);
//changeing background colour
background("blue");

//moveing background
ocean=createSprite(400,200);
ocean.addImage(oceanImg);
ocean.velocityX=-5;
ocean.scale=0.3;

//creating ship
ship=createSprite(130,200,30,30);
ship.addAnimation("shipimage",shipImg);
ship.scale=0.2;
}
 
function draw() {
background("white");

ocean.velocityX=-3;

//code to reset background
if(ocean.x<0){
ocean.x=ocean.width/8;
}


drawSprites();

} 

