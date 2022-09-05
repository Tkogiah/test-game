import {$} from './quickFunctions.js'
import {globalState} from '../main.js'
import { modalDisplay } from './modalDisplay.js'
import { boardAudio, TownAudio} from '../components/music.js'
import { townModalHtml } from './townModalHtml.js'
import { activatePurchase } from '../game-logic/merchantFunctions.js'

export function displayTownModal(merchant) {
    
    TownAudio.play()
    const townHtml = townModalHtml(merchant)

    modalDisplay(townHtml)
    const modal = $('modal')
    modal.classList.add('town-main')

    activatePurchase(merchant)

    const exit = $('exit')
    exit.addEventListener('click', function() {
        TownAudio.pause()
        $('hexboard').removeChild(modal)
        boardAudio.play()
    })
}   


