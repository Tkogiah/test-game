import { $ } from "./quickFunctions.js";

export function merchantDecks(merchant) {
    let decks = merchant.decks
    let returnValues = `
        <div id="exit" class="exit">
        &times
        </div>
        `
    for(let i = 1; i <= decks.length-2; i++) {
        returnValues += `
        <div id='merchant-deck-${i}' class="card merchant-deck merchant-deck-${i} column">
            <div>
                <h3>${decks[i-1][0].title}</h3>
            </div>
            <h3 id="merchant-${i}">${decks[i-1].length}</h3>
        </div>
        `
    }
    return returnValues

}
export function refreshMerchantDecks(merchant) {
    let decks = merchant.decks

    let first = $('first-merchant-deck')
    
    first.innerText = `${decks[0].length}`

}
