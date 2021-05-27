var dog, happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
dogImage = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(300,200,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.1;
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  textSize(15);
  fill(5);
  stroke(3);
  text("Note: Press UP_ARROW key to feed milk!",100,70);
  text("Food left: 20", 100,200);
  

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x<= 0){
    x = 0;
    }
    else{
      x= x -1;
    }
  database.ref('/').update({
    Food:x
  })
}


