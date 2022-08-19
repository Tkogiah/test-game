
export function playerStatsHtml(player) {
    return (`
    <div id='player-image-modal' class="image-container container" style="background-image: url(${player.pictures.idle});"> 
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
 `);
}
