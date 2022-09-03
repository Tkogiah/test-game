// import {addAttack} from '../game-logic/playerAttack.js'
// import {addMovement} from '../game-logic/playerMovement.js'
import { $ } from './quickFunctions.js'

export function handModalActive(player) {
    const hand = document.getElementById('hand-deck')
    if(player.decks.hand <= 0) {return}
    hand.classList.remove('hand-pile')
    hand.classList.add('hand-pile-active')
    hand.addEventListener('click', function() {
        handModal(player)
    })

    document.addEventListener('keydown', e => {    //Breaks if "h" pressed outside modal
    //breaks if card is clicked and then another card is clicked
        if(e.code === "KeyH" && $('hand-deck')) {
            handModal(player)
        }

    })
}

export function handModal(player) {
    if($('hand-card-modal') && $('hand-card-container')) {  
        $('hand-card-container').remove()
        $('hand-card-modal').remove()
        return
    }
    const modal = document.createElement('div')
    modal.classList.add('hand-card-modal')
    modal.id = 'hand-card-modal'
    document.getElementById('player-container').appendChild(modal)

    const handContainer = document.createElement('div')
    handContainer.classList.add('container')
    handContainer.classList.add('row')
    handContainer.classList.add('hand-card-container')
    handContainer.id = 'hand-card-container'
    modal.appendChild(handContainer)
    displayCards(player)
    
}

export function displayCards(player) {
    const displayDeck = player.decks.hand
    const handContainer = document.getElementById('hand-card-container')
    displayDeck.forEach((element, i) => {
        const card = document.createElement('div')
        card.id = `card-${i}`
        card.classList.add('contaner')
        card.classList.add('center')
        card.classList.add('column')
        card.classList.add('hand-card')
        card.classList.add('hand-pile-active')
        card.innerText = element.title
        card.addEventListener('click', function(){
            document.getElementById('action').remove()
            element.displayCardFunction(i, player)
        })
        handContainer.appendChild(card)
    });
}


 