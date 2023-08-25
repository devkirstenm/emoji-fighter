let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let firstRandomEmoji = Math.floor(Math.random() * fighters.length)
    let secondRandomEmoji = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[firstRandomEmoji] + " vs " + fighters[secondRandomEmoji]
})
