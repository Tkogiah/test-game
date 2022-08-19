import * as playerButton from '../js/components/mainButtons.js'
import { Thief, Fighter, Archer } from './classes/PlayerClasses.js'
import {board} from './game-logic/boardCssClassesRows.js'
import { $ } from './components/quickFunctions.js'
import { fillHighlightMovementArray } from './game-logic/movementAlgorithm.js'
import { fillHighlightRangeArray } from './game-logic/rangeAlgorithm.js'
import { playerMovement } from './game-logic/playerMovement.js'
import { animateAttack} from './components/gifAnimations.js'


export let globalState = {
    round: 0,
    players: {
        player1: new Fighter('Fighter'),
        player2: new Archer('Archer'),
        player3: new Thief('Thief')
    },
    active: {
        players: [],
        enemies: []
    },
    merchant: {
        deck: []
    }
}











//*********************JUST A TEST*********************
let image = document.getElementById('player-image')
image.style.backgroundImage = `url(${globalState.players.player1.pictures.idle})`

let attack = $('add-attack')
let move = $('add-movement')
attack.addEventListener('click', function() {
    globalState.players.player1.attacks += 1
    fillHighlightRangeArray(globalState.players.player1)
    animateAttack(globalState.players.player1)
})

move.addEventListener('click', function() {
    globalState.players.player1.movement += globalState.players.player1.speed * 1
    fillHighlightMovementArray(globalState.players.player1)
    playerMovement(globalState.players.player1)
    
})