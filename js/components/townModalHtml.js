import { cardDetails } from "./cardDetailsHtml.js"
import { townDecks } from "./townModalDecksHtml.js"


export function townModalHtml(merchant) {
    let deck = townDecks(merchant)
    let description = cardDetails()
    return (`
        <div id='merchant-container' class="row container">
            ${deck}
            ${description}
        </div>
    `)
}
