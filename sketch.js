//create the ball, playerPaddle and computerPaddle as sprite objects
var ball, edges;

var playerPaddle;

var gameState = "serve";


//variables to keep the score
var compScore = 0;
var playerScore = 0;

var computerPaddle

function setup(){

  createCanvas(windowWidth,windowHeight);

   ball = createSprite(windowWidth/2,windowHeight/2,10,10);

   playerPaddle = createSprite(windowWidth - 30,windowHeight/2,10,70);
  
  
   computerPaddle = createSprite(40,windowHeight/2,10,70);
  
  
  edges = createEdgeSprites();
  
  //variable to store different state of game
 
}
function draw() {
  //clear the screen
  background("white");
  
  


  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve or Press Screen",windowWidth/2 - 100,windowHeight/2 - 50);
  }
   
  //display scores
  text(compScore, windowWidth/2 - 30,20);
  text(playerScore, windowWidth/2 + 30,20);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
   computerPaddle.y = ball.y;
  
  //draw line at the centre
  for (var i = 0; i < windowHeight; i=i+20) {
    line(windowWidth/2,i,windowWidth/2,i+10);
  }
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
 
  
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
 
  
  //serve the ball when space is pressed
  if (touches.length > 0 && gameState === "over" || keyDown("space") &&  gameState === "serve") {
    
    serve();
    gameState = "play";
    touches = [];
  
    
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > windowWidth || ball.x <0) {
    
    
  
    
    if(ball.x > windowWidth) {
      compScore = compScore + 1;
      
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1;
     
      
      
    }
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",windowWidth/2 - 30,windowHeight/2 - 50);
    text("press Screen or r to reset",windowWidth/2 - 70, windowHeight/2 - 30)
  
  }
  
  if (touches.length > 0 && gameState === "over" ||keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
    touches = [];
  }
  
  drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = windowWidth/2;
  ball.y = windowHeight/2;
  ball.velocityX = 0;
  ball.velocityY = 0;
}
