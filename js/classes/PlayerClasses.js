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
            draw:[new Action, new Action, new Action, new Action, new Action, new Action],
            hand:[],
            discard: []
        }
    }
    draw() {
        while(this.decks.hand.length < 5) {
            if(this.decks.draw.length > 0) {
                let card = this.decks.draw.pop()
                this.decks.hand.push(card)
            }
            else {
                this.shuffle(this.decks.discard)
                while(this.decks.discard.length > 0) {
                    let card = this.decks.discard.pop()
                    this.decks.draw.push(card)
                }
            }
        }
    }
    shuffle(array) {
        //taken from <https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?page=1&tab=scoredesc#tab-top>
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    discardHand() {
        while(this.decks.hand.length > 0) {
            let card = this.decks.hand.pop()
            this.decks.discard.push(card)
        }
    }
    discard(i, player) {
        let currentCard = player.decks.hand[i]
            player.decks.discard.push(currentCard)
            player.decks.hand.splice(i, 1)
    }
    resetStats() {
        this.attacks = 0
        this.movement = 0
        this.money = 0
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