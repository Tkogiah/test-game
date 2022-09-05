import {globalState} from '../main.js'
import { $ } from '../components/quickFunctions.js'
import { merchantDecks, refreshMerchantDecks } from '../components/townModalDecksHtml.js'
import { displayTownModal } from '../components/townModal.js'


export function merchantInitiator() {
    globalState.merchant.addActionCards()    
}

export function activatePurchase(merchant) {
    for(let i = 0; i < merchant.decks.length; i++) {
        if(merchant.decks[i].length > 0) {
            let cardToPurchase = $(`merchant-deck-${i+1}`)
            cardToPurchase.addEventListener('click', function() {
                merchant.decks[i][0].displayPurchaseDetails(i)
            })
        }
    }
}
export function animatePurchase() {
    $('card-details').classList.add('purchased')
    setTimeout(() => {
        $('card-details').classList.remove('purchased')
    }, 500);
}
export function animatePurchaseDecline() {
    $('card-details').classList.add('declined')
    setTimeout(() => {
        $('card-details').classList.remove('declined')
    }, 1000);
}


