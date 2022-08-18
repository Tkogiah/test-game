import * as playerButton from '../js/components/mainButtons.js'
import { Thief, Fighter, Archer } from './classes/PlayerClasses.js'

export let globalState = {
    round: 0.0,
    players: {
        player1: new Fighter('Fighter'),
        player2: new Archer('Archer'),
        player3: new Thief('Thief')
    }
}

function start() {
    return globalState
}
start()