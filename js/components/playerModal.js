import {$} from './quickFunctions.js'
import { playerModalHtml } from './playerModalHtml.js'
import { boardAudio } from '../main.js'
import { modalDisplay } from './modalDisplay.js'

export function displayPlayerModal(currentPlayer) {
    let playerAudio = new Audio(currentPlayer.music)
    playerAudio.loop = true
    playerAudio.play()

    const playerHtml = playerModalHtml(currentPlayer)

    modalDisplay(playerHtml)
    let modal = $('modal')
    modal.classList.add('player-main');

    let exit = $('exit')
    exit.addEventListener('click', function() {
        playerAudio.pause()
        $('hexboard').removeChild(modal)
        boardAudio.play()
    })
}

