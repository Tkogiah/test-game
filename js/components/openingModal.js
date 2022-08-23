import { $ } from '../components/quickFunctions.js'
import { globalOrder, globalState } from '../main.js'
import { startRound } from '../game-logic/startGame.js'
import { boardAudio, characterSelect } from './music.js'

export function selectPlayer() {
    characterSelect.play()
    const board = $('hexboard')
    const gameStart = document.createElement('div')
    gameStart.innerHTML = openingModal()
    console.log(gameStart)
    board.appendChild(gameStart)
    const fighter = $('fighter')
    const archer = $('archer')
    const rogue = $('rogue')
    const start = $('start')
    fighter.addEventListener('click', function() {
        globalOrder.push(globalState.players.player1)
        $('start-modal').removeChild($('fighter'))
    })
    archer.addEventListener('click', function() {
        globalOrder.push(globalState.players.player2)
        $('start-modal').removeChild($('archer'))
    })
    rogue.addEventListener('click', function() {
        globalOrder.push(globalState.players.player3)
        $('start-modal').removeChild($('rogue'))
    })
    start.addEventListener('click', function() {
        startRound(globalOrder[0])
        board.removeChild(gameStart)
        characterSelect.pause()
        boardAudio.play()
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
        <div id="start" class="main-button" style="bottom: 15px; right: 15px; background-color: black;">START</div>
    </div>
    `)
}
