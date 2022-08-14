import * as player from "./playerModal"

function $(id) {
    if(typeof id === 'string' || id instanceof String) {
        return document.getElementById(id)
    }
    else {
        return id[0]
    }
}

//**** 3 MODAL BUTTONS ON THE MAIN PAGE ****//


//PLAYER BUTTON
export const playerButton = $("player-button")

playerButton.addEventListener('click', function() {
    console.log('write player modal')
    //player.displayPlayerModal()
})

//ENEMIES BUTTON
const enemiesButton = $("enemies-button")

enemiesButton.addEventListener('click', function() {
    console.log('write enemies modal')
    //openEnemiesModal 
})

//MERCHANT BUTTON
const merchantButton = $("merchant-button")
merchantButton.addEventListener('click', function() {
    console.log('write merchant modal')
    //openMerchantModal 
})
