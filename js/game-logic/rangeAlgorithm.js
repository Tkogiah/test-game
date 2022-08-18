import { addDependentColorToBoard } from "./addRemoveDependentColors.js"
import { indexesOfboardMatrix, boardHexes, boardMatrix } from "./boardIndexes.js"
import { globalState } from "../main.js"


export function fillHighlightRangeArray(player) {
    if(player.attacks < 1) {return}
    if(player.range >= 10) {
       return addDependentColorToBoard(boardHexes(), 'red')   
    } 
    
    addPlayerLocation(player)
    fillRight(player.range, indexesOfboardMatrix[player.location])
    fillLeft(player.range, indexesOfboardMatrix[player.location])
    fillUp(player.range, indexesOfboardMatrix[player.location])
    fillDown(player.range, indexesOfboardMatrix[player.location])


}

//FUNCTIONS THAT TAKE A LOCATION AND RANGE AND THEN DETERMINE WHICH LOCATIONS SHOULD 
//BE PUSHED INTO  highlightRangeArray 
function fillRight(range, matrixLocation) {
    let fillArray = []
    let counter = range*2
    let rows = matrixLocation.row
    let columns = matrixLocation.column
    while(counter > 0) {
        columns += 1
        if(boardMatrix[rows][columns] != '') {
            fillArray.push(boardMatrix[rows][columns])
            
        }
        counter = counter -1 
    }
    addDependentColorToBoard(fillArray, 'red')
}
function fillLeft(range, matrixLocation) {
    let fillArray = []
    let counter = range*2
    let rows = matrixLocation.row
    let columns = matrixLocation.column
    while(counter > 0) { 
        columns -= 1
        if(boardMatrix[rows][columns] != '') {
            fillArray.push(boardMatrix[rows][columns])
            
        }
        counter = counter -1 
    }
    addDependentColorToBoard(fillArray, 'red')
}
function fillUp(range, matrixLocation) {
    let fillArray = []
    let counter = range
    let counter2 = range*2
    let rows = matrixLocation.row
    let columns = matrixLocation.column
    while(counter > 0) {
        rows -= 1
        counter2 = counter2 - 1
        fillRight(counter2/2, matrixLocation)
        fillLeft(counter2/2, matrixLocation)
        if(boardMatrix[rows][columns] != '') {
            fillArray.push(boardMatrix[rows][columns])   
        }
        counter = counter -1 
    }
    addDependentColorToBoard(fillArray, 'red')   
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
