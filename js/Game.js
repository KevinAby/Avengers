class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  

  async start(){

    if(gameState === 0){
    
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
    finish = createSprite(190,200)
    finish.addImage("c",finishImg)
    finish2 = createSprite(610,200)
    finish2.addImage("qc",finishImg)
    finish3 = createSprite(1030,200)
    
    finish3.addImage("qqc",finishImg)
    finish.scale = 0.8
   finish2.scale = 0.8
   finish3.scale = 0.8

  var finish4 = createSprite(190,500)
   finish4.addImage("zc",finishImg)
   var finish5 = createSprite(610,500)
   finish5.addImage("vc",finishImg)
    var finish6 = createSprite(1030,500)
   finish6.addImage("s",finishImg)
   var finish7 = createSprite(1370,500)
   finish7.addImage("wff",finishImg)
   var finish8 = createSprite(1370,200)
   finish8.addImage("wffbb",finishImg)
   finish4.scale = 0.8
   finish5.scale = 0.8
   finish6.scale = 0.8
   finish7.scale=0.8
   finish8.scale=0.8
   player2 = createSprite(200,200,50,50);
    
    sign = createSprite(120,50,50,50);
sign.addImage("c",logo2)
sign.scale=0.2

    player2.addImage("b",player2Img)
    player1 = createSprite(400,200,50,50);
    player1.addImage("c",player1Img)
    player5 = createSprite(1000,200,50,50);
    player5.addImage("e",player5Img)
    player3 = createSprite(600,200,50,50);
    player3.addImage("d",player3Img)
    player4 = createSprite(800,200,50,50);
    player4.addImage("t",player4Img)
    keeper = createSprite(670,80,70,70)
    keeper.scale = 2.4
    player1.scale = 0.1
    player2.scale = 0.2
    player3.scale = 0.1
    player4.scale = 0.3
    player5.scale = 0.13

  //  player5 = createSprite(900,60);
    players = [player1, player2, player3, player4, player5];
 // player/

  }

  play(){
    
    form.hide();
    background(spa)
    Player.getPlayerInfo();
    player.getPlayersAtEnd();

   if(frameCount%28 === 0){
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: keeper.addImage(frontImg), keeper.scale = 0.16;
              break;
      case 2: keeper.addImage(backImg),keeper.scale = 0.14;
              break;
      case 3: keeper.addImage(frontImg),keeper.scale = 0.16;
              break;
      case 4: keeper.addImage(frontImg),keeper.scale = 0.16;
              break;
      case 5: keeper.addImage(backImg),keeper.scale = 0.14;
              break;
      case 6: keeper.addImage(backImg),keeper.scale = 0.14;
              break;
      default: break;

   }
  }
 //   Player.getPlayerInfo();

    if(allPlayers !== undefined){
   //  background(neptune)
     var index = 0
     var y;
     var x = 0;
     for(var plr in allPlayers){
    
      index = index + 1 ;

      
      x = x + 270;
      
      y = displayHeight/2+100 - allPlayers[plr].distance;
      players[index-1].x = x;
      players[index-1].y = y;

      if (index === player.index){
        stroke(10)
        fill("Gold")
       // ellipse(x,y,60,60)
        textSize(25)
        text(allPlayers[plr].name,x,y-80)
        players[index - 1].shapeColor = "Gold";
      }
     
      
    }
  
  

    if( player.index !== null){

    if(keyIsDown(UP_ARROW) ){
      player.distance +=15
      player.update();

    }
   if(keyIsDown(UP_ARROW) && rand === 1){
     player.distance = 0
     
    }
    if(keyIsDown(UP_ARROW) && rand === 3){
    player.distance = 0
      
 }
    if(keyIsDown(UP_ARROW) && rand === 4){
      player.distance = 0
     // 392 is the final distance
    }

  if(player.distance>392){
     gameState = 2
     player.rank= player.rank+1
  
     Player.updatePlayersAtEnd(player.rank)
     
  }
 
  test = frameCount
}
    drawSprites();
  }
  
  
}
end(){

  console.log("Game is over")
    console.log(player.rank)
    form.DisplayPrize()
  
  
 } 
}
  
   
