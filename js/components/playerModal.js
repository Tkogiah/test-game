import {$} from './quickFunctions.js'
import {globalState} from '../main.js'
import { playerModalHtml } from './playerModalHtml.js'

export function displayPlayerModal() {
    let drawTotal = globalState.players.player1.decks.draw.length
    let discardTotal = globalState.players.player1.decks.discard.length
    let handTotal = globalState.players.player1.decks.hand.length
    let cardTitle, cardDescription
    let playerHtml = playerModalHtml(drawTotal, discardTotal, cardTitle, cardDescription, handTotal)

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


