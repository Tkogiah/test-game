import * as playerButton from '../js/components/mainButtons.js'

export let globalState = {
    round: 0,
    players: {
        player1: {
            name: '',
            stats: [],
            decks: {
                hand: ['action card',2,3,4,5],
                draw: [1,1,1,1,1,1],
                discard: []
            }
        },
        player2: {
            name: '',
            stats: [],
            decks: {
                hand: [1,2,3,4,5],
                draw: [1,1,1,1,1,1],
                discard: []
            }
        }
    }
}