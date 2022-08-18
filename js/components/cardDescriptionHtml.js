export function cardDescription(card) {
    return (`
        <div id='card-description' class="card-description">
            <h4>${card.title}<h4>
            <p>${card.description}</p>
        </div>
    `);
}
