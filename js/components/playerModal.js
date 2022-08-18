import {$} from './quickFunctions.js'
import { playerModalHtml } from './playerModalHtml.js'
import { boardAudio } from '../main.js'

export function displayPlayerModal(currentPlayer) {
    let playerAudio = new Audio(currentPlayer.music)
    playerAudio.loop = true
    playerAudio.play()

    const playerHtml = playerModalHtml(currentPlayer)

    modalDisplay(playerHtml)
    
    let exit = $('exit')
    exit.addEventListener('click', function() {
        playerAudio.pause()
        $('hexboard').removeChild(container)
        boardAudio.play()
    })
}
export function modalDisplay(playerHtml) {
    const container = document.createElement('div')
    container.classList.add('modal-main')
    container.classList.add('player-main')
    container.innerHTML = playerHtml
    document.getElementById('hexboard').appendChild(container)
}   


