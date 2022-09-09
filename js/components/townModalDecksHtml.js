import { $ } from "./quickFunctions.js";
import { displayTownModal } from "./townModal.js";

export function merchantDecks(merchant) {
    let decks = merchant.decks
    let returnValues = `
        <div id="exit" class="exit">
        &times
        </div>
        `
    for(let i = 0; i < merchant.decks.length; i++) {
        if(decks[i][0] != undefined) {
            returnValues += `
            <div id='merchant-deck-${i+1}' class="card merchant-deck merchant-deck-${i+1} column">
                <div>
                    <h3>${decks[i][0].title}</h3>
                </div>
                <div>
                    <h4 id="cost-${i+1}">$ ${decks[i][0].cost}</h3>
                    <h5 id="quantity-${i+1}">Stock ${decks[i].length}</h3>
                </div>
            </div>
            `
        }
    }
    
    return returnValues
}

export function refreshMerchantDecks(i, merchant) {
    
    let decks = merchant.decks
    let stock = $(`quantity-${i+1}`)
    stock.innerText = `Stock ${decks[i].length}`
}
