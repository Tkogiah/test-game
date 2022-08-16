import {$} from '../components/quickFunctions.js'

export function displayPlayerModal() {
    let drawTotal, discardTotal, handTotal
    const container = document.createElement('div')
    container.classList.add('player-main')
    container.innerHTML = 
    `
        <div id='player-container' class="row container">
            <div id='player-image' class="image-container container"></div>
            
            <div id='draw-deck' class="card draw-pile">
                <h3>${drawTotal}</h3>
            </div>
            
            <div id='discard-deck' class="card discard-pile">
                <h3>${discardTotal}</h3>
            </div>
            
            <div id='hand-deck' 
            class="card hand-pile">
                <h3>${handTotal}</h3>
            </div>
        </div>
    `
    document.body.appendChild(container)
    
    let handDeck = $('hand-deck')
    handDeck.classList.add('hand-deck')
    handDeck.addEventListener('click', function(){
        createHandModal()
    })
    const imageContainer = document.createElement('div')
    const playerHandContaier = document.createElement('div')
    const playerDrawPileContainer = document.createElement('div')
    //const playerDiscardPileContainer = document.createElement('div')
    

}

function createHandModal() {
    const hand = document.createElement('div')
    hand.innerHTML = 
    `
        <div class='container grid'>
            <div class
        </div>
    `
}