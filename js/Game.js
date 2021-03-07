class Game {
  constructor(){

  }

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

    bike1 = createSprite(300,100);
    bike1.addImage(bike1Img)
    bike1.scale = 0.2
    bike2 = createSprite(200,100);
    bike2.addImage(bike2Img)
    bike2.scale = 0.5
    bike3 = createSprite(200,100);
    bike3.addImage(bike3Img)
    bike3.scale = 0.2
    bike4 = createSprite(200,100);
    bike4.addImage(bike4Img)
    bike4.scale = 0.5
    bikes = [bike1, bike2, bike3, bike4];

   speed1 = createSprite(370,-1000)
   speed1.addImage(speedImg) 
   speed1.scale = 0.09

   speed2 = createSprite(740,-1000)
   speed2.addImage(speed2Img) 
   speed2.scale = 0.09

   speed3 = createSprite(1110,-1000)
   speed3.addImage(speed3Img) 
   speed3.scale = 0.09

   speed4 = createSprite(1480,-1000)
   speed4.addImage(speed4Img) 
   speed4.scale = 0.09


line = createSprite(100,-4100,100000000,10)
   line.visible = false
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      background(rgb(198,135,103))
      image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5.5)
      //index of the array
      var index = 0;

      //x and y position of the bikes
      var x = 0;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the bikes a little away from each other in x direction
        x = x + 370;
        //use data form the database to display the bikes in y direction
        y = displayHeight - allPlayers[plr].distance;
        bikes[index-1].x = x;
        bikes[index-1].y = y;

        if (index === player.index){
          bikes[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = bikes[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null || touches.length){
      player.distance +=10
      player.update();
    }

    if(player.distance > 5100){
      gameState = 2
    }

if(bike1.isTouching(speed1)||bike2.isTouching(speed2)||bike3.isTouching(speed3)||bike4
.isTouching(speed4)){
player.distance +=70
}
   

    drawSprites()
    if (bike1.isTouching(line)) {
      textSize(25)
      fill("blue")
      text("You Reached",370,-4130)
    }

    if (bike2.isTouching(line)) {
      textSize(25)
      fill("blue")
      text("You Reached",740,-4130)
    }

    if (bike3.isTouching(line)) {
      textSize(25)
      fill("blue")
      text("You Reached",1110,-4130)
    }

    if (bike4.isTouching(line)) {
      textSize(25)
      fill("blue")
      text("You Reached",1480,-4130)
    }
  }
  
  

  end(){
    console.log("Game Ended")
  }
}
