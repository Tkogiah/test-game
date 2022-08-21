import {$} from './quickFunctions.js'
import {globalState} from '../main.js'

export function displayEnemiesModal() {
    let drawTotal
    let discardTotal, handTotal, cardDetails
    const container = document.createElement('div')
    container.classList.add('modal-main')
    container.classList.add('enemies-main')
    document.body.classList.add('modal-opacity')
    container.innerHTML = 
    `
        <div id='enemies-container' class="row container">
            <div id='player-image' class="image-container container"></div>
            <div id="exit" class="exit">
                &times
            </div>
            <div id='draw-deck' class="card draw-pile column">
                <div>
                    <h3>DRAW</h3>
                    <h3>PILE</h3>
                </div>
                <h3>${drawTotal}</h3>
            </div>
            
            <div id='discard-deck' class="card discard-pile column">
                <div>
                    <h3>DISCARD</h3>
                    <h3>PILE</h3>
                </div>
                <h3>${discardTotal}</h3>
            </div>

            <div id='card-details' class="card-details">
                <h4>${cardDetails}<h4>
                <p>${cardDetails}</p>
            </div>

            <div id='hand-deck' 
            class="card hand-pile column float-right">
                <h3>HAND</h3>
                <h3>${handTotal}</h3>
            </div>
        </div>
    `     
    $('hexboard').appendChild(container)
    let exit = $('exit')
    exit.addEventListener('click', function() {
        $('hexboard').removeChild(container)
    })
}   


