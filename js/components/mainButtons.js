import * as player from './playerModal.js'
import * as town from './townModal.js'
import * as enemies from './enemiesModal.js'
import {$} from '../components/quickFunctions.js'
import { globalState } from '../main.js'
import { boardAudio } from '../components/music.js'

const playerButton = $("player-button")
const enemiesButton = $("enemies-button")
const townButton = $("town-button")
const endTurnButton = $('end')

playerButton.addEventListener('click', function() {
    boardAudio.pause()
    // need to write dynamic function based on turn and not set BELOW to player1 *********
    let currentPlayer = globalState.players.player1 
    // need to write dynamic function based on turn and not set ABOVE to player1 *********
    player.displayPlayerModal(currentPlayer)
})

enemiesButton.addEventListener('click', function() {
    enemies.displayEnemiesModal() 
})

townButton.addEventListener('click', function() {
    town.displayTownModal() 
})

endTurnButton.addEventListener('click', function() {
    // playerArray[0].attacks = 0
    // playerArray[0].movement = 0
    // playerArray[0].money = 0
    // playerArray.push(playerArray[0])
    // playerArray.shift()
    // if(playerArray[0]) {
    //     log(playerArray[0])
    // }
    // displayActivePlayer(0)
    // displayActiveEnemies(enemyArray)
    // determineEndGame(enemyArray)
})
