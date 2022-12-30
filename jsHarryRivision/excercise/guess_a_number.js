let randomNumber = Math.floor(Math.random() * 100 + 1);
// let randomNumber = 5; // testing
// console.log(randomNumber);

score = 100;
let userGuessNumber;

do{
  userGuessNumber = prompt("Guess the number: ");
  
  if(userGuessNumber != randomNumber) 
  {
      (userGuessNumber > randomNumber) ? console.log("Guess lowest") : console.log("Guess highest");
  }
  
  score--;
  
} while(userGuessNumber != randomNumber);

console.log("Woah correct guess at score of: " + score);