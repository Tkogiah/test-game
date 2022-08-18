import { cardDescription } from "./cardDescriptionHtml.js"
import { playerDecks } from "./playerDecksHtml.js"
import { playerStatsHtml } from "./playerStatsHtml.js"

export function playerModalHtml(player) {
    let playerStats = playerStatsHtml(player)
    let deck = playerDecks(player.decks)
    let description = cardDescription(player.currentCard)
    return (`
        <div id='player-container' class="row container">
            ${playerStats}
            ${deck}
            ${description}
        </div>
    `)
}
