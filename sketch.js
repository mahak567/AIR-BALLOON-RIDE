
var bgIMg;
var balloon;
var hotairballoon;
var balloonImg;
var database;
var balloon,position;
var balloonImg1,balloonImg2,balloonImg3,balloonImg4
function preload() {
  balloonImg  = loadAnimation("pro-C35 images/Hot Air Ballon-01.png","pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-03.png");


  bgIMg = loadImage("pro-C35 images/Hot Air Ballon-01.png")
}

function setup() {
  createCanvas(800,400);
  database=firebase.database();
    console.log(database);
 
    balloon = createSprite(400, 300, 50, 50);
  balloon.addAnimation("flying",balloonImg);
  balloon.scale = 0.7;
   balloonposition=database.ref('ballon/height');
  balloonposition.on("value",showError)

}

function draw() {
  background(bgIMg);  
  
  if(keyDown(LEFT_ARROW)){
    writePosition(-2, 0);
    
}
else if(keyDown(RIGHT_ARROW)){
  writePosition(2, 0);
}
else if(keyDown(UP_ARROW)){
  writePosition(0, -2);
    if(balloon.scale>0.2){
      balloon.scale = balloon.y/1000;
    }
}
else if(keyDown(DOWN_ARROW)){
  writePosition(0, +2);
  if(balloon.scale<0.5){
    balloon.scale = balloon.y/1000;
}
}
  drawSprites();
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x' : height.x + x ,
    'y' : height.y + y
  })}
  function showError(){
    console.log("error");
    }
    function readHeight (data){
      height = data.val();
balloon.x = height.x;
balloon.y = height.y;

    }
    function writePosition(x, y){
      database.ref('Balloon/Position').set({
        'x': balloon.x + x,
        'y': balloon.y + y,
      })
      }