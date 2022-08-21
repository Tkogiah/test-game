import * as playerButton from '../js/components/mainButtons.js'
import { Rogue, Fighter, Archer } from './classes/PlayerClasses.js'
import {board} from './game-logic/boardCssClassesRows.js'
import { $ } from './components/quickFunctions.js'
import { showPlayerMovementRange } from './game-logic/movementAlgorithm.js'
import { showPlayerAttackRange } from './game-logic/rangeAlgorithm.js'

import { animateAttack} from './components/gifAnimations.js'
import { addMovement } from './game-logic/playerMovement.js'


export let globalState = {
    round: 0,
    players: {
        player1: new Fighter('Fighter'),
        player2: new Archer('Archer'),
        player3: new Rogue('Rogue')
    },
    active: {
        players: [],
        enemies: []
    },
    merchant: {
        deck: []
    }
}


//*********************  TESTING  *********************


//TODO add this to whatever logic loads in the current player
let image = document.getElementById('player-image')
image.style.backgroundImage = `url(${globalState.players.player1.pictures.idle})`
//END

//TODO once this is working via the deck remove this
let attack = $('add-attack')
let move = $('add-movement')
attack.addEventListener('click', function() {
    addAttack(globalState.players.player1)
})
move.addEventListener('click', function() {
    addMovement(globalState.players.player1)
})
function addAttack(player) {
    player.attacks += 1
    showPlayerAttackRange(player)
    animateAttack(player)
}

//END