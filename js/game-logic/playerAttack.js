import { showPlayerAttackRange } from "./rangeAlgorithm.js"
import { board } from "./boardCssClassesRows.js"
import { Crystal } from "../classes/Cards.js"
import { animateAttack } from "../components/gifAnimations.js"
import { globalState } from "../main.js"
import { $ } from "../components/quickFunctions.js"

//*************************     PUT THESE FUNCTIONS IN A MORE APPROPRIATE LOCATION    

export function addAttack(player) {
    player.attacks += 1
    showPlayerAttackRange(player)
}

export function makeEnemiesVulnerable() {
    board.forEach( e => {
        e.addEventListener('click', function() {
            let player = globalState.globalOrder[0]
            if(e.classList.contains('green') && e.classList.contains('red') && player.attacks > 0) {
                if(player.location >= 1 && player.location <= 6) {
                    player.decks.discard.push(new Crystal(1))
                }
                else if(player.location >= 7 && player.location <= 18) {
                    player.decks.discard.push(new Crystal(2))
                }
                else if(player.location >= 19 && player.location <= 36) {
                    player.decks.discard.push(new Crystal(3))
                }
                else if(player.location >= 37 && player.location <= 60) {
                    player.decks.discard.push(new Crystal(4))
                }
                else if(player.location >= 61 && player.location <= 90) {
                    player.decks.discard.push(new Crystal(5))
                }
                else {
                    player.coins += 0
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
    if(count > 1) {
        multipleEnemiesOnHex(id, player)
    }
    else if(count === 1) {
        for(let i = 0; i < globalOrder.length; i++) {
            if(globalOrder[i].location === id && globalOrder[i].type === 'enemy') {
                globalOrder[i].takeDamage(i, player.damage*player.damageModifier)
            }
        }
    }
    
}

function multipleEnemiesOnHex(id, player) {
    let globalOrder = globalState.globalOrder
    let container = document.createElement('div')
    container.classList.add('container')
    container.classList.add('column')
    container.classList.add('multiple-enemies-container')
    $('hexboard').appendChild(container)
    for(let i = 0; i < globalOrder.length; i++) {
        if(globalOrder[i].location === id && globalOrder[i].type === 'enemy'){
            let enemy = document.createElement('div')
            enemy.classList.add('main-button')
            enemy.classList.add('multiple-enemies')
            enemy.innerText = `${globalOrder[i].name} ${globalOrder[i].health}`
            container.appendChild(enemy)
            enemy.addEventListener('click', function() {
                globalOrder[i].takeDamage(i, player.damage*player.damageModifier)
                $('hexboard').removeChild(container)
            })
        }
    }
}