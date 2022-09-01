//// **** STYLES ADDED FROM board.scss ***** //

// *********** FORMERLY highlightHexes ***********
export function addDependentColorToBoard(array, colorString) {
    array.forEach((e) => {
        if(e <=90 ){
            let hexColor = document.getElementById(e)
            hexColor.classList.add(colorString) 
        }
    })
}

// ********* FORMERLY clearHighlightedHexes ***********
export function removeDependentColorsFromBoard() {
    let hexes = document.querySelectorAll('.hex')
    hexes.forEach(e => {
        e.classList.remove('green')
        e.classList.remove('yellow')
        
        e.classList.remove('purple')
    })
}

export function removePlayerRange() {
    let hexes = document.querySelectorAll('.hex')
    hexes.forEach(e => {
        e.classList.remove('green')
    })
}
export function removeEnemy(player) {
    let location = player.location
    let hexagon = document.getElementById(location)
    hexagon.classList.remove('red')
}

export function addPlayerLocation(player) {
    let location = document.getElementById(player.location)
    location.classList.add('purple')
}
export function addTeammateLocation(globalOrder) {
    let location
    globalOrder.forEach(element => {
        if(element.type === 'player') {
            location = document.getElementById(element.location)
            location.classList.add('blue')
        }
    });
}
