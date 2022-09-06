import { displayPlayerModal } from './playerModal.js'
import { displayTownModal } from './townModal.js'
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
        globalState.globalOrder[0].music.pause()
        $('hexboard').removeChild(modal)
        boardAudio.play()
    }
    else if(e.code === "KeyP") {openPlayerModal()}
})

enemiesButton.addEventListener('click', function() {
    enemies.displayEnemiesModal() 
})

townButton.addEventListener('click', openTownModal)
document.addEventListener('keydown', e => {
    if( $('modal') && e.code === "KeyM") {
        $('hexboard').removeChild($('modal'))
    }
    else if(e.code === "KeyM" && 
            globalState.globalOrder[0].type === 'player') {openTownModal()}
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

function openTownModal() {
    boardAudio.pause()
    let merchant = globalState.merchant
    displayTownModal(merchant) 
}

function endTurn() {
    nextTurn(globalState)
}