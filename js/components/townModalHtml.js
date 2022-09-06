import { globalState } from "../main.js"
import { merchantCardDetails } from "./townCardDetails.js"
import { merchantDecks } from "./townModalDecksHtml.js"


export function townModalHtml(merchant) {
    let deck = merchantDecks(merchant)
    let description = merchantCardDetails()
    return `
        <div id='merchant-container' class="row container">
            <div id='current-coin' class='merchant-coins'>Coins: ${globalState.globalOrder[0].coins}</div>
            ${deck}
            ${description}
        </div>
    `
}
