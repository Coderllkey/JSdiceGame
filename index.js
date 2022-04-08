var playerOne = prompt("Enter First Player name");
var playerTwo = prompt("Enter Second Player Name");
//player names display
document.querySelectorAll('p')[0].innerHTML = playerOne;
document.querySelectorAll('p')[1].innerHTML = playerTwo;
//dice number generators__>

function play(){
var firstRandomNumber = Math.floor(Math.random()*6)+1;
var secondRandomNumber = Math.floor(Math.random()*6)+1;


//select and set the images to the random numbers
var playerOneDice = document.querySelectorAll('img')[0];
var playerTwoDice = document.querySelectorAll('img')[1];


playerOneDice.setAttribute("src","images/dice"+firstRandomNumber+".jpg" );
playerTwoDice.setAttribute("src","images/dicee"+secondRandomNumber+".jpg" );

  if(firstRandomNumber>secondRandomNumber){
      document.querySelector('h1').innerHTML = playerOne+" Wins!!";
  }
  else if(secondRandomNumber>firstRandomNumber){
    document.querySelector('h1').innerHTML = playerTwo+" Wins!!";
}else{
document.querySelector('h1').innerHTML = "Draw";
}

};



