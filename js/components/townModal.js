import {$} from './quickFunctions.js'
import {globalState} from '../main.js'
import { modalDisplay } from './modalDisplay.js'
import { boardAudio} from '../components/music.js'
import { townModalHtml } from './townModalHtml.js'

export function displayTownModal(merchant) {
    
    //globalobject.town music .play()
    const townHtml = townModalHtml(merchant)

    modalDisplay(townHtml)
    const modal = $('modal')
    modal.classList.add('town-main')

    
    const exit = $('exit')
    exit.addEventListener('click', function() {
        //globalobject.town music .pause()
        $('hexboard').removeChild(modal)
        boardAudio.play()
    })
}   


