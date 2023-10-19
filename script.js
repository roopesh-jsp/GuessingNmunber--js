'use strict';
let secret=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
console.log(secret);
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess)
    {
        document.querySelector('.message').textContent="Enter something! ❌";
    }
    else
    {
        if(guess===secret)
        {
            document.querySelector('.message').textContent="You won 🥳🥳 ";
            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
            document.querySelector('body').style.backgroundColor="green";
            document.querySelector('.number').textContent=secret;
        }
        if(guess!=secret)
        {
            if(score>1){
            document.querySelector('.message').textContent=guess>secret?'you guessed too high':'you guessed too low';
            score--;
            document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent="you lost 🙃🙃"
            }

        }
    }
});
document.querySelector('.again').addEventListener('click',function() {
    score=20;
    secret=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor="#222";


});