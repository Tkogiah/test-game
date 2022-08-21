import {addAttack} from '../game-logic/playerAttack.js'
import {addMovement} from '../game-logic/playerMovement.js'

class Deck {
    constructor(cards) {
        this.cards = cards
    }
}



export class Action {
    constructor(player) {
        this.title = "Action"
        this.description = 'Use this card to attack or Move'
        this.html = function() {
            this.displayAction()
            
        }
        this.functionality = function(){
            this.addClickFunction(player)
        }
    }
    displayAction() {    
        
        return (`
            <div id="card-attack"
            class="card-details-action column center card-details-action">  
            </div>
            <div id="card-movement"
            class="card-details-action column center card-details-action">
            </div>
        `)
    }
    addClickFunction(player) {
        const attack = document.getElementById('card-attack')
        const movement = document.getElementById('card-movement')
        attack.innerText = 'Attack'
        movement.innerText = 'Movement'
        attack.addEventListener('click', function(){
            addAttack(player)
        })
        movement.addEventListener('click', function(){
            addMovement(player)
        })
    }   
}


// class SpeedBoots extends Card {
//     constructor(name) {}
//     super(title) {}
// }