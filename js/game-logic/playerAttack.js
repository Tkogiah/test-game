import { showPlayerAttackRange } from "./rangeAlgorithm.js"

export function addAttack(player) {
    player.attacks += 1
    showPlayerAttackRange(player)
}

// board.forEach( e => {
//     e.addEventListener('click', function() {
//         if(e.classList.contains('red') && e.classList.contains('enemy') && p.playerArray[0].attacks > 0) {
//             if(p.playerArray[0].location >= 1 && p.playerArray[0].location <= 6) {
//                 p.playerArray[0].money +=1
//             }
//             else if(p.playerArray[0].location >= 7 && p.playerArray[0].location <= 18) {
//                 p.playerArray[0].money +=2
//             }
//             else if(p.playerArray[0].location >= 19 && p.playerArray[0].location <= 36) {
//                 p.playerArray[0].money +=3
//             }
//             else if(p.playerArray[0].location >= 37 && p.playerArray[0].location <= 60) {
//                 p.playerArray[0].money +=4
//             }
//             else if(p.playerArray[0].location >= 61 && p.playerArray[0].location <= 90) {
//                 p.playerArray[0].money +=5
//             }
//             else {
//                 p.playerArray[0].money += 0
//             }
           
//             p.takeDamage(e.id)
//             p.playerArray[0].attacks -= 1
//             mr.clearHighlightedHexes()
//             p.displayActivePlayer(0)
//         }
//     })
// })