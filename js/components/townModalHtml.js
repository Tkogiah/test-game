import { cardDetails } from "./cardDetailsHtml.js"
import { merchantDecks } from "./townModalDecksHtml.js"


export function townModalHtml(merchant) {
    let deck = merchantDecks(merchant)
    let description = cardDetails()
    return `
        <div id='merchant-container' class="row container">
            ${deck}
            ${description}
        </div>
    `
}
