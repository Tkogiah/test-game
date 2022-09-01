import {showPlayerMovementRange} from './movementAlgorithm.js'
import { animateRun } from '../components/gifAnimations.js';
import { showPlayerAttackRange } from './rangeAlgorithm.js';
import { removeDependentColorsFromBoard } from './addRemoveDependentColors.js';
import { addPlayerLocation } from './addRemoveDependentColors.js';



export function addMovement(player) {
    player.movement += player.speed * 1
    showPlayerMovementRange(player)
    playerMovement(player)
    addPlayerLocation(player)
}

/*
******************** 

TODO fix movememnt function so that if active player moves into hex with teammate it doesn't remove their blue hex color on the board.

********************
*/

function playerMovement(player) {
    let boardlocations = document.querySelectorAll('.hex');
    boardlocations.forEach(e => {
        e.addEventListener('click', function() {
            if(e.classList.contains('yellow') 
            && !e.classList.contains('enemy') 
            && player.movement > 0) {
                document.getElementById(player.location).classList.remove('blue')
                player.movement -= Math.abs(player.location - e.id)
                player.location = e.id
                animateRun(player)
                removeDependentColorsFromBoard()
                showPlayerMovementRange(player)
                showPlayerAttackRange(player)
                addPlayerLocation(player)
                
            }
            
        })
    })
}


