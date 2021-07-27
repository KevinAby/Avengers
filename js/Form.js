class Form {

  constructor() {
    this.input = createInput("Write your name here");
    this.button = createButton('I am ready!');
    this.greeting = createElement('h1');
    this.waiting = createElement('h1')
    this.title = createElement('h1')
    this.reset = createButton("Restart")
    this.rule1 = createElement('h2')
    this.rule2 = createElement('h2')
    this.rule3= createElement('h2')
    this.rule4= createElement('h2')
    this.rule5= createElement('h2')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.waiting.hide();
    this.title.hide()
    this.rule1.hide();
    this.rule2.hide();
    this.rule3.hide();
    this.rule4.hide();
    this.rule5.hide()
  }

  display(){
    this.input.style('width', '200px')
    this.input.style('height', '20px')
   
   this.title.html("Avengers...Run...Run...Statue!!!")
    this.title.position(530, 120);
    this.rule1.html("The Avengers are trapped in space and they have to face the evil Thanos")
    
      this.rule1.position(400, 300);
      this.rule2.html("Press the the up arrow key to move forward and cross the finish line.")
      this.rule2.position(400, 330);
      this.rule3.html("If you press the up arrow key when Thanos is having his back to you, you will move forward.")
      this.rule3.position(400, 360);
      this.rule4.html(" However, if you press the up arrow key when Thanos is looking at you , you will have to start again.")
      this.rule4.position(370, 390);
      this.rule5.html("Good Luck and may you escape!")
      this.rule5.position(540, 420);
      this.rule2.style('background', 'green')
      this.title.style('background', 'indigo')
      this.rule1.style('background', 'orange')
      this.rule3.style('background', 'yellow')
      this.rule4.style('background', 'blue')
      this.rule5.style('background', 'purple')
    this.input.position(690, 520);
    this.button.position(890, 560)
    this.reset.style('width', '150px');
    this.reset.style('height', '25px');
    this.reset.style('background', 'lime');
    this.button.style('background', 'gold');
    this.input.style('background', 'turquoise');
    this.reset.position(1170,80);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.rule1.hide();
      this.rule2.hide();
      this.rule3.hide();
      this.rule4.hide();
      this.rule5.hide()
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome " + player.name+"!")
      this.greeting.position(530, 300);
      this.greeting.style('background', 'pink')
      
      this.waiting.html("We are waiting for the rest of your friends to join you! ")
      this.waiting.position(510, 370);
      this.waiting.style('background', 'violet')

    });

    this.reset.mousePressed(()=>{
      game.update(0)
       Player.updatePlayersAtEnd(0)
      player.updateCount(0)
      database.ref("players").remove()
      
    })



  }
  DisplayPrize(){
 
  
    background(logo3)
   
    var message = createElement("h1")
    message.html("Congratulations "+player.name+"!Your rank is:"+player.rank)
    message.position(250,displayHeight/2)
    var message2 = createElement("h1")
    message2.html("Your time is: "+test/20+"seconds")
    message2.position(250,displayHeight/2+40)
    var message3 = createElement("h1")
    message3.html("You Managed to escape from Thanos.The Avengers give you a big salute!")
    message3.position(250,displayHeight/2 +80)
    message.style('background', 'yellow');
    message2.style('background', 'maroon');
    message3.style('background', 'brown');
   }
}