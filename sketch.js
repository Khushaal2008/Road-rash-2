var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes,bike1,bike1Img,bike2,bike2Img,bike3,biks, bike1,bie3Img,bike4,bike4Img,trackImg,speed1,speed1Img,speed2,speed2Img,speed3,speed3Img,speed4,speed4Img,   speed5,speed5Img,speed6,speed6Img,speed7,speed7Img,speed8,speed8Img,line;


function preload() {
  bike1Img = loadImage("images/bike1.png")
  bike2Img = loadImage("images/bike2.png");
  bike3Img = loadImage("images/bike3.png")
  bike4Img = loadImage("images/bike4.png")
  trackImg = loadImage("images/track.jpg")
  speedImg = loadImage("images/booster.png")
  speed2Img = loadImage("images/booster2.png")
  speed3Img = loadImage("images/booster3.png")
  speed4Img = loadImage("images/booster4.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState ===2){
game.end()
  }
 
  if(gameState ===2){
    game.end()
      }

 // drawSprites();
}
