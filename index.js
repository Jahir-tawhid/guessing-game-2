! "Guessing Game-2"
// Guess a number from 10 to 20
// Generate a random number between 10 to 20
// If the guess number matches random number; then show message won else lost
// Run the game for 5 times
// Show the numbers of won and lost 


let won = 0;
let lost = 0;
for (let i=1; i<=5; i++){
let guessNumber = parseInt(prompt("Enter a number from 10 to 20"));
let randomNumber = Math.floor(Math.random()*11) + 10;

if(guessNumber === randomNumber){
 console.log("You have won");
 won++;
}
else{
 console.log("You have lost. Random number was" + randomNumber );
 lost++;
}
}

document.body.innerHTML = `
Total won: ${won} <br>
Total lost: ${lost}
`;