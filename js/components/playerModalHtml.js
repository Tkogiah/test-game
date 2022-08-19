import { cardDescription } from "./cardDescriptionHtml.js"
import { playerDecks } from "./playerModalDecksHtml.js"
import { PlayerModalStatsHtml } from "./PlayerModalStatsHtml.js"

export function playerModalHtml(player) {
    let playerStats = PlayerModalStatsHtml(player)
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
