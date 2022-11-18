const choiceButtons= document.querySelectorAll("[data-choice]")
const finalColumn = document.querySelector("[data-final-column]")
const cpuScoreSpan = document.querySelector("[data-cpu-score]")
const playerScoreSpan = document.querySelector("[data-player-score]")
const CHOICES = [
    {
        name: "rock",
        emoji: "🪨",
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "📃",
        beats: "rock",
    },
    {
        name: "scissors",
        emoji: "✂️",
        beats: "paper"
    }
]



choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener("click", e => {
       const choiceName= choiceButton.dataset.choice
       const choice = CHOICES.find(choice => choice.name === choiceName)
       makechoice(choice)
    })
})

function makechoice(choice){
    const computerchoice = randomchoice()
    const playerWinner = isWinner(choice, computerchoice)
    const cpuWinner = isWinner(computerchoice, choice)
    addchoiceResult(computerchoice,cpuWinner)
    addchoiceResult(choice,playerWinner)
    if (playerWinner) incrementScore(playerScoreSpan)
    if (cpuWinner) incrementScore(cpuScoreSpan)
}
function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addchoiceResult(choice,winner){
    const div = document.createElement("div")
    div.innerText = choice.emoji
    div.classList.add("result-choice")  // Fitur tambahan ,memeperlihat history pilihan sebelumnya
    if(winner) div.classList.add("winner")
    finalColumn.after(div)

}
function isWinner(choice,opponentchoice){
    return choice.beats === opponentchoice.name
}

function randomchoice(){
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}



