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
    array.push(array[0])
    array.shift()
    return array[0]
}