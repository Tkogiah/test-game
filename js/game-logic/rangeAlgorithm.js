import { addDependentColorToBoard, addPlayerLocation, removePlayerRange } from "./addRemoveDependentColors.js"
import { indexesOfboardMatrix, boardHexes, boardMatrix } from "./boardIndexes.js"


// *********THIS CODE NEEDS TO BE REFACTORED TO BE MORE FUNCTIONAL********

let highlightRangeArray = []
function fillRight(range, row, column) {
    let counter = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
        columns += 1
        if(boardMatrix[rows][columns] != '') {
            highlightRangeArray.push(boardMatrix[rows][columns])
            
        }
        counter = counter -1 
    }
}
function fillLeft(range, row, column) {
    let counter = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
       
        columns -= 1
        if(boardMatrix[rows][columns] != '') {
            highlightRangeArray.push(boardMatrix[rows][columns])
        }
        counter = counter -1 
    }
}
function fillUp(range, row, column) {
    let counter = range
    let counter2 = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
        rows -= 1
        counter2 = counter2 - 1
        fillRight(counter2/2, rows, columns)
        fillLeft(counter2/2, rows, columns)
        if(boardMatrix[rows][columns] != '') {
            highlightRangeArray.push(boardMatrix[rows][columns])   
        }
        counter = counter -1 
    } 
}
function fillDown(range, row, column) {
    let counter = range
    let counter2 = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
        rows += 1
        counter2 = counter2 - 1
        fillRight(counter2/2, rows, columns)
        fillLeft(counter2/2, rows, columns)
        if(boardMatrix[rows][columns] != '') {
            highlightRangeArray.push(boardMatrix[rows][columns])   
        }
        counter = counter -1 
    }
}

//FUNCTION TO HIGHLIGHT AN ARRAY OF LOCATOINS WITH SPECIFIED COLOR

export function showPlayerAttackRange(player) {
    if(player.attacks < 1) {
        removePlayerRange()
        return
    }
    if(player.range >= 10) {
       addDependentColorToBoard(boardHexes(), 'green') 
       return  
    }
    highlightRangeArray = []
    let row = indexesOfboardMatrix[player.location].row
    let column = indexesOfboardMatrix[player.location].column
    let range = Number(player.range + player.rangeModifier)
    addPlayerLocation(player)
    fillRight(range, row, column)
    fillLeft(range, row, column)
    fillUp(range, row, column)
    fillDown(range, row, column)
    addDependentColorToBoard(highlightRangeArray, 'green')
    
} 