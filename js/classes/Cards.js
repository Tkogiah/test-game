import { $ } from '../components/quickFunctions.js'
import {addAttack} from '../game-logic/playerAttack.js'
import {addMovement} from '../game-logic/playerMovement.js'
import { refreshDecks } from '../components/playerModalDecksHtml.js'
import {handModal} from '../components/playerHandModal.js'
import {refreshCardDetails} from '../components/playerCardDetailsHtml.js'
import { globalState } from '../main.js'
import { refreshMerchantDecks } from '../components/townModalDecksHtml.js'
import { animatePurchase, animatePurchaseDecline } from '../game-logic/merchantFunctions.js'
import { displayTownModal } from '../components/townModal.js'


export class Merchant {
    constructor() {
        this.name = 'Merchant'
        this.decks = [
            [],[],[],[],[],[],[],[]
        ]
    }
    getRandomizer() {
        let merchantDeck = []
        for(let i =0;i<10;i++) {
            merchantDeck.push(globalState.cards[i])
        }
        return merchantDeck
    }
    addActionCards() {
        let deck = this.getRandomizer
        for(let i = 0; i < this.decks.length; i++) {
            for(let j = 0; j < 10; j++) {
                this.decks[i].push(globalState.cards[i])
                //maybe this.decks[i].push(new randomizerArray[j])
            }
            
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
        action.innerHTML = this.use()
        cardDetails.appendChild(action)
        this.addUseFunction(i, player)
    }
    displayPurchaseDetails(i) {
        const cardDetails = $('card-details')
        const title = $('title')
        const description = $('description')
        const action = $('action')
        title.innerText = this.title
        description.innerText = this.description
        action.innerHTML = this.purchase()
        cardDetails.appendChild(action)
        this.addPurchaseFunction(i)
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
    addUseFunction(i, player) {
        const attack = $('card-attack')
        attack.addEventListener('click', function(){
            player.discard(i, player)
            addAttack(player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
        const once = {once:true} //THIS IS TO ENSURE THE EL FIRES ONLY ONCE
        document.addEventListener('keydown', e => {
            if($('modal') && e.code === "Space") {
                player.discard(i, player)
                addAttack(player)
                $('hand-card-modal').remove()
                handModal(player)
                refreshDecks(player)
                refreshCardDetails()
            }
        }, once)
    }
    use() {
        return `
        <div id="card-attack"
        class="card-details-action column center card-details-action">
            <p>USE</p>  
        </div>`
    }
    purchase() {
        
    }   
}
export class Movement extends Card {
    constructor(player) {
        super(player)
        this.title = "Move"
        this.description = 'Use this card to gain movement'
        this.cost = 10
    }
    addUseFunction(i, player) {
        const movement = $('card-movement')
        movement.addEventListener('click', function(){
            player.discard(i, player)
            addMovement(player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
        const once = {once:true} //THIS IS TO ENSURE THE EL FIRES ONLY ONCE
        document.addEventListener('keydown', e => {
            if($('modal') && e.code === "Space") {
                player.discard(i, player)
                addMovement(player)
                $('hand-card-modal').remove()
                handModal(player)
                refreshDecks(player)
                refreshCardDetails()
                console.log('hello')
            }
        }, once)
    }
    
    use() {
        return `
        <div id="card-movement"
        class="card-details-action column center card-details-action">
            <p>USE</p>
        </div>`
    }
    purchase() {
        
    }
}

export class Crystal extends Card {
    constructor(value) {
        super()
        this.title = "Crystal"
        this.description = "Trade this Crystal at the town for coins. The rarer the crystal the higher the bounty. If your pack gets too encumbered you can toss this."
        this.value = value
        //this.html = this.tradeOrToss
    }
    addUseFunction(i, player) {
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
    use() {
        if(Number(globalState.globalOrder[0].location) === 0) {
            return `
            <div id="card-button"
            class="card-details-action column center card-details-action">
                <p>TRADE</p>  
            </div>`
        }
        else if(globalState.globalOrder[0].location !=0) {
            return `
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
        this.description = 'Use this card to gain an attack and movement'
        this.cost = 20
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            player.discard(i, player)
            addAttack(player)
            addMovement(player)
            $('hand-card-modal').remove()
            handModal(player)
            refreshDecks(player)
            refreshCardDetails()
        })
    }
    addPurchaseFunction(i) {
        let affordable = false
        let player = globalState.globalOrder[0]
        if(player.coins >= this.cost) {
            affordable = true
        }
        
        let merchant = globalState.merchant
        let playerDiscard = globalState.globalOrder[0].decks.discard
        const action = $('card-action')
        const decks = globalState.merchant.decks
        action.addEventListener('click', function(){
            if(affordable === true){
                playerDiscard.push(decks[i][0])
                decks[i].pop()
                animatePurchase()
                refreshMerchantDecks(Number(i), merchant)
            }    
            if(decks[i].length <= 0) {
                decks.splice(i, 1)
                $('hexboard').removeChild($('modal'))
                displayTownModal(merchant)
            }
            animatePurchaseDecline()
        })
    }
    use() {
        return `
        <div id="card-action"
        class="card-details-action column center card-details-action">
            <p>USE</p>  
        </div>`
    }
    purchase() {
        return `<div id="card-action"
        class="card-details-action column center card-details-purchase">
            <p>PURCHASE</p>  
        </div>`
    }   
}
// title
// description
// cost
// clickfunction
// html
// purchase
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
    addUseFunction(i, player) {
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


