export function playerDecks(decks) {
    return (`
        <div id='draw-deck' class="card draw-pile column">
            <div>
                <h3>DRAW</h3>
                <h3>PILE</h3>
            </div>
            <h3>${decks.draw.length}</h3>
        </div>

        <div id='discard-deck' class="card discard-pile column">
            <div>
                <h3>DISCARD</h3>
                <h3>PILE</h3>
            </div>
            <h3>${decks.discard.length}</h3>
        </div>

        <div id='hand-deck' class="card hand-pile column float-right">
            <h3>HAND</h3>
            <h3>${decks.hand.length}</h3>
        </div>
    `);
}
