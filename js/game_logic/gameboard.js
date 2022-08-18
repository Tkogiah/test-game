import { $ } from "../components/quickFunctions.js";

const board = document.querySelectorAll('.hex');
function ffg() {
    console.log(board)
}
ffg()


board.forEach((element) => {
    if(element.id >= 1 && element.id <= 6) {
        element.classList.add('row-one')
    }
    else if(element.id >= 7 && element.id <= 18) {
        element.classList.add('row-two')
    }
    else if(element.id >= 19 && element.id <= 36) {
        element.classList.add('row-three')
    }
    else if(element.id >= 37 && element.id <= 60) {
        element.classList.add('row-four')
    }
    else if(element.id >= 61 && element.id <= 90) {
        element.classList.add('row-five')
    }
    else {
        element.classList.add('row-zero')
    }
})