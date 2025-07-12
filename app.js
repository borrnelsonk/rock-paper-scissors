let computerScore=0;
let humanScore=0;

function getComputerChoice(){
    let number=Math.random()*10;
    let result=0;
    if (number>0 && number<=3){
        result="Paper";
    }
    else if(number>3 && number<6){
        result="Scissors";
    }
    else{
        result="Rock";
    }
    return result;
}

function getHumanChoice(){
    result=prompt("Choose Paper or Rock or Scissors");
    result=result.trim().toLowerCase();
    result= result.charAt(0).toUpperCase() + result.slice(1);
    return result;

}
function playRound(humanChoice,computerChoice){
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    if(humanChoice===computerChoice){
        console.log("It's a tie!:");
    }
    else if(humanChoice==="Rock"&& computerChoice==="Scissors"||
        humanChoice==="Scissors" && computerChoice==="Paper" ||
        humanChoice==="Paper" && computerChoice==="Rock"){
        console.log("You win!");
        humanScore++;
    }
    else {
        console.log("Computer wins!");
        computerScore++;
    }
console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);  
}
function playGame(){
    for (let i=0;i<=5;i++){
       playRound();
    }
}
playGame();
