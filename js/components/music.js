import { globalState } from "../main.js"

export const boardAudio = new Audio('assets/hexscreen.mp3')
boardAudio.loop = true

export const playerAudio = new Audio('assets/fighter-music.mp3')
playerAudio.loop = true

export const characterSelect = new Audio('assets/character-select.mp3')
characterSelect.loop = true



// window.onload = (event) => {
//     boardAudio.play();
// };