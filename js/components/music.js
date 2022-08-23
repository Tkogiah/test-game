import { globalState } from "../main.js"

export const boardAudio = new Audio('assets/hexscreen.mp3')
boardAudio.loop = true

// export const playerAudio = new Audio('assets/fighter-music.mp3')
// playerAudio.loop = true

export const characterSelect = new Audio('assets/character-select.mp3')
characterSelect.loop = true

export function playerAudio(player) {
    const audio = new Audio(player.music)
    audio.loop = true
    return audio
} 



// window.onload = (event) => {
//     boardAudio.play();
// };