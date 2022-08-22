import * as playerButton from '../js/components/mainButtons.js'
import { Rogue, Fighter, Archer } from './classes/PlayerClasses.js'
import {board} from './game-logic/boardCssClassesRows.js'
import { $ } from './components/quickFunctions.js'
import { showPlayerMovementRange } from './game-logic/movementAlgorithm.js'
import { showPlayerAttackRange } from './game-logic/rangeAlgorithm.js'

import { animateAttack} from './components/gifAnimations.js'
import { addMovement } from './game-logic/playerMovement.js'
import { startRound } from './game-logic/startGame.js'


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
startRound(globalState.players.player1)


