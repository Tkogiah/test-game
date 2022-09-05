import { $ } from '../components/quickFunctions.js'
import { globalState } from '../main.js'
import { startRound } from '../game-logic/RoundAndTurnControl.js'
import { enemyInitiator } from '../game-logic/enemyInitiator.js'
import { boardAudio, characterSelect } from './music.js'
import { makeEnemiesVulnerable } from '../game-logic/playerAttack.js'

import { merchantInitiator } from '../game-logic/merchantFunctions.js'

export function selectPlayer() {
    characterSelect.play()
    const board = $('hexboard')
    const gameStart = document.createElement('div')
    gameStart.id = 'gameStart'
    gameStart.innerHTML = openingModal()
    
    board.appendChild(gameStart)
    const fighter = $('fighter')
    const archer = $('archer')
    const rogue = $('rogue')
    const start = $('start')
    fighter.addEventListener('click', function() {
        globalState.globalOrder.push(globalState.players.player0)
        $('start-modal').removeChild($('fighter'))
        removeHidden()
    })
    archer.addEventListener('click', function() {
        globalState.globalOrder.push(globalState.players.player1)
        $('start-modal').removeChild($('archer'))
        removeHidden()
    })
    rogue.addEventListener('click', function() {
        globalState.globalOrder.push(globalState.players.player2)
        $('start-modal').removeChild($('rogue'))
        removeHidden()
    })
    start.addEventListener('click', startGame)
    document.addEventListener('keydown', e => {
        if($('gameStart') && e.code == "Enter" && globalState.globalOrder.length > 0) {
            startGame()
            merchantInitiator()
        }
    })

}

function openingModal() {
    return (`
    <div id="start-modal" class="modal-main start column">
        <div class="center" style="width: 100%; height: 50px; color: white; font-size: 55px; margin-top: 50px">
            <h3> CHOOSE YOUR CHARACTER </h3>
        </div>
        <div id="fighter" class="container image-container-start fighter"><p>FIGHTER</p></div>
        <div id="archer" class="container image-container-start archer"><p>ARCHER</p></div>
        <div id="rogue" class="container image-container-start rogue"><p>ROGUE</p></div>
        <div id="start" class="main-button hidden" style="bottom: 15px; right: 15px; background-color: black;">START</div>
    </div>
    `)
}

function removeHidden() {
    $('start').classList.remove('hidden')
}
function startGame() {
    enemyInitiator(globalState)
    startRound(globalState.globalOrder[0])
    $('hexboard').removeChild($('gameStart'))
    makeEnemiesVulnerable()
    characterSelect.pause()
    boardAudio.play()
}
