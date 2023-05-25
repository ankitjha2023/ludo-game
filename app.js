const playerOneDice = document.getElementById('player-one-dice')
const playerTwoDice = document.getElementById('player-two-dice')
const btn = document.getElementById('btn')
const exitBtn = document.getElementById('exit-btn')
const winner = document.getElementById('winner')
const container = document.getElementById('container')
const scoreContainer = document.getElementById('score-container')
const audio = document.getElementById('audio')
let playerOneScore = document.getElementById('player-one-score')
let playerTwoScore = document.getElementById('player-two-score')

let playerOneCounter =0
let playerTwoCounter =0
btn.addEventListener('click',()=>{
    btn.classList.add("clicked");

    // Remove the effect after a short delay (e.g., 500ms)
    setTimeout(function() {
      btn.classList.remove("clicked");
    }, 200);
    audio.play()
    playGame()
    
})

exitBtn.addEventListener('click',()=>{
    container.style.display="none"
    scoreContainer.style.display="block"
    playerOneScore=playerOneCounter
    playerTwoScore=playerTwoCounter

    if(playerOneScore>playerTwoScore){
        winner.innerHTML="Player 1 winner"
    }else if(playerOneScore<playerTwoScore){
        winner.innerHTML="Player 2 winner"
    }else{
        winner.innerHTML="Match Draw"
    }


})
const playGame = ()  =>{
    let playerOneChoice = Math.floor(Math.random()*6)+1
    let playerTwoChoice = Math.floor(Math.random()*6)+1

    let path1 = `images/dice-${playerOneChoice}.png`
    let path2 = `images/dice-${playerTwoChoice}.png`

    if(playerOneChoice>playerTwoChoice){
       
        playerOneCounter++
        playerOneScore.innerHTML=playerOneCounter
    }else if(playerOneChoice<playerTwoChoice){
       
        playerTwoCounter++
        playerTwoScore.innerHTML=playerTwoCounter
    }else{

    }
    
    playerOneDice.setAttribute('src',path1)
    playerTwoDice.setAttribute('src',path2)
}