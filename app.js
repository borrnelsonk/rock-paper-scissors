
function getComputerChoice(){
    let number=Math.random()*10;
    let result=0;
    if (number>0 && number<=3){
        result="Paper";
    }
    else if(number>3 && number<6){
        result="Scissor";
    }
    else{
        result="Rock";
    }
    return result;
}