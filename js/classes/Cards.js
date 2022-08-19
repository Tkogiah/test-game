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
    title = "Action"
    description = 'Use this card to attack or move'
    addAttack(player) {
        player.attacks += 1
        showPlayerAttackRange(player)

    }
    addMovement(player) {
        player.movement += player.speed * 1
        showPlayerMovementRange(player)
        playerMovement(player)
    }
}
class SpeedBoots extends Card {
    constructor(name) {}
    super(title) {}
}