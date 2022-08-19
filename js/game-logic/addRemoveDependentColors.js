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
    // for (let i = 0; i <= 90; i++) {
    //     let hex = document.getElementById(i);
    //     hex.classList.remove('red');
    //     hex.classList.remove('yellow');
    //     hex.classList.remove('green');
    //     hex.classList.remove('blue');
    // }
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
