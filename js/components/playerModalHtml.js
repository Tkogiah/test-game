import { cardDetails } from "./playerCardDetailsHtml.js"
import { playerDecks } from "./playerModalDecksHtml.js"
import { PlayerModalStatsHtml } from "./PlayerModalStatsHtml.js"

export function playerModalHtml(player) {
    let playerStats = PlayerModalStatsHtml(player)
    let deck = playerDecks(player.decks)
    let description = cardDetails()
    return (`
        <div id='player-container' class="row container">
            ${playerStats}
            ${deck}
            ${description}
        </div>
    `)
}
