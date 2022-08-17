export class Enemy {
    constructor() {
        this.type = 'enemy',
        this.location = 90,
        this.speed = 1

    }   
}
export class Goblin extends Enemy {
    constructor() {
        super()
        this.name = 'Goblin'
        this.health = 10
    }  
}
export class Orc extends Enemy {
    constructor() {
        this.name = 'Orc'
        this.health = 20
    }  
}
export class Ogre extends Enemy {
    constructor() {
        this.name = 'Ogre'
        this.health = 30
    }  
}
export class Giant extends Enemy {
    constructor() {
        this.name = 'Giant'
        this.health = 40
    }  
}
export class Demon extends Enemy {
    constructor() {
        this.name = 'Demon'
        this.health = 50
    }  
}
export class Behemoth extends Enemy {
    constructor() {
        this.name = ''
        this.health = 60
    }  
}
export class Leviathan extends Enemy {
    constructor() {
        this.name = ''
        this.health = 70
    }  
}
export class Demigog extends Enemy {
    constructor() {
        this.name = ''
        this.health = 80
    }  
}
export class Dragon extends Enemy {
    constructor() {
        this.name = ''
        this.health = 90
    }  
}
export class Tesserak extends Enemy {
    constructor() {
        this.name = ''
        this.health = 100
    }  
}