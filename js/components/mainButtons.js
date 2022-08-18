import * as player from './playerModal.js'
import * as town from './townModal.js'
import * as enemies from './enemiesModal.js'
import {$} from '../components/quickFunctions.js'
import { globalState } from '../main.js'
import { boardAudio } from '../main.js'

const playerButton = $("player-button")
const enemiesButton = $("enemies-button")
const townButton = $("town-button")

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
