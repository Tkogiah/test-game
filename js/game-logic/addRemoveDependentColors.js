//// **** STYLES ADDED FROM board.scss ***** //

// *********** FORMERLY highlightHexes ***********
export function addDependentColorToBoard(array, colorString) {
    array.forEach((e) => {
        if(e <=90 ){
            let hexColor = document.getElementById(e)
            hexColor.classList.add(colorString)
            if(hexColor.classList.contains('red') && hexColor.classList.contains('yellow')) {
                hexColor.classList.add('green')
            }  
        }
    })
}

// ********* FORMERLY clearHighlightedHexes ***********
export function removeDependentColorsFromBoard() {
    let hexes = document.querySelectorAll('.hex')
    hexes.forEach(e => {
        e.classList.remove('red')
        e.classList.remove('yellow')
        e.classList.remove('green')
        e.classList.remove('blue')
    })
}

export function addPlayerLocation(player) {
    let location = document.getElementById(player.location)
    location.classList.add('blue')

}
