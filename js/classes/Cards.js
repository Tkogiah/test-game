import { $ } from '../components/quickFunctions.js'
import {addAttack} from '../game-logic/playerAttack.js'
import {addMovement} from '../game-logic/playerMovement.js'
import { refreshDecks } from '../components/playerModalDecksHtml.js'
import {handModal} from '../components/playerHandModal.js'
import {refreshCardDetails} from '../components/cardDetailsHtml.js'
import { PlayerModalStatsHtml } from '../components/PlayerModalStatsHtml.js'

class Merchant {
    constructor(deck) {
        this.name = 'Merchant'
        this.deck = []
    }
    getRandomizer() {
        //get an array 
    }
}

class Deck {
    constructor(cards) {
        this.cards = cards
    }
}

class Card {
    constructor(){}
    displayCardFunction(i, player) {
        const cardDetails = $('card-details')
        const title = $('title')
        const description = $('description')
        title.innerText = this.title
        description.innerText = this.description
        const action = document.createElement('div')
        action.id = 'action'
        action.classList.add('row')
        action.classList.add('center')
        action.innerHTML = ''
        action.innerHTML = this.html
        cardDetails.appendChild(action)
        this.addClickFunction(i, player)
    }
    // giveToPlayer(player) {
    //     player.decks.discard.push(this)
    // }
    
}

export class Action extends Card {
    constructor(player) {
        super(player)
        this.title = "Action"
        this.description = 'Use this card to attack or Move'
        this.html = `
            <div id="card-attack"
            class="card-details-action column center card-details-action">
                <p>ADD ATTACK</p>  
            </div>
            <div id="card-movement"
            class="card-details-action column center card-details-action">
                <p>ADD MOVEMENT</p>
            </div>`
    }
    addClickFunction(i, player) {
        const attack = $('card-attack')
        const movement = $('card-movement')
        attack.addEventListener('click', function(){
            player.discard(i, player)
            addAttack(player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
        movement.addEventListener('click', function(){
            player.discard(i, player)
            addMovement(player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
    }   
}


export class TestCard extends Card {
    constructor(player) {
        super(player)
        this.title = "Test"
        this.description = 'I am using this to test the viability of my card classes'
        this.html = `
            <div id="card-button"
            class="card-details-action column center card-details-action">
                <p>USE CARD</p>  
            </div>`
    }
    addClickFunction(i, player) {
        const cardButton = $('card-button')
        cardButton.addEventListener('click', function(){
            player.discard(i, player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
    }   
}

export class Crystal extends Card {
    constructor(value) {
        super()
        this.title = "Crystal"
        this.description = "Trade Crystals at the town for coins. The larger the crystal the higher the bounty. Don't wait too long or your pack will become encumbered."
        this.value = value
        this.html = `
            <div id="card-button"
            class="card-details-action column center card-details-action">
                <p>USE CRYSTAL</p>  
            </div>`
        //function to...
            //add money when player is at location 0
            //discard card when player is ! at location 0
    }
    addClickFunction(i, player) {
        const cardButton = $('card-button')
        const location = Number(player.location)
        const value = Number(this.value)
        cardButton.addEventListener('click', function(){
            if(location != 0) {
                player.discard(i, player)
            }
            else if(location === 0) {
                player.coins += value
                player.trash(i, player)
                $('coin').innerText = `Coin: ${player.coins}`
            }
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
    }   
}
