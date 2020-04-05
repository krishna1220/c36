var ball;
var database,position;
var gameState=0,playerCount=0,form,player,game;
var allPlayers;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
    background("white");
    if(playerCount===4){
        game.update(1);
        gameState=1;
        game.play();
    }
}