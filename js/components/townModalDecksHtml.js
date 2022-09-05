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
            <div>
                <h4 id="cost-${i}">$ ${decks[i-1][0].cost}</h3>
                <h5 id="quantity-${i}">Stock ${decks[i-1].length}</h3>
            </div>
        </div>
        `
    }
    return returnValues

}
export function refreshMerchantDecks(merchant) {
    let decks = merchant.decks
    for(let i = 1; i <= decks; i++) {
        let card = $(`merchant-deck-${i}`)

    }
    

    let first = $('first-merchant-deck')
    
    first.innerText = `${decks[0].length}`

}
