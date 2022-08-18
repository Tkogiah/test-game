import * as playerButton from '../js/components/mainButtons.js'
import { Thief, Fighter, Archer } from './classes/PlayerClasses.js'
import {board} from './game-logic/boardCssClassesRows.js'


export let globalState = {
    round: 0,
    players: {
        player1: new Fighter('Fighter'),
        player2: new Archer('Archer'),
        player3: new Thief('Thief')
    }
}



export let boardAudio = new Audio('assets/hexscreen.mp3')
boardAudio.loop = true
// window.onload = (event) => {
//     boardAudio.play();
// };