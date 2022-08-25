import { addPlayerLocation } from "./addRemoveDependentColors.js"
//array that holds turn order

export function startRound(player) {
    player.shuffle(player.decks.draw)
    player.draw()
    addPlayerLocation(player)
    let image = document.getElementById('player-image')
    image.style.backgroundImage = `url(${player.pictures.idle})`
}
export function changeGlobalOrder(array) {
    if(array[1].type === 'enemy') {
        return array[0]
    }
    else if(array[1].type === 'player') {
        array.push(array[0])
        array.shift()
        return array[0]
    }
}
export function enemyInitiator(globalState) {
    let round = globalState.round
    let enemy = globalState.enemies[round]
    let enemyArray = []
    for(let i = 0; i < 10; i++) {
        enemyArray.push(enemy)
    }
    return enemyArray
}
