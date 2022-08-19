class Deck {
    constructor(cards) {
        this.cards = cards
    }
}

class Card {
    constructor(title) {
        this.title = title
    }
}

export class Action extends Card {
    constructor(title) {}
    title = 'Action'
    description = 'Use this card to attack or move'
    attack() {
        // p.playerArray[0].attacks += 1
        // p.displayActivePlayer(0)
           
    }
    move() {
        // p.playerArray[0].movement += p.playerArray[0].speed * 1
        // p.displayActivePlayer(0)    
    }
}
class SpeedBoots extends Card {
    constructor(name) {}
    super(title) {}
}