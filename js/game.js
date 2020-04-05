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
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
play(){
  form.hide();
  textSize(30);
  text("gameStart",120,100);
  Player.getplayerinfo();
  if (allPlayers!==undefined){
    var displayposition=130;
    displayposition+=30;
  text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayposition);
  }
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=50;
player.update();

}

  }