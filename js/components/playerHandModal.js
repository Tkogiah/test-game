export function handModalActive(player) {
    const hand = document.getElementById('hand-deck')
    if(player.decks.hand <= 0) {return}
    hand.classList.remove('hand-pile')
    hand.classList.add('hand-pile-active')
    hand.addEventListener('click', function() {
        handModal(player)
    })
}

export function handModal(player) {
    
    const modal = document.createElement('div')
    modal.classList.add('hand-card-modal')
    document.getElementById('player-container').appendChild(modal)
    const flexContainer = document.createElement('div')
    flexContainer.classList.add('container')
    flexContainer.classList.add('row')
    modal.appendChild(flexContainer)
//TO DO WORKING ON THIS 8/19/22
    const deck = player.decks.hand
    deck.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('hand-card')
        modal.appendChild(card)
    });
    
    

}
