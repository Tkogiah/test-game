import * as playerButton from '../js/components/mainButtons.js'
import { Rogue, Fighter, Archer } from './classes/PlayerClasses.js'
import { MultiTask, Attack, Merchant, Movement, SecondWind, Action, TenFootPole, BootsOfSpeed } from './classes/Cards.js'
import { selectPlayer } from './components/openingModal.js'



export const globalState = {
    round: 0,
    players: {
        player0: new Fighter('Fighter'),
        player1: new Archer('Archer'),
        player2: new Rogue('Rogue')
    },
    enemies: {
        
    },
    globalOrder: [],
    merchant: new Merchant(),
    cards: [
        new MultiTask(),
        new Action(),
        new Attack(),
        new Movement(),
        new SecondWind(),
        new MultiTask(),
        new TenFootPole(),
        new BootsOfSpeed()
    ]
}

//*********************  TESTING  *********************
selectPlayer()
// startRound(globalOrder[0])


