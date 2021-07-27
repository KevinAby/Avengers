//Create variables here
var player1,player2,player3,player4,player5;
var player1Img,player2Img,player3Img,player4Img,player5Img;
var players;
var player5Img;
 var gameState = 0;
var  garden, gardenImg;
var form ,game,player;
  var database;
  var distance = -120;
  var playerCount
  var canvas
  var allPlayers;
  var backgroundImage 
  var spa
  var back;
  var moon,venus,mars,neptune;
var keeper;
var frontImg,backImg;
var keeperImg
var position           
var Back,realrank;
var Front
var finish,finishImg;
var finish2;
var endImg;
var finish3;
var name1,name2,name3,name4;
var rank;
var wait , waitImg; 
var prize  ;
var score;
var duringGame, end;
var test, time = 0;
var victory;
var highscore;
var play,star,logo,logo2;
var sign,logo3;

function preload()
{ 

 player1Img = loadImage("images/captain.png")
 player2Img = loadImage("images/spider.png")
 player3Img = loadImage("images/thor.png")
 player4Img = loadImage("images/iron.png")
 player5Img = loadImage("images/black.png")
  spa = loadImage("images/space.jpg")
 
 frontImg = loadImage("images/thanos1.png")
 backImg = loadImage("images/thanos2.png")
 finishImg = loadImage("images/finish line.jpg")
 endImg = loadImage("images/prize.png")
 logo =  loadImage("images/end2.jpg")
logo2 =  loadImage("images/endgame.png")
play  = loadSound("Sound/theme.mp3")
logo3 =  loadImage("images/end.jpg")
}

function setup() {
  canvas = createCanvas(displayWidth-43 ,displayHeight-170);
   background(logo)
 database = firebase.database();

 end = database.ref('End');
 
 

 game = new Game();
 game.getState();
 game.start();
 
 
 

 
  



}


 // var highscoreRef  = database.ref('HIGHSCORE');
 // highscoreRef.on("value",function(data){
 //   highscore = data.val();
 // })

       





function draw(){
 
 
      
 textSize(40)

// text("HighScore: "+highscore,400,400 )

 if(playerCount === 5 && gameState===0){
   game.update(1);
   play.loop()
 }
 if(gameState === 1){

    clear();
   game.play();
   
 }
 if(gameState===2){
  
  
    game.end()
 
 

 }
 listen()
  
}
function  listen(){
 // play.play()
}
