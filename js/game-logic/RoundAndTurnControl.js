import { addPlayerLocation, addTeammateLocation } from "./addRemoveDependentColors.js"
import { removeDependentColorsFromBoard } from '../game-logic/addRemoveDependentColors.js'
import { showPlayerAttackRange } from '../game-logic/rangeAlgorithm.js'
import { showPlayerMovementRange } from '../game-logic/movementAlgorithm.js'
import { addAttack, makeEnemiesVulnerable } from "./playerAttack.js"
import { globalState } from "../main.js"
import { $ } from "../components/quickFunctions.js"
import { addMovement } from "./playerMovement.js"

export function startRound(player) {
    let playerImage = document.getElementById('player-image')
    let enemyImage = document.getElementById('enemy-image')
    let endTurnButton = document.getElementById('end')
    addTeammateLocation(globalState.globalOrder)
    if(player.type === 'player') {
        endTurnButton.classList.remove('hidden')
        enemyImage.classList.add('hidden')
        playerImage.classList.remove('hidden')
        player.shuffle(player.decks.draw)
        player.draw()
        addPlayerLocation(player)
        addAttack(player)
        addMovement(player)
        
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

export function nextTurn(globalState) {
    let player = globalState.globalOrder[0]
    if(player.type ==='player') {
        player.discardHand()
        player.draw()
        player.resetStats()
    }
    let currentPlayer = changeGlobalOrder(globalState.globalOrder)
    if(currentPlayer.type === 'player') {
        currentPlayer.advanceRound(globalState.globalOrder)
        playerTurn(currentPlayer)
    }
    else if(currentPlayer.type === 'enemy') {
        enemyTurn(currentPlayer)
        setTimeout(function() {  
            nextTurn(globalState)
        }, 250)       
    } 
}

function playerTurn(player) {
    $('enemies-button').classList.add('hidden')
    $('player-button').classList.remove('hidden')
    removeDependentColorsFromBoard()
    showPlayerMovementRange(player)
    showPlayerAttackRange(player)
    addTeammateLocation(globalState.globalOrder)
    startRound(player)
}
function enemyTurn(player) {
    $('enemies-button').classList.remove('hidden')
    $('player-button').classList.add('hidden')
    $('town-button').classList.add('hidden')
    removeDependentColorsFromBoard()
    player.advanceForward()
    startRound(player)
}
