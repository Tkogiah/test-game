import { globalState } from '../main.js'
import { Attack, Movement } from './Cards.js'
import {enemyInitiator} from '../game-logic/enemyInitiator.js'
import { nextTurn } from '../game-logic/RoundAndTurnControl.js'
import { $ } from '../components/quickFunctions.js'

class Player {
    constructor(playerName) {
        this.name = playerName,
        this.type = 'player'
        this.level = 1
        this.coins = 0
        this.location = 0
        this.attacks = 0
        this.movement = 0
        this.decks = {
            draw:[new Attack, new Movement, new Attack, new Movement, new Attack, new Movement, new Attack, new Movement, new Attack, new Movement,],
            hand:[],
            discard: []
        }
        this.speedModifier = 1
        this.damageModifier = 1
        this.rangeModifier = 1
    }
    toggleTown() {
        if(this.location != 0){
            $('town-button').classList.add('hidden')
        }
        else {
            $('town-button').classList.remove('hidden')
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
    trash(i, player){
        player.decks.hand.splice(i, 1)
    }
    resetStats() {
        this.attacks = 0
        this.movement = 0
        this.speedModifier = 1
        this.damageModifier = 1
        this.rangeModifier = 1
    }
    advanceRound(globalOrder) {
        let count = 0
        globalOrder.forEach(element => {
            if(element.type === 'enemy') {
                count += 1
            }
        })
        if(count === 0) {  
            globalState.round += 1
            enemyInitiator(globalState)
            nextTurn(globalState)
        }
    }
    drawThree(player) {
        for(let i = 0; i < 3; i++) {
            if(player.decks.draw.length === 0) {
                player.shuffle(player.decks.discard)
                player.decks.draw = player.decks.discard
                player.decks.discard = []
            }
            player.decks.hand.push(player.decks.draw[i])
            player.decks.draw.shift()
        }
    }  
}

export class Archer extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Archer
        this.speed = 4 // 4
        this.range = 4 // 4
        this.damage = 2 // 2
        this.pictures = {
            idle: 'assets/archer-idle.gif',
            move: 'assets/archer-run.gif',
            attack: 'assets/archer-attack.gif'
        } 
        this.music = new Audio('assets/archer theme remastered.mp3')
        this.music.loop = true
    }
}
export class Fighter extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Fighter
        this.speed = 3
        this.range = 1
        this.damage = 10
        this.pictures = {
            idle: 'assets/warrior-idle.gif',
            move: 'assets/warrior-run.gif',
            attack: 'assets/warrior-attack.gif'
        } 
        this.music = new Audio('assets/fighter-music.mp3')
        this.music.loop = true
    }  
}
export class Rogue extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Rogue
        this.speed = 5
        this.range = 2
        this.damage = 4
        this.pictures = {
            idle: 'assets/rogue-idle.gif',
            move: 'assets/rogue-run.gif',
            attack: 'assets/rogue-attack.gif'
        }
        this.music = new Audio('assets/rogue-music.mp3')
        this.music.loop = true
    }  
}