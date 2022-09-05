import {globalState} from '../main.js'
import { $ } from '../components/quickFunctions.js'


export function merchantInitiator() {
    globalState.merchant.addActionCards()
}

export function activatePurchase(merchant) {
    for(let i = 1; i <= merchant.decks.length-2; i++) {
        let cardToPurchase = $(`merchant-deck-${i}`)
        cardToPurchase.addEventListener('click', function() {
           merchant.decks[i][0].displayPurchaseDetails()
        })
    }
}


