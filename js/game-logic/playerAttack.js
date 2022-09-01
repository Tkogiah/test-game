import { showPlayerAttackRange } from "./rangeAlgorithm.js"
import { board } from "./boardCssClassesRows.js"

export function addAttack(player) {
    player.attacks += 1
    showPlayerAttackRange(player)

}


//*************************     PUT THIS FUNCTION IN A MORE APPROPRIATE LOCATION    **************************
export function makeEnemiesVulnerable(player) {
    board.forEach( e => {
        e.addEventListener('click', function() {
            if(e.classList.contains('green') && e.classList.contains('red') && player.attacks > 0) {
                if(player.location >= 1 && player.location <= 6) {
                    player.money +=1
                }
                else if(player.location >= 7 && player.location <= 18) {
                    player.money +=2
                }
                else if(player.location >= 19 && player.location <= 36) {
                    player.money +=3
                }
                else if(player.location >= 37 && player.location <= 60) {
                    player.money +=4
                }
                else if(player.location >= 61 && player.location <= 90) {
                    player.money +=5
                }
                else {
                    player.money += 0
                }
                
                // p.takeDamage(e.id)
                
                player.attacks -= 1
                showPlayerAttackRange(player)
                // mr.clearHighlightedHexes()
                // p.displayActivePlayer(0)
                
            }
            
        })
    })
}