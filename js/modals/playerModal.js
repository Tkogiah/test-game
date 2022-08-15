import {$} from '../components/quickFunctions.js'

export function displayPlayerModal() {
    let drawTotal, discardTotal, handTotal
    const container = document.createElement('div')
    container.classList.add('player-main')
    container.innerHTML = 
    `
        <div class="row container">
            <div id='player-image' class="image-container container"></div>
            
            <div id='draw-deck' class="draw-container container center column">
                <h3>${drawTotal}</h3>
            </div>
            
            <div id='discard-deck' class="discard-container container center column">
                <h3>${discardTotal}</h3>
            </div>
            
            <div id='hand-deck' 
            class="hand-container container center column">
                <h3>${handTotal}</h3>
            </div>
        </div>
    `
    const imageContainer = document.createElement('div')
    const playerHandContaier = document.createElement('div')
    const playerDrawPileContainer = document.createElement('div')
    //const playerDiscardPileContainer = document.createElement('div')
    document.body.appendChild(container)

}
