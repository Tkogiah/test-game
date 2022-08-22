import { Action, TestCard } from './Cards.js'

class Player {
    constructor(playerName) {
        this.name = playerName,
        this.type = 'player',
        this.level = 1,
        this.money = 0,
        this.location = 0,
        this.attacks = 0,
        this.movement = 0,
        this.decks = {
            draw:[],
            hand:[new Action, new Action, new Action, new Action, new Action, new Action],
            discard: []
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
        this.picture = 'assets/archer-idle.gif', //TODO match this to fighter
        this.damage = 3
    }
}
export class Fighter extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Fighter;
        this.speed = 3,
        this.range = 2,
        this.pictures = {
            idle: 'assets/warrior-idle.gif',
            move: 'assets/warrior-run.gif',
            attack: 'assets/warrior-attack.gif'
        } 
        this.damage = 5
        this.music = 'assets/fighter-music.mp3'
    }  
}
export class Rogue extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Rogue;
        this.speed = 5,
        this.range = 3,
        this.picture = 'assets/rogue-idle.gif', //TODO match this to fighter
        this.damage = 2
    }  
}