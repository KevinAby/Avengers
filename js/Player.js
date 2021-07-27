class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    this.time = 0;
    
  }

  

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }


  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      time:this.time
    })
  }


  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getPlayersAtEnd(){
    database.ref('PlayersAtEnd').on("value",(data)=>{
       this.rank = data.val();
    })
   
          
     }
       
     static updatePlayersAtEnd(rank){
   
       database.ref('/').update({
   
        PlayersAtEnd:rank
       })
     }
}