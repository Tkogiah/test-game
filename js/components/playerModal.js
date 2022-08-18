import {$} from './quickFunctions.js'
import { playerModalHtml } from './playerModalHtml.js'

export function displayPlayerModal(currentPlayer) {
    const playerHtml = playerModalHtml(currentPlayer)

    const container = document.createElement('div')
    container.classList.add('modal-main')
    container.classList.add('player-main')
    container.innerHTML = playerHtml
     
    $('hexboard').appendChild(container)
    let exit = $('exit')
    exit.addEventListener('click', function() {
        $('hexboard').removeChild(container)
    })
}   


