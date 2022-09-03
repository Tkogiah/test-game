import {$} from './quickFunctions.js'
import {globalState} from '../main.js'

export function displayTownModal(player) {
    
    //globalobject.merchant music .play()
    let drawTotal, discardTotal, handTotal, cardDetails
    const container = document.createElement('div')
    container.classList.add('modal-main')
    container.classList.add('town-main')
    document.body.classList.add('modal-opacity')
    container.innerHTML = 
    `
        <div id='town-container' class="row container">
            <div id='merchant-image' class="image-container container"></div>
            <div id="exit" class="exit">
                &times
            </div>
            
            <div id='card-details' class="card-details">
                <h4>${cardDetails}<h4>
                <p>${cardDetails}</p>
            </div>
        </div>
    `     
    $('hexboard').appendChild(container)
    let exit = $('exit')
    exit.addEventListener('click', function() {
        $('hexboard').removeChild(container)
    })
}   


