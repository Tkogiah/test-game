import * as player from './playerModal.js'
import * as town from './townModal.js'
import * as enemies from './enemiesModal.js'
import {$} from '../components/quickFunctions.js'
import { globalState } from '../main.js'
import { boardAudio } from '../components/music.js'
import { showPlayerAttackRange } from '../game-logic/rangeAlgorithm.js'
import { showPlayerMovementRange } from '../game-logic/movementAlgorithm.js'
import { removeDependentColorsFromBoard } from '../game-logic/addRemoveDependentColors.js'
import { changeGlobalOrder, startRound } from '../game-logic/startGame.js'

const playerButton = $("player-button")
const enemiesButton = $("enemies-button")
const townButton = $("town-button")
const endTurnButton = $('end')

playerButton.addEventListener('click', function() {
    boardAudio.pause()
    let currentPlayer = globalState.active.globalOrder[0]
    player.displayPlayerModal(currentPlayer)
})

enemiesButton.addEventListener('click', function() {
    enemies.displayEnemiesModal() 
})

townButton.addEventListener('click', function() {
    town.displayTownModal() 
})

endTurnButton.addEventListener('click', function() {
    if(globalState.active.globalOrder[1].type === 'enemy') {
        console.log('enemy turn')
    }

    let currentPlayer = changeGlobalOrder(globalState.active.globalOrder) 
    currentPlayer.discardHand()
    currentPlayer.draw()
    currentPlayer.resetStats()
    removeDependentColorsFromBoard()
    showPlayerMovementRange(currentPlayer)
    showPlayerAttackRange(currentPlayer)
    startRound(currentPlayer)
})
