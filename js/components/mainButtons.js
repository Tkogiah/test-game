import * as player from './playerModal.js'
import * as town from './townModal.js'
import * as enemies from './enemiesModal.js'
import {$} from '../components/quickFunctions.js'
import { globalState } from '../main.js'


//**** 3 MODAL BUTTONS ON THE MAIN PAGE ****//

//PLAYER BUTTON
export const playerButton = $("player-button")

playerButton.addEventListener('click', function() {
    // need to write dynamic function based on turn and not set BELOW to player1 *********
    let currentPlayer = globalState.players.player1 
    // need to write dynamic function based on turn and not set ABOVE to player1 *********
    
    player.displayPlayerModal(currentPlayer)
})

//ENEMIES BUTTON
const enemiesButton = $("enemies-button")

enemiesButton.addEventListener('click', function() {
    enemies.displayEnemiesModal() 
})

//MERCHANT BUTTON
const townButton = $("town-button")
townButton.addEventListener('click', function() {
    town.displayTownModal() 
})
