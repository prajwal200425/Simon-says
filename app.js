let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");
let btn = ["red","green","blue", "yellow"];



function startGame() {
    if (!started) {
        console.log("Game is started");
        started = true;
        LevelUp();
    }
}

document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);

// function LevelUp() {
//     // Your LevelUp function logic
//     console.log("Leveling up!");
// }


// document.addEventListener("keypress" , function() {
//     if(started == false){
//         console.log("game is started");
//         started = true;
//         LevelUp()
//     }
// });

function flashBtn(button){
    button.classList.add("flash");
    setTimeout(function(){
        button.classList.remove("flash");
    },250);
}

function userflash(button){
    button.classList.add("userflash");
    setTimeout(function(){
        button.classList.remove("userflash");
    },250);
} 

function LevelUp(){

    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    h4.innerText= "";
    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btn[ranIdx];
    let randBtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);
    // console.log(gameSeq);

    //random flash
    flashBtn(randBtn);

}

function checkAns(idx){
    // console.log("current level",level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(LevelUp,500);
        }
    }else{
        h2.innerHTML=`Game Over ! Your score was <b>${level}</b> .<br> Enter any key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
    for(bt of allBtns){
        bt.addEventListener("click",btnPress);
    }


    function reset(){
        started = false;
        userSeq = [];
        gameSeq = [];
        level = 0;
    }