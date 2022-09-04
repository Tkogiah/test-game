import {$} from './quickFunctions.js'
import { playerModalHtml } from './playerModalHtml.js'
import { boardAudio} from '../components/music.js'
import { modalDisplay } from './modalDisplay.js'
import { handModalActive } from './playerHandModal.js'


export function displayPlayerModal(currentPlayer) {
    
    currentPlayer.music.play()
    const playerHtml = playerModalHtml(currentPlayer)

    modalDisplay(playerHtml)
    const modal = $('modal')
    modal.classList.add('player-main');

    handModalActive(currentPlayer)

    const exit = $('exit')
    exit.addEventListener('click', function() {
        currentPlayer.music.pause()
        $('hexboard').removeChild(modal)
        boardAudio.play()
    })
}

