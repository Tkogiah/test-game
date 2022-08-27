import { addPlayerLocation } from "./addRemoveDependentColors.js"
import { removeDependentColorsFromBoard } from '../game-logic/addRemoveDependentColors.js'
import { showPlayerAttackRange } from '../game-logic/rangeAlgorithm.js'
import { showPlayerMovementRange } from '../game-logic/movementAlgorithm.js'
import { Orc } from "../classes/EnemyClasses.js"

export function startRound(player) {
    player.shuffle(player.decks.draw)
    player.draw()
    addPlayerLocation(player)
    let image = document.getElementById('player-image')
    image.style.backgroundImage = `url(${player.pictures.idle})`
}
export function changeGlobalOrder(array) {
        array.push(array[0])
        array.shift()
        return array[0]
}

//FIGURE OUT HOW TO REFACTOR THESE LATER ********
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
export function enemyRoundChange(enemyType) {
    let newEnemy = new enemyType

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
    //makeEnemiesVulnerable(player) WRITE THIS
    startRound(player)
}
export function enemyTurn(globalOrder) {
        
        globalOrder[0].advanceForward()
    

}
