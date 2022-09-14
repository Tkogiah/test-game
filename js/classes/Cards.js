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
import { showPlayerAttackRange } from "../game-logic/rangeAlgorithm.js"

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
        //TODO: figure out how to add "once" in the event handler of the keydown hotkey
    }
    displayCardFunction(i, player) {
        const useHTML = this.use()
        const cardDetails = $('card-details')
        const title = $('title')
        const description = $('description')
        title.innerText = this.title
        if(this.title === 'Crystal') {
            $(`card-${i}`).classList.add(`crystal${this.value}`)
            $(`card-${i}`).style.backgroundImage = `url(${this.picture})`
            $(`card-${i}`).innerText = ''
            
        }
        description.innerText = this.description
        const action = document.createElement('div')
        action.id = 'action'
        action.classList.add('row')
        action.classList.add('center')
        action.innerHTML = ''
        action.innerHTML = useHTML
        cardDetails.appendChild(action)
        this.addUseFunction(i, player)
    }
    use() {
        return `
        <div id="card-action"
        class="card-details-action column center card-details-action">
            <p>USE</p>  
        </div>`
    }
    displayPurchaseDetails(i) {
        const purchaseHTML = this.purchase()
        const cardDetails = $('card-details')
        const title = this.title
        const description = this.description
        const action = $('action')
        $('title').innerText = title
        $('description').innerText = description
        action.innerHTML = purchaseHTML
        cardDetails.appendChild(action)
        this.addPurchaseFunction(i)
    }  
    addPurchaseFunction(i) {
        let affordable = false
        let player = globalState.globalOrder[0]
        let price = this.cost
        if(player.coins >= this.cost) {
            affordable = true
        }
        let merchant = globalState.merchant
        let playerDiscard = globalState.globalOrder[0].decks.discard
        const action = $('card-action')
        const decks = globalState.merchant.decks
        action.addEventListener('click', function(){
            if(affordable === true){
                player.coins -= price
                playerDiscard.push(decks[i][0])
                decks[i].pop()
                animatePurchase()
                $('hexboard').removeChild($('modal'))
                displayTownModal(merchant)
            }    
            if(decks[i].length <= 0) {
                decks.splice(i, 1)
                $('hexboard').removeChild($('modal'))
                displayTownModal(merchant)
            }
            if(affordable === false) {
                animatePurchaseDecline()
            }
        })
    }   
    purchase() {
        return `<div id="card-action"
        class="card-details-action column center card-details-purchase">
            <p>PURCHASE</p>  
        </div>`
    }
    
}
export class Action extends Card {
    constructor(player) {
        super(player)
        this.title = "Action"
        this.description = 'Use this to gain an extra attack or extra movement'
        this.cost = 5
    }
    addUseFunction(i, player) {
        const attack = $('card-attack')
        const movement = $('card-movement')
        attack.addEventListener('click', function(){
            addAttack(player) 
            player.cardUseRefresh(i, player)
        })
        movement.addEventListener('click', function(){
            addMovement(player)
            player.cardUseRefresh(i, player)
        })
    }
    use() {
        return `
        <div id="card-attack"
        class="card-details-action column center card-details-action">
            <p>ATTACK</p>  
        </div>
        <div id="card-movement"
        class="card-details-action column center card-details-action">
            <p>MOVE</p>
        </div>`
    }     
}

export class Attack extends Card {
    constructor(player) {
        super(player)
        this.title = "Attack"
        this.description = 'Use this card to gain an extra attack'
        this.cost = 5
        this.picture = 'assets/sword-icon.png'
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            addAttack(player)
            player.cardUseRefresh(i, player)
        })
    }  
}
export class Movement extends Card {
    constructor(player) {
        super(player)
        this.title = "Move"
        this.description = 'Use this card to gain movement'
        this.cost = 5
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            addMovement(player)
            player.cardUseRefresh(i, player)
        })
    }
}

export class Crystal extends Card {
    constructor(value) {
        super()
        this.title = "Crystal"
        this.description = `Trade this Crystal at the town for ${value} coins. The rarer the crystal the higher the bounty. If your pack gets too encumbered you can toss this.`
        this.value = value
        this.picture = `assets/crystal${value}.png`
        //this.html = this.tradeOrToss
    }
    addUseFunction(i, player) {
        //because crystals can't be bought and are used differently
        const action = document.createElement('div')
        action.id = 'action'
        action.classList.add('row')
        action.classList.add('center')
        action.innerHTML = ''
        action.innerHTML = this.use()
        ///////////////////////////////////////////////////////////
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

export class MultiTask extends Card {
    constructor(player) {
        super(player)
        this.title = "MultiTask"
        this.description = 'Use this card to gain an attack and movement'
        this.cost = 15
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            addAttack(player)
            addMovement(player)
            player.cardUseRefresh(i, player)
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
    addUseFunction(i, player) {
        const cardButton = $('card-button')
        cardButton.addEventListener('click', function(){
            player.discard(i, player)
            player.cardUseRefresh(i, player)
        })
    }   
}
export class SecondWind extends Card {
    constructor(player) {
        super(player)
        this.title = "2nd Wind"
        this.description = 'Use this card to draw 3 cards from the top of your deck.'
        this.cost = 15
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            player.drawThree(player)
            player.cardUseRefresh(i, player)
        })
    }
}
export class TenFootPole extends Card {
    constructor(player) {
        super(player)
        this.title = "10ft Pole"
        this.description = 'Use this card to extend the range of the rest of your attacks by 1 for the remainder of this round.'
        this.cost = 10
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            player.rangeModifier += 1
            $('range').innerText = `Range: ${player.range+player.rangeModifier}`
            if(player.attacks > 0){showPlayerAttackRange(player)}
            player.cardUseRefresh(i, player)
        })
    }
}
export class BootsOfSpeed extends Card {
    constructor(player) {
        super(player)
        this.title = "Boots of Speed"
        this.description = 'Use this card to make your movements go further this round.'
        this.cost = 10
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            player.speedModifier += 5
            $('speed').innerText = `Speed: ${player.speed+player.speedModifier}`
            player.cardUseRefresh(i, player)
        })
    }
}
export class Sharpen extends Card {
    constructor(player) {
        super(player)
        this.title = "Sharpen"
        this.description = 'Use this card to sharpen your weapon making your attacks do more damage this round.'
        this.cost = 10
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            player.damageModifier += 5
            $('damage').innerText = `Damage: ${player.damage+player.damageModifier}`
            player.cardUseRefresh(i, player)
        })
    }
}
export class Ice extends Card {
    constructor(player) {
        super(player)
        this.title = "Ice"
        this.description = 'Use this card to attack and freeze the enemy, preventing movement for one round.'
        this.cost = 15
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            player.freeze += 1
            addAttack(player)
            player.cardUseRefresh(i, player)
        })
    } 
}
export class DoubleMovement extends Card {
    constructor(player) {
        super(player)
        this.title = "Double Movement"
        this.description = 'Use this card to move twice your normal speed'
        this.cost = 15
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            addMovement(player)
            addMovement(player)
            player.cardUseRefresh(i, player)
        })
    }
}
export class tripleAttack extends Card {
    constructor(player) {
        super(player)
        this.title = "Triple Attack"
        this.description = 'Use this card to attack three times'
        this.cost = 15
    }
    addUseFunction(i, player) {
        const action = $('card-action')
        action.addEventListener('click', function(){
            addAttack(player)
            addAttack(player)
            addAttack(player)
            player.cardUseRefresh(i, player)
        })
    }
}

//TODO add enemy modal/buttons
//TODO add equipment
