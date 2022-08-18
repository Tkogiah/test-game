import { addDependentColorToBoard } from "./addRemoveDependentColors";

export function fillHighlightMovementArray(player) {
    let highlightMovementArray = []
    let beginningPoint = parseInt(player.location)-parseInt(player.movement)
    let endPoint = parseInt(player.location)+parseInt(player.movement);
    highlightMovementArray.push(player.location)
   
    for (let i = beginningPoint; i<= endPoint; i++) {

        if(i >= 0 && i != player.location && i <= endPoint) {
            highlightMovementArray.push(i)
        }    
    }
    //highlightMovementArray.sort((a,b) => a-b)
    addDependentColorToBoard(highlightMovementArray, 'yellow')
    return highlightMovementArray
}

