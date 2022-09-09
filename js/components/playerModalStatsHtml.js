
export function PlayerModalStatsHtml(player) {
    return (`
    <div id='player-image-modal' class="image-container container" style="background-image: url(${player.pictures.idle});"> 
    </div>              
    <div id='player-stats' class="container column player-stats">
        <h4 id="name">Name: ${player.name}</h4>
        <h5 id="level">Level: ${player.level}</h5>
        <h5 id="speed">Speed: ${player.speed+player.speedModifier}</h5>
        <h5 id="range">Range: ${player.range+player.rangeModifier}</h5>
        <h5 id="damage">Damage: ${player.damage+player.damageModifier}</h5>
        <h5 id="coin">Coin: ${player.coins}</h5>
    </div>
    <div id="exit" class="exit">
        &times
    </div>
 `);
}
