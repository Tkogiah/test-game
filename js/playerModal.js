export function $(id) {
    if(typeof id === 'string' || id instanceof String) {
        return document.getElementById(id)
    }
    else {
        return id[0]
    }
}

export function displayPlayerModal() {
    const container = document.createElement('div')
    container.classList.add('player-main')
    const imageContainer = document.createElement('div')
    const playerHandContaier = document.createElement('div')
    const playerDrawPileContainer = document.createElement('div')
    //const playerDiscardPileContainer = document.createElement('div')
    document.body.appendChild(container)

}
