import { showPlayerAttackRange } from "./rangeAlgorithm.js"
import { board } from "./boardCssClassesRows.js"
import { Money } from "../classes/Cards.js"
import { animateAttack } from "../components/gifAnimations.js"
import { globalState } from "../main.js"

//*************************     PUT THESE FUNCTIONS IN A MORE APPROPRIATE LOCATION    

export function addAttack(player) {
    player.attacks += 1
    showPlayerAttackRange(player)
}

export function makeEnemiesVulnerable() {
    resetBoard(board)
    board.forEach( e => {
        e.addEventListener('click', function() {
            let player = globalState.globalOrder[0]
            if(e.classList.contains('green') && e.classList.contains('red') && player.attacks > 0) {
                if(player.location >= 1 && player.location <= 6) {
                    player.decks.discard.push(new Money(1))
                }
                else if(player.location >= 7 && player.location <= 18) {
                    player.decks.discard.push(new Money(2))
                }
                else if(player.location >= 19 && player.location <= 36) {
                    player.decks.discard.push(new Money(3))
                }
                else if(player.location >= 37 && player.location <= 60) {
                    player.decks.discard.push(new Money(4))
                }
                else if(player.location >= 61 && player.location <= 90) {
                    player.decks.discard.push(new Money(5))
                }
                else {
                    player.money += 0
                }
                let id = Number(e.id)
                enemyTakeDamage(id, player)
                animateAttack(player)
                player.attacks -= 1
                showPlayerAttackRange(player)
                console.log(globalState.globalOrder)
                // mr.clearHighlightedHexes()
                // p.displayActivePlayer(0)
                
            }
        })
    })
}

function enemyTakeDamage(id, player){
    let globalOrder = globalState.globalOrder
    let count = 0
    
    for(let i = 0; i < globalOrder.length; i++) {
        if(globalOrder[i].location === id && globalOrder[i].type === 'enemy') {
            count += 1
        }
    }
    if(count === 1) {
        for(let i = 0; i < globalOrder.length; i++) {
            if(globalOrder[i].location === id && globalOrder[i].type === 'enemy') {
                globalOrder[i].takeDamage(i, player.damage*player.damageModifier)
            }
        }
    }
    else if(count > 1) {
        console.log(count)
        console.log('more than one enemy is here')
    }
    
}

function resetBoard(board){
    board.forEach( e => {
        e.removeEventListener('click', function(){})
    })
}