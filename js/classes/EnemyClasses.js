export class Enemy {
    constructor() {
        this.type = 'enemy',
        this.location = 90,
        this.speed = 1
    }
    advanceForward() {
        this.removeLocation()
        let movement = Math.floor(Math.random() * 10) + 1
        this.location -= movement
        this.showLocation()
    }
    showLocation() {
        let enemyLocation = document.getElementById(`${this.location}`)
        enemyLocation.classList.add('red')
    }
    removeLocation() {
        let enemyLocation = document.getElementById(`${this.location}`)
        enemyLocation.classList.remove('red')
    }
    takeDamage(damage) {
        this.health -= damage
    }
       
}
export class Goblin extends Enemy {
    constructor() {
        super()
        this.name = 'Goblin'
        this.health = 10
        this.round = 0
        this.picture = 'assets/goblin.gif'
    }  
}
export class Orc extends Enemy {
    constructor() {
        super()
        this.name = 'Orc'
        this.health = 20
        this.round = 1
    }  
}
export class Ogre extends Enemy {
    constructor() {
        super()
        this.name = 'Ogre'
        this.health = 30
        this.round = 2
    }  
}
export class Giant extends Enemy {
    constructor() {
        super()
        this.name = 'Giant'
        this.health = 40
        this.round = 3
    }  
}
export class Demon extends Enemy {
    constructor() {
        super()
        this.name = 'Demon'
        this.health = 50
        this.round = 4
    }  
}
export class Behemoth extends Enemy {
    constructor() {
        super()
        this.name = 'Behemoth'
        this.health = 60
        this.round = 5
    }  
}
export class Leviathan extends Enemy {
    constructor() {
        super()
        this.name = 'Leviathan'
        this.health = 70
        this.round = 6
    }  
}
export class Demigog extends Enemy {
    constructor() {
        super()
        this.name = 'Demigog'
        this.health = 80
        this.round = 7
    }  
}
export class Dragon extends Enemy {
    constructor() {
        super()
        this.name = 'Dragon'
        this.health = 90
        this.round = 8
    }  
}
export class Pleroma extends Enemy {
    constructor() {
        super()
        this.name = 'Pleroma'
        this.health = 100
        this.round = 9
    }  
}