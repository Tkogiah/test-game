import { showPlayerAttackRange } from "./rangeAlgorithm.js"

export function addAttack(player) {
    player.attacks += 1
    showPlayerAttackRange(player)
}