import {$} from './quickFunctions.js'
import {globalState} from '../main.js'
import { modalDisplay } from './modalDisplay.js'

export function displayTownModal(player) {
    
    //globalobject.town music .play()
    const townHtml = townModalHtml(player)

    //modalDisplay(townHtml)
    // const modal = $('modal')
    // modal.classList.add('town-main')

    //
    const exit = $('exit')
    exit.addEventListener('click', function() {
        currentPlayer.music.pause()
        $('hexboard').removeChild(modal)
        boardAudio.play()
    })
}   


