import { merchantCardDetails } from "./townCardDetails.js"
import { merchantDecks } from "./townModalDecksHtml.js"


export function townModalHtml(merchant) {
    let deck = merchantDecks(merchant)
    let description = merchantCardDetails()
    return `
        <div id='merchant-container' class="row container">
            ${deck}
            ${description}
        </div>
    `
}
