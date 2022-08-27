import * as playerButton from '../js/components/mainButtons.js'
import { Rogue, Fighter, Archer } from './classes/PlayerClasses.js'
import {board} from './game-logic/boardCssClassesRows.js'
import { $ } from './components/quickFunctions.js'
import { showPlayerMovementRange } from './game-logic/movementAlgorithm.js'
import { showPlayerAttackRange } from './game-logic/rangeAlgorithm.js'

import { animateAttack} from './components/gifAnimations.js'
import { addMovement } from './game-logic/playerMovement.js'
import { startRound } from './game-logic/RoundAndTurnControl.js'
import { selectPlayer } from './components/openingModal.js'
import { Behemoth, Demigog, Demon, Dragon, Giant, Goblin, Leviathan, Ogre, Orc, Pleroma } from './classes/EnemyClasses.js'


export const globalState = {
    round: 0,
    players: {
        player0: new Fighter('Fighter'),
        player1: new Archer('Archer'),
        player2: new Rogue('Rogue')
    },
    enemies: {
        enemyOne: new Goblin(),
        enemyTwo: new Goblin(),
        enemyThree: new Goblin(),
        enemyFour: new Goblin(),
        enemyFive: new Goblin(),
        enemySix: new Goblin(),
        enemySeven: new Goblin(),
        enemyEight: new Goblin(),
        enemyNine: new Goblin(),
        enemyTen: new Goblin()
    },
    active: {
        globalOrder: []
    },
    merchant: {
        deck: []
    }
}

// export class GlobalState {
//     constructor(_team) {
//         this.team = _team
//         this.round = 0,
//         players = {
//             player1: new Fighter('Fighter'),
//             player2: new Archer('Archer'),
//             player3: new Rogue('Rogue')
//         },
//         active = {
//             players: [this.player1, this.player2, this.player3],
//             enemies: []
//         },
//         merchant = {
//             deck: []
//         }
//     }
    
// }

// export const globalOrder = []
//*********************  TESTING  *********************
selectPlayer()
// startRound(globalOrder[0])


