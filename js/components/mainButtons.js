import * as player from './playerModal.js'
import * as town from './townModal.js'
import * as enemies from './enemiesModal.js'
import {$} from '../components/quickFunctions.js'


//**** 3 MODAL BUTTONS ON THE MAIN PAGE ****//


//PLAYER BUTTON
export const playerButton = $("player-button")

playerButton.addEventListener('click', function() {
    player.displayPlayerModal()

})

//ENEMIES BUTTON
const enemiesButton = $("enemies-button")

enemiesButton.addEventListener('click', function() {
    console.log('write enemies modal')
    enemies.displayEnemiesModal() 
})

//MERCHANT BUTTON
const townButton = $("town-button")
townButton.addEventListener('click', function() {
    town.displayTownModal() 
})
