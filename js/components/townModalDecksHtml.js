import { $ } from "./quickFunctions.js";

export function merchantDecks(merchant) {
    let decks = merchant.decks
    return `
        <div id='first-merchant-deck' class="card merchant-deck merchant-deck-one column">
            <div>
                <h3>${decks[0][0].title}</h3>
            </div>
            <h3 id="merchant-1">${decks[0].length}</h3>
        </div>
        <div id="exit" class="exit">
        &times
        </div>
    `;
}
export function refreshMerchantDecks(merchant) {
    let decks = merchant.decks

    let first = $('first-merchant-deck')
    
    first.innerText = `${decks[0].length}`

}
