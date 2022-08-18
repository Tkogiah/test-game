import { cardDescription } from "./cardDescription"
import { playerDecks } from "./playerDecks.js"
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
