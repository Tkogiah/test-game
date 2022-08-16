import * as $ from '../quickFunctions.js'

export function displayPlayerModal() {
    let drawTotal, discardTotal, handTotal, cardDescription
    const container = document.createElement('div')
    container.classList.add('player-main')
    container.innerHTML = 
    `
        <div id='player-container' class="row container">
            <div id='player-image' class="image-container container"></div>
            
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

            <div id='card-description' class="card-description">
                <h4>${cardDescription}<h4>
                <p>${cardDescription}</p>
            </div>

            <div id='hand-deck' 
            class="card hand-pile column float-right">
                <h3>HAND</h3>
                <h3>${handTotal}</h3>
            </div>
        </div>
    `     
    document.getElementById('hexboard').appendChild(container)
}


