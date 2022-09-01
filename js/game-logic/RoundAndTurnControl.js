import { addPlayerLocation } from "./addRemoveDependentColors.js"
import { removeDependentColorsFromBoard } from '../game-logic/addRemoveDependentColors.js'
import { showPlayerAttackRange } from '../game-logic/rangeAlgorithm.js'
import { showPlayerMovementRange } from '../game-logic/movementAlgorithm.js'
import { Orc } from "../classes/EnemyClasses.js"
import { makeEnemiesVulnerable } from "./playerAttack.js"

export function startRound(player) {
    let playerImage = document.getElementById('player-image')
    let enemyImage = document.getElementById('enemy-image')
    let endTurnButton = document.getElementById('end')
    if(player.type === 'player') {
        endTurnButton.classList.remove('hidden')
        enemyImage.classList.add('hidden')
        playerImage.classList.remove('hidden')
        player.shuffle(player.decks.draw)
        player.draw()
        addPlayerLocation(player)
        playerImage.style.backgroundImage = `url(${player.pictures.idle})`
    }
    else if(player.type === 'enemy') {
        endTurnButton.classList.add('hidden')
        playerImage.classList.add('hidden')
        enemyImage.classList.remove('hidden')
        enemyImage.style.backgroundImage = `url(${player.picture})`
    }
}
export function changeGlobalOrder(array) {
        array.push(array[0])
        array.shift()
        return array[0]
}


//*******************FIGURE OUT HOW TO REFACTOR THESE LATER ********
export function enemyInitiator(globalState) {
    let array = globalState.active.globalOrder
    let e = globalState.enemies
    array.push(e.enemyOne)
    array.push(e.enemyTwo)
    array.push(e.enemyThree)
    array.push(e.enemyFour)
    array.push(e.enemyFive)
    array.push(e.enemySix)
    array.push(e.enemySeven)
    array.push(e.enemyEight)
    array.push(e.enemyNine)
    array.push(e.enemyTen)
}
export function enemyRoundChange(enemyClass) {
    let newEnemy = new enemyClass

    let enemyOne = newEnemy
    let enemyTwo = newEnemy
    let enemyThree = newEnemy
    let enemyFour = newEnemy
    let enemyFive = newEnemy
    let enemySix = newEnemy
    let enemySeven = newEnemy
    let enemyEight = newEnemy
    let enemyNine = newEnemy
    let enemyTen = newEnemy
}
//****************************************** */



export function playerTurn(player) {
    player.discardHand()
    player.draw()
    player.resetStats()
    removeDependentColorsFromBoard()
    showPlayerMovementRange(player)
    showPlayerAttackRange(player)
    makeEnemiesVulnerable(player)
    startRound(player)
}
export function enemyTurn(player) {
        player.advanceForward()
        startRound(player)
}
export function automateEnemyTurn(globalState) {
    let currentPlayer = changeGlobalOrder(globalState.active.globalOrder)
    
    if(currentPlayer.type === 'player') {
        playerTurn(currentPlayer)
    }
    else if(currentPlayer.type === 'enemy') {
        enemyTurn(currentPlayer)
        console.log(globalState.active.globalOrder[0], currentPlayer.location)
        setTimeout(function() {
              
            automateEnemyTurn(globalState)
        }, 250)       
    } 
}
