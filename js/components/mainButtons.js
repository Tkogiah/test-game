import { displayPlayerModal } from './playerModal.js'
import * as town from './townModal.js'
import * as enemies from './enemiesModal.js'
import {$} from '../components/quickFunctions.js'
import { globalState } from '../main.js'
import { boardAudio } from '../components/music.js'
import { nextTurn } from '../game-logic/RoundAndTurnControl.js'

const playerButton = $("player-button")
const enemiesButton = $("enemies-button")
const townButton = $("town-button")
const endTurnButton = $('end')


playerButton.addEventListener('click', openPlayerModal)
document.addEventListener('keydown', e => {
    if( $('modal') && e.code === "KeyP") {
        $('hexboard').removeChild($('modal'))
    }
    else if(e.code === "KeyP") {openPlayerModal()}
})
// onkeydown = (e) => { 
//     if( $('modal') && e.code === "KeyP") {
//         $('hexboard').removeChild($('modal'))
//     }
//     else if(e.code === "KeyP") {openPlayerModal()}
    
// }


enemiesButton.addEventListener('click', function() {
    enemies.displayEnemiesModal() 
})

townButton.addEventListener('click', function() {
    town.displayTownModal() 
})

endTurnButton.addEventListener('click', endTurn)
document.addEventListener("keydown", e => {
    if(e.code === "Space" && !$('modal') && !$('gameStart')) {
        endTurn()
    }
})


function openPlayerModal() {
    boardAudio.pause()
    let currentPlayer = globalState.globalOrder[0]
    displayPlayerModal(currentPlayer)
}

function endTurn() {
    nextTurn(globalState)
}