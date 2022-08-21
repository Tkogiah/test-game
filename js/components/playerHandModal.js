
export function handModalActive(player) {
    const hand = document.getElementById('hand-deck')
    if(player.decks.hand <= 0) {return}
    hand.classList.remove('hand-pile')
    hand.classList.add('hand-pile-active')
    hand.addEventListener('click', function() {
        handModal(player)
    })
}

function handModal(player) {
    const modal = document.createElement('div')
    modal.classList.add('hand-card-modal')
    document.getElementById('player-container').appendChild(modal)

    const handContainer = document.createElement('div')
    handContainer.classList.add('container')
    handContainer.classList.add('row')
    handContainer.classList.add('hand-card-container')
    handContainer.id = 'hand-card-container'
    modal.appendChild(handContainer)
    displayCards(player)
}

function displayCards(player) {
    const displayDeck = player.decks.hand
    const handContainer = document.getElementById('hand-card-container')
    displayDeck.forEach((element, i) => {
        const card = document.createElement('div')
        card.id = i
        card.classList.add('contaner')
        card.classList.add('center')
        card.classList.add('column')
        card.classList.add('hand-card')
        card.classList.add('hand-pile-active')
        card.innerText = element.title
        card.addEventListener('click', function(){
            const title = document.getElementById('title')
            const description = document.getElementById('description')
            title.innerText = element.title
            description.innerText = element.description
            //element.html()
            displayAction()
        })
        handContainer.appendChild(card)
    });
}

function displayAction() {    
        
    return (`
        <div id="card-attack"
        class="card-description-action column center card-description-action">  
        </div>
        <div id="card-movement"
        class="card-description-action column center card-description-action">
        </div>
    `)
}
