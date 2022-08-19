import { addDependentColorToBoard, addPlayerLocation } from "./addRemoveDependentColors.js"
import { indexesOfboardMatrix, boardHexes, boardMatrix } from "./boardIndexes.js"
import { globalState } from "../main.js"

let highlightRangeArray = []
function fillRight(range, row, column) {
    let counter = range*2
    let rows = row
    let columns = column
    let fillArray = []
    while(counter > 0) {
        columns += 1
        if(boardMatrix[rows][columns] != '') {
            highlightRangeArray.push(boardMatrix[rows][columns])
            
        }
        counter = counter -1 
    }
    return fillArray
}
function fillLeft(range, row, column) {
    let counter = range*2
    let rows = row
    let columns = column
    let fillArray = []
    while(counter > 0) {
       
        columns -= 1
        if(boardMatrix[rows][columns] != '') {
            highlightRangeArray.push(boardMatrix[rows][columns])
            
        }
        counter = counter -1 
    }
    return fillArray
}
function fillUp(range, row, column) {
    let counter = range
    let counter2 = range*2
    let rows = row
    let columns = column
    let fillArray = []
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
    return fillArray   
}
function fillDown(range, row, column) {
    let counter = range
    let counter2 = range*2
    let rows = row
    let columns = column
    let fillArray = []
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
    return fillArray
}

//FUNCTION TO HIGHLIGHT AN ARRAY OF LOCATOINS WITH SPECIFIED COLOR

export function fillHighlightRangeArray(player) {
    if(player.attacks < 1) {return}
    if(player.range >= 10) {
       return addDependentColorToBoard(boardHexes(), 'red')   
    } 
    let row = indexesOfboardMatrix[player.location].row
    let column = indexesOfboardMatrix[player.location].column
    addPlayerLocation(player)
    fillRight(player.range, row, column)
    fillLeft(player.range, row, column)
    fillUp(player.range, row, column)
    fillDown(player.range, row, column)
    console.log(highlightRangeArray)

    addDependentColorToBoard(highlightRangeArray, 'red')
    
}