import { globalState } from "../main.js"
import { Goblin, Behemoth, Demigog, Demon, Dragon, Giant, Leviathan, Ogre, Orc, Pleroma } from '../classes/EnemyClasses.js'

//*******************FIGURE OUT HOW TO REFACTOR THESE LATER ********
export function enemyInitiator(globalState) {
    let array = globalState.globalOrder
    let e = globalState.enemies
    let round = globalState.round
    enemyRoundChange(round)
    
    array.push(e.enemyOne)
    array.push(e.enemyTwo)
    array.push(e.enemyThree)
    array.push(e.enemyFour)
    array.push(e.enemyFive)
    array.push(e.enemySix)
    array.push(e.enemySeven)
    array.push(e.enemyEight)
    array.push(e.enemyNine)
    array.push(e.enemyTen)
}
function enemyRoundChange(round) {
    if(round === 0) {
        globalState.enemies.enemyOne = new Goblin(),
        globalState.enemies.enemyTwo = new Goblin(),
        globalState.enemies.enemyThree = new Goblin(),
        globalState.enemies.enemyFour = new Goblin(),
        globalState.enemies.enemyFive = new Goblin(),
        globalState.enemies.enemySix = new Goblin(),
        globalState.enemies.enemySeven = new Goblin(),
        globalState.enemies.enemyEight = new Goblin(),
        globalState.enemies.enemyNine = new Goblin(),
        globalState.enemies. enemyTen = new Goblin()
    }
    else if(round === 1){
        globalState.enemies.enemyOne = new Orc() 
        globalState.enemies.enemyTwo = new Orc() 
        globalState.enemies.enemyThree = new Orc()
        globalState.enemies.enemyFour = new Orc()
        globalState.enemies.enemyFive = new Orc()
        globalState.enemies.enemySix = new Orc()
        globalState.enemies.enemySeven = new Orc()
        globalState.enemies.enemyEight = new Orc()
        globalState.enemies.enemyNine = new Orc()
        globalState.enemies.enemyTen = new Orc()
    }
    else if(round === 2){
        globalState.enemies.enemyOne = new Ogre()
        globalState.enemies.enemyTwo = new Ogre() 
        globalState.enemies.enemyThree = new Ogre()
        globalState.enemies.enemyFour = new Ogre()
        globalState.enemies.enemyFive = new Ogre()
        globalState.enemies.enemySix = new Ogre()
        globalState.enemies.enemySeven = new Ogre()
        globalState.enemies.enemyEight = new Ogre()
        globalState.enemies.enemyNine = new Ogre()
        globalState.enemies.enemyTen = new Ogre()
    }
    else if(round === 3){
        globalState.enemies.enemyOne = new Giant()
        globalState.enemies.enemyTwo = new Giant() 
        globalState.enemies.enemyThree = new Giant()
        globalState.enemies.enemyFour = new Giant()
        globalState.enemies.enemyFive = new Giant()
        globalState.enemies.enemySix = new Giant()
        globalState.enemies.enemySeven = new Giant()
        globalState.enemies.enemyEight = new Giant()
        globalState.enemies.enemyNine = new Giant()
        globalState.enemies.enemyTen = new Giant()
    }
    else if(round === 4){
        globalState.enemies.enemyOne = new Demon()
        globalState.enemies.enemyTwo = new Demon() 
        globalState.enemies.enemyThree = new Demon()
        globalState.enemies.enemyFour = new Demon()
        globalState.enemies.enemyFive = new Demon()
        globalState.enemies.enemySix = new Demon()
        globalState.enemies.enemySeven = new Demon()
        globalState.enemies.enemyEight = new Demon()
        globalState.enemies.enemyNine = new Demon()
        globalState.enemies.enemyTen = new Demon()
    }
    else if(round === 5){
        globalState.enemies.enemyOne = new Behemoth()
        globalState.enemies.enemyTwo = new Behemoth() 
        globalState.enemies.enemyThree = new Behemoth()
        globalState.enemies.enemyFour = new Behemoth()
        globalState.enemies.enemyFive = new Behemoth()
        globalState.enemies.enemySix = new Behemoth()
        globalState.enemies.enemySeven = new Behemoth()
        globalState.enemies.enemyEight = new Behemoth()
        globalState.enemies.enemyNine = new Behemoth()
        globalState.enemies.enemyTen = new Behemoth()
    }
    else if(round === 6){
        globalState.enemies.enemyOne = new Leviathan()
        globalState.enemies.enemyTwo = new Leviathan() 
        globalState.enemies.enemyThree = new Leviathan()
        globalState.enemies.enemyFour = new Leviathan()
        globalState.enemies.enemyFive = new Leviathan()
        globalState.enemies.enemySix = new Leviathan()
        globalState.enemies.enemySeven = new Leviathan()
        globalState.enemies.enemyEight = new Leviathan()
        globalState.enemies.enemyNine = new Leviathan()
        globalState.enemies.enemyTen = new Leviathan()
    }
    else if(round === 7){
        globalState.enemies.enemyOne = new Demigog()
        globalState.enemies.enemyTwo = new Demigog() 
        globalState.enemies.enemyThree = new Demigog()
        globalState.enemies.enemyFour = new Demigog()
        globalState.enemies.enemyFive = new Demigog()
        globalState.enemies.enemySix = new Demigog()
        globalState.enemies.enemySeven = new Demigog()
        globalState.enemies.enemyEight = new Demigog()
        globalState.enemies.enemyNine = new Demigog()
        globalState.enemies.enemyTen = new Demigog()
    }
    else if(round === 8){
        globalState.enemies.enemyOne = new Dragon()
        globalState.enemies.enemyTwo = new Dragon() 
        globalState.enemies.enemyThree = new Dragon()
        globalState.enemies.enemyFour = new Dragon()
        globalState.enemies.enemyFive = new Dragon()
        globalState.enemies.enemySix = new Dragon()
        globalState.enemies.enemySeven = new Dragon()
        globalState.enemies.enemyEight = new Dragon()
        globalState.enemies.enemyNine = new Dragon()
        globalState.enemies.enemyTen = new Dragon()
    }
    else if(round === 9){
        globalState.enemies.enemyOne = new Pleroma()
        globalState.enemies.enemyTwo = new Pleroma() 
        globalState.enemies.enemyThree = new Pleroma()
        globalState.enemies.enemyFour = new Pleroma()
        globalState.enemies.enemyFive = new Pleroma()
        globalState.enemies.enemySix = new Pleroma()
        globalState.enemies.enemySeven = new Pleroma()
        globalState.enemies.enemyEight = new Pleroma()
        globalState.enemies.enemyNine = new Pleroma()
        globalState.enemies.enemyTen = new Pleroma()
    }
    else if(round > 9) {
        alert('YOU WIN!!!!')
    }
}

