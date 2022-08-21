import {$} from './quickFunctions.js'
import { playerModalHtml } from './playerModalHtml.js'
import { boardAudio, playerAudio } from '../components/music.js'
import { modalDisplay } from './modalDisplay.js'
import { globalState } from '../main.js'
import { handModalActive } from './playerHandModal.js'


export function displayPlayerModal(currentPlayer) {
    playerAudio.play()
    const playerHtml = playerModalHtml(currentPlayer)

    modalDisplay(playerHtml)
    const modal = $('modal')
    modal.classList.add('player-main');

    handModalActive(currentPlayer)

    const exit = $('exit')
    exit.addEventListener('click', function() {
        playerAudio.pause()
        $('hexboard').removeChild(modal)
        boardAudio.play()
    })
}

