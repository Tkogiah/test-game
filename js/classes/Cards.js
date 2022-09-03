import { $ } from '../components/quickFunctions.js'
import {addAttack} from '../game-logic/playerAttack.js'
import {addMovement} from '../game-logic/playerMovement.js'
import { refreshDecks } from '../components/playerModalDecksHtml.js'
import {handModal} from '../components/playerHandModal.js'
import {refreshCardDetails} from '../components/cardDetailsHtml.js'


export class Merchant {
    constructor() {
        this.name = 'Merchant'
        this.deck = []
    }
    getRandomizer() {
        //get an array of all cards and randomly pull 9
    }
    addActionCards() {
        for(let i = 0; i < 10; i++) {
            this.deck.push(new Action(none))
        }
    }
}


class Card {
    constructor(){
        //TO DO: figure out how to add "once" in the event handler of the keydown hotkey
    }
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
        action.innerHTML = this.html()
        cardDetails.appendChild(action)
        this.addClickFunction(i, player)
    }
    addThisCard(player) {
        player.decks.discard.push(new this(player))
    }
}

export class Attack extends Card {
    constructor(player) {
        super(player)
        this.title = "Attack"
        this.description = 'Use this card to gain an extra attack'
        this.cost = 10
    }
    addClickFunction(i, player) {
        const once = {once:true} //THIS IS TO ENSURE THE EL FIRES ONLY ONCE
        const attack = $('card-attack')
        attack.addEventListener('click', function(){
            player.discard(i, player)
            addAttack(player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
        
        document.addEventListener('keydown', e => {
            if(e.code === "Space") {
                player.discard(i, player)
                addAttack(player)
                $('hand-card-modal').remove()
                handModal(player)
                refreshDecks(player)
                refreshCardDetails()
            }
        }, once)
    }
    html() {
        return `
        <div id="card-attack"
        class="card-details-action column center card-details-action">
            <p>USE</p>  
        </div>`
    }   
}
export class Movement extends Card {
    constructor(player) {
        super(player)
        this.title = "Move"
        this.description = 'Use this card to gain movement'
        this.cost = 10
    }
    addClickFunction(i, player) {
        const movement = $('card-movement')
        movement.addEventListener('click', function(){
            player.discard(i, player)
            addMovement(player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
        document.addEventListener('keydown', e => {
            if($('modal') && e.code === "Space") {
                player.discard(i, player)
                addMovement(player)
                $('hand-card-modal').remove()
                handModal(player)
                refreshDecks(player)
                refreshCardDetails()
            }
        })
    }
    
    html() {
        return `
        <div id="card-movement"
        class="card-details-action column center card-details-action">
            <p>USE</p>
        </div>`
    }
}

export class Crystal extends Card {
    constructor(value) {
        super()
        this.title = "Crystal"
        this.description = "Trade this Crystal at the town for coins. The rarer the crystal the higher the bounty. If your pack gets too encumbered you can toss this."
        this.value = value
        this.html = this.tradeOrToss
    }
    addClickFunction(i, player) {
        const cardButton = $('card-button')
        const location = Number(player.location)
        const value = Number(this.value)
        cardButton.addEventListener('click', function(){
            if(location != 0) {
                player.trash(i, player)
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
    tradeOrToss(player) {
        if(player.location === 0) {
            this.html = `
            <div id="card-button"
            class="card-details-action column center card-details-action">
                <p>TRADE</p>  
            </div>`
        }
        else if(player.location !=0) {
            this.html = `
            <div id="card-button"
            class="card-details-action column center card-details-action">
                <p>TOSS</p>  
            </div>`
        }
    }   
}

export class Action extends Card {
    constructor(player) {
        super(player)
        this.title = "Action"
        this.description = 'Use this card to attack or Move'
        this.cost = 10
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


