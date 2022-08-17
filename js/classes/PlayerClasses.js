class Player {
    constructor(playerName) {
        this.name = playerName,
        this.type = 'player',
        this.level = 1,
        this.money = 0,
        this.location = 0,
        this.attacks = 0,
        this.movement = 0,
        this.deck = {
            drawPile:[],
            handPile:['card two', 'card-two', 'card-two','card-two','card-two'],
            discardPile: ['card-three']
        },
        this.remainingAttacks = 0,
        this.remainingMovements = 0,
        this.remainingDraws = 0
    }  
}
export class Archer extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Archer;
        this.speed = 2,
        this.range = 5,
        this.picture = '/assets/Archer.jpg', 
        this.damage = 3
    }
}
export class Fighter extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Fighter;
        this.speed = 3,
        this.range = 2,
        this.picture = '/assets/Fighter.png', 
        this.damage = 5
    }  
}
export class Thief extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Thief;
        this.speed = 5,
        this.range = 3,
        this.picture = '/assets/Thief.jpg', 
        this.damage = 2
    }  
}