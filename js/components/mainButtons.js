import * as player from './modals/playerModal.js'
import {$} from './quickFunctions.js'


//**** 3 MODAL BUTTONS ON THE MAIN PAGE ****//


//PLAYER BUTTON
export const playerButton = $("player-button")

playerButton.addEventListener('click', function() {
    console.log('write player modal')
    player.displayPlayerModal()

})

//ENEMIES BUTTON
const enemiesButton = $("enemies-button")

enemiesButton.addEventListener('click', function() {
    console.log('write enemies modal')
    //enemies.displayEnemiesModal() 
})

//MERCHANT BUTTON
const townButton = $("town-button")
townButton.addEventListener('click', function() {
    console.log('write town modal')
    //castle.displayCastleModal() 
})
