import {showPlayerMovementRange} from './movementAlgorithm.js'
import { animateRun } from '../components/gifAnimations.js';
import { showPlayerAttackRange } from './rangeAlgorithm.js';
import { removeDependentColorsFromBoard } from './addRemoveDependentColors.js';

export function playerMovement(player) {
    let boardlocations = document.querySelectorAll('.hex');
    boardlocations.forEach(e => {
        e.addEventListener('click', function() {
            if(e.classList.contains('yellow') 
            && !e.classList.contains('enemy') 
            && player.movement > 0) {
                player.movement -= Math.abs(player.location - e.id)
                player.location = e.id
                animateRun(player)
                removeDependentColorsFromBoard()
                showPlayerMovementRange(player)
                showPlayerAttackRange(player)
            }
            
        })
    })
}


