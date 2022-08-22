const imageMain = document.getElementById('player-image')
const imageModal = document.getElementById('player-image-modal')

export function animateIdle(player) {
    setTimeout(function() {
        if(imageModal){
            imageModal.style.backgroundImage = `url(${player.pictures.idle})`
        }
        else {
            imageMain.style.backgroundImage = `url(${player.pictures.idle})` 
        }
    }, 2000)
}
export function animateRun(player){
    if(imageModal === true){
        imageModal.style.backgroundImage = `url(${player.pictures.move})`
    }
    else {
        imageMain.style.backgroundImage = `url(${player.pictures.move})` 
    }
    animateIdle(player)
}
export function animateAttack(player) {
    if(imageModal){
        imageModal.style.backgroundImage = `url(${player.pictures.attack})`
    }
    else {
        imageMain.style.backgroundImage = `url(${player.pictures.attack})`
    }
    animateIdle(player)
}

