
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