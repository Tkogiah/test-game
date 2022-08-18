export function playerModalHtml(player) {
    let playerStats = playerStatsHtml(player)
    
    return (
        `
        <div id='player-container' class="row container">
            ${playerStats}
            <div id='draw-deck' class="card draw-pile column">
                <div>
                    <h3>DRAW</h3>
                    <h3>PILE</h3>
                </div>
                <h3>${player.decks.draw.length}</h3>
            </div>
            
            <div id='discard-deck' class="card discard-pile column">
                <div>
                    <h3>DISCARD</h3>
                    <h3>PILE</h3>
                </div>
                <h3>${player.decks.discard.length}</h3>
            </div>

            <div id='card-description' class="card-description">
                <h4>TITLE<h4>
                <p>Description</p>
            </div>

            <div id='hand-deck' 
            class="card hand-pile column float-right">
                <h3>HAND</h3>
                <h3>${player.decks.hand.length}</h3>
            </div>
        </div>
    `
    )
}

function playerStatsHtml(player) {

 return (`
    <div id='player-image' class="image-container container" style="background-image: url(${player.picture});">
         
    </div>
                
    <div id='player-stats' class="container column player-stats">
        <h4>Name: ${player.name}</h4>
        <h5>Level: ${player.level}</h5>
        <h5>Speed: ${player.speed}</h5>
        <h5>Range: ${player.range}</h5>
        <h5>Damage: ${player.damage}</h5>
        <h5>Money: ${player.money}</h5>
    </div>

    <div id="exit" class="exit">
        &times
    </div>
 `)
}